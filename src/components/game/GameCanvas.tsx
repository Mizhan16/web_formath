'use client'

import React from 'react'
import type { GameState } from '@/types'
import { PlayerCharacter } from './PlayerCharacter'
import { CactusObstacle } from './CactusObstacle'
import { GAME_HEIGHT, GAME_WIDTH, GROUND_Y } from '@/lib/gameConstants'

interface GameCanvasProps {
  gameState: GameState
  avatarUrl?: string
}

/**
 * Pure display component – renders the game scene as DOM + CSS.
 * No game logic here; receives state as props.
 */
export function GameCanvas({ gameState, avatarUrl }: GameCanvasProps) {
  const { playerY, isJumping, obstacles, clouds, frame } = gameState
  const groundY = GAME_HEIGHT - GROUND_Y

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: GAME_WIDTH,
        height: GAME_HEIGHT,
        background: '#ffffff',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* ── CLOUDS ── */}
      {clouds.map(cloud => (
        <div
          key={cloud.id}
          style={{
            position: 'absolute',
            left: cloud.x,
            top: cloud.y,
            width: cloud.width,
            height: 18,
          }}
        >
          {/* Simple CSS cloud */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 10,
            background: '#e8e8ea',
            borderRadius: 6,
          }} />
          <div style={{
            position: 'absolute',
            bottom: 6,
            left: '20%',
            width: '40%',
            height: 14,
            background: '#e8e8ea',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 4,
            left: '45%',
            width: '35%',
            height: 12,
            background: '#e8e8ea',
            borderRadius: '50%',
          }} />
        </div>
      ))}

      {/* ── PLAYER ── */}
      <PlayerCharacter
        playerY={playerY}
        isJumping={isJumping}
        frame={frame}
        avatarUrl={avatarUrl}
      />

      {/* ── OBSTACLES ── */}
      {obstacles.map(obs => (
        <CactusObstacle
          key={obs.id}
          x={obs.x}
          width={obs.width}
          height={obs.height}
          isGolden={obs.isGolden}
        />
      ))}

      {/* ── GROUND LINE ── */}
      <div
        style={{
          position: 'absolute',
          bottom: GROUND_Y - 2,
          left: 0,
          right: 0,
          height: 2,
          background: '#1d1d1f',
        }}
      />

      {/* ── GROUND TEXTURE dots ── */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: GROUND_Y - 8,
            left: ((i * 42 + (frame * 2)) % (GAME_WIDTH + 50)) - 20,
            width: 3,
            height: 3,
            background: '#cccccc',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  )
}
