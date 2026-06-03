'use client'
 
import { useCallback, useEffect, useRef, useState } from 'react'
import type { GameState, Obstacle, Cloud } from '@/types'
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  GROUND_Y,
  PLAYER_X,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  GRAVITY,
  JUMP_VELOCITY,
  GROUND_LEVEL,
  TOTAL_OBSTACLES,
  GOLDEN_OBSTACLE_INDEX,
  getSpeedForScore,
  MIN_OBSTACLE_GAP,
  MAX_OBSTACLE_GAP,
  CACTUS_WIDTH,
  CACTUS_HEIGHT_MIN,
  CACTUS_HEIGHT_MAX,
  GOLDEN_CACTUS_WIDTH,
  GOLDEN_CACTUS_HEIGHT,
  HITBOX_MARGIN,
} from '@/lib/gameConstants'
 
let _idCounter = 0
function nextId() { return ++_idCounter }
 
function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
 
function makeObstacle(x: number, index: number): Obstacle {
  const isGolden = index === GOLDEN_OBSTACLE_INDEX
  return {
    id: nextId(),
    x,
    width:  isGolden ? GOLDEN_CACTUS_WIDTH  : CACTUS_WIDTH,
    height: isGolden ? GOLDEN_CACTUS_HEIGHT : randomBetween(CACTUS_HEIGHT_MIN, CACTUS_HEIGHT_MAX),
    isGolden,
  }
}
 
function makeClouds(): Cloud[] {
  return [
    { id: nextId(), x: 180, y: 22, width: 65 },
    { id: nextId(), x: 480, y: 36, width: 80 },
    { id: nextId(), x: 700, y: 14, width: 55 },
  ]
}
 
function makeInitialState(): GameState {
  return {
    status: 'idle',
    score: 0,
    playerY: GROUND_LEVEL,
    isJumping: false,
    obstacles: [makeObstacle(GAME_WIDTH + 300, 0)],
    clouds: makeClouds(),
    speed: getSpeedForScore(0),
    frame: 0,
  }
}
 
function collides(playerY: number, obs: Obstacle): boolean {
  const groundPx = GAME_HEIGHT - GROUND_Y
 
  const pL = PLAYER_X + HITBOX_MARGIN
  const pR = PLAYER_X + PLAYER_WIDTH  - HITBOX_MARGIN
  const pT = groundPx - playerY - PLAYER_HEIGHT + HITBOX_MARGIN
  const pB = groundPx - playerY - HITBOX_MARGIN
 
  const oL = obs.x + HITBOX_MARGIN
  const oR = obs.x + obs.width  - HITBOX_MARGIN
  const oT = groundPx - obs.height
  const oB = groundPx
 
  return pR > oL && pL < oR && pB > oT && pT < oB
}
 
