// ─── Game Dimensions ─────────────────────────────────────────────────────────
export const GAME_WIDTH = 800
export const GAME_HEIGHT = 160
export const GROUND_Y = 20
export const PLAYER_X = 80
export const PLAYER_WIDTH = 32
export const PLAYER_HEIGHT = 48
 
// ─── Win Condition ────────────────────────────────────────────────────────────
export const TOTAL_OBSTACLES = 68
export const GOLDEN_OBSTACLE_INDEX = 67  // 0-based
 
// ─── Physics ──────────────────────────────────────────────────────────────────
export const GRAVITY = 0.55
export const JUMP_VELOCITY = -12
export const GROUND_LEVEL = 0
 
// ─── Speed Tiers (px/frame) — giảm tốc độ xuống cho dễ hơn ──────────────────
export const SPEED_TIERS = {
  easy:     4.0,   // 0–20
  medium:   5.0,   // 21–40
  hard:     6.0,   // 41–55
  veryhard: 6.5,   // 56–68
} as const
 
export function getSpeedForScore(score: number): number {
  if (score <= 20) return SPEED_TIERS.easy
  if (score <= 40) return SPEED_TIERS.medium
  if (score <= 55) return SPEED_TIERS.hard
  return SPEED_TIERS.veryhard
}
 
// ─── Obstacle Spawning ────────────────────────────────────────────────────────
export const MIN_OBSTACLE_GAP = 320
export const MAX_OBSTACLE_GAP = 520
 
export const CACTUS_WIDTH = 24
export const CACTUS_HEIGHT_MIN = 36
export const CACTUS_HEIGHT_MAX = 52
 
export const GOLDEN_CACTUS_WIDTH = 28
export const GOLDEN_CACTUS_HEIGHT = 58
 
// ─── Collision ────────────────────────────────────────────────────────────────
export const HITBOX_MARGIN = 6