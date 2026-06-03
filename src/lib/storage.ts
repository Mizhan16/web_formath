import type { UnlockedProblems } from '@/types'

const STORAGE_KEY = 'math-unlocked-problems'

/**
 * Safely read unlocked problems from localStorage.
 * Returns empty object on any failure (SSR, corrupt data, empty).
 */
export function getUnlockedProblems(): UnlockedProblems {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    // Validate it's a plain object with boolean values
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      return {}
    }
    return parsed as UnlockedProblems
  } catch {
    return {}
  }
}

/**
 * Check if a specific problem is unlocked.
 */
export function isProblemUnlocked(problemId: string): boolean {
  const data = getUnlockedProblems()
  return data[problemId] === true
}

/**
 * Mark a problem as unlocked and persist to localStorage.
 */
export function unlockProblem(problemId: string): void {
  if (typeof window === 'undefined') return
  try {
    const data = getUnlockedProblems()
    data[problemId] = true
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage might be full or blocked — silently fail
  }
}
