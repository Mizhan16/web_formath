// ─── Problem Types ───────────────────────────────────────────────────────────

export interface Problem {
  id: string
  title: string
  subject: string
  difficulty: 'Dễ' | 'Trung bình' | 'Khó'
  description: string
  videoUrl?: string
  theory: TheorySection[]
  solution: SolutionSection[]
  tags: string[]
}

export interface TheorySection {
  title: string
  content: string
}

export interface SolutionSection {
  step: number
  title: string
  content: string
  formula?: string
}

// ─── Game Types ───────────────────────────────────────────────────────────────

export type GameStatus = 'idle' | 'running' | 'paused' | 'gameover' | 'won'

export type DifficultyTier = 'easy' | 'medium' | 'hard' | 'veryhard'

export interface Position {
  x: number
  y: number
}

export interface Obstacle {
  /** unique key for React rendering */
  id: number
  /** x position in pixels from left */
  x: number
  /** width of the cactus */
  width: number
  /** height of the cactus */
  height: number
  /** true = golden cactus (final boss) */
  isGolden: boolean
}

export interface Cloud {
  id: number
  x: number
  y: number
  width: number
}

export interface GameState {
  status: GameStatus
  score: number        // number of obstacles cleared
  playerY: number      // current Y from ground baseline
  isJumping: boolean
  obstacles: Obstacle[]
  clouds: Cloud[]
  speed: number        // current game speed (px/frame)
  frame: number        // raw frame counter
}

export interface UnlockedProblems {
  [problemId: string]: boolean
}