export function useGameEngine() {
  const [gameState, setGameState] = useState<GameState>(makeInitialState)
 
  const stateRef   = useRef<GameState>(makeInitialState())
  const rafRef     = useRef<number | null>(null)
  const velYRef    = useRef<number>(0)
 
  // ── score được lưu trong ref riêng, KHÔNG tính lại từ mảng obstacles ────────
  // Đây là fix chính cho bug bộ đếm: dùng ref tích lũy thay vì đếm lại mỗi frame
  const scoreRef   = useRef<number>(0)
  const passedIdsRef = useRef<Set<number>>(new Set())
  const spawnedRef = useRef<number>(1)
 
  const publish = useCallback((s: GameState) => {
    stateRef.current = s
    setGameState({ ...s })
  }, [])
 
  const jump = useCallback(() => {
    const s = stateRef.current
    if (s.status !== 'running' || s.isJumping) return
    velYRef.current = JUMP_VELOCITY
    publish({ ...s, isJumping: true })
  }, [publish])
 
  const tick = useCallback(() => {
    const s = stateRef.current
    if (s.status !== 'running') return
 
    // ── Physics ──────────────────────────────────────────────────────────────
    velYRef.current += GRAVITY
    let newY    = s.playerY - velYRef.current
    let jumping = s.isJumping
 
    if (newY <= GROUND_LEVEL) {
      newY = GROUND_LEVEL
      velYRef.current = 0
      jumping = false
    }
 
    const speed = getSpeedForScore(scoreRef.current)
 
    // ── Di chuyển obstacles ───────────────────────────────────────────────────
    let obs = s.obstacles.map(o => ({ ...o, x: o.x - speed }))
 
    // ── Kiểm tra collision TRƯỚC khi xử lý đếm ────────────────────────────────
    for (const o of obs) {
      if (collides(newY, o)) {
        publish({
          ...s, status: 'gameover',
          score: scoreRef.current,
          playerY: newY, isJumping: jumping,
          obstacles: obs, speed, frame: s.frame + 1,
        })
        return
      }
    }
 
    // ── Đếm obstacle vừa bị vượt qua frame này ────────────────────────────────
    // Logic: obstacle được tính là "vượt qua" khi cạnh phải đi qua PLAYER_X
    // Dùng threshold nhỏ để chỉ đếm đúng 1 lần
    let wonByGolden = false
    for (const o of obs) {
  if (o.x + o.width < PLAYER_X && !passedIdsRef.current.has(o.id)) {
    passedIdsRef.current.add(o.id)
    if (o.isGolden) {
      wonByGolden = true
    } else {
      scoreRef.current = scoreRef.current + 1
    }
  }
}
 
    // ── WIN ───────────────────────────────────────────────────────────────────
    if (wonByGolden) {
      publish({
        ...s, status: 'won',
        score: TOTAL_OBSTACLES,
        playerY: newY, isJumping: jumping,
        obstacles: obs, speed, frame: s.frame + 1,
      })
      return
    }
 
    // ── Xóa obstacle đã ra khỏi màn hình ────────────────────────────────────
    obs = obs.filter(o => o.x + o.width > -200)
 
    // ── Spawn obstacle mới ────────────────────────────────────────────────────
    if (spawnedRef.current < TOTAL_OBSTACLES && obs.length > 0) {
      const last = obs[obs.length - 1]
      if (last.x < GAME_WIDTH - MIN_OBSTACLE_GAP) {
        const gap = randomBetween(MIN_OBSTACLE_GAP, MAX_OBSTACLE_GAP)
        obs.push(makeObstacle(last.x + last.width + gap, spawnedRef.current))
        spawnedRef.current++
      }
    }
 
    // ── Di chuyển clouds ─────────────────────────────────────────────────────
    let clouds = s.clouds.map(c => ({ ...c, x: c.x - speed * 0.3 }))
    if (clouds.length > 0 && clouds[0].x + 100 < 0) {
      clouds = [
        ...clouds.slice(1),
        {
          id: nextId(),
          x: GAME_WIDTH + 60,
          y: randomBetween(8, 45),
          width: randomBetween(50, 90),
        },
      ]
    }
 
    publish({
      ...s, status: 'running',
      score: scoreRef.current,
      playerY: newY, isJumping: jumping,
      obstacles: obs, clouds, speed, frame: s.frame + 1,
    })
 
    rafRef.current = requestAnimationFrame(tick)
  }, [publish])
 
  const startGame = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    // Reset tất cả ref khi restart
    velYRef.current    = 0
    scoreRef.current   = 0
    passedIdsRef.current = new Set()
    spawnedRef.current = 1
 
    const fresh: GameState = { ...makeInitialState(), status: 'running' }
    publish(fresh)
    rafRef.current = requestAnimationFrame(tick)
  }, [tick, publish])
 
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return
      e.preventDefault()
      const s = stateRef.current
      if (s.status === 'idle' || s.status === 'gameover') startGame()
      else if (s.status === 'running') jump()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [startGame, jump])
 
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])
 
  return { gameState, startGame, jump }
}