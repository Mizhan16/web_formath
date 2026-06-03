'use client'

import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { isProblemUnlocked, unlockProblem } from '@/lib/storage'
import { DinoGame } from './DinoGame'

interface GameGateProps {
  /** Unique problem identifier, e.g. "problem-001" */
  problemId: string
  /** The solution content to show after unlocking */
  children: ReactNode
  /** Avatar image URL for the player character */
  avatarUrl?: string
}

/**
 * GameGate wraps the solution content behind a mini-game gate.
 *
 * - If already unlocked (localStorage): renders children directly.
 * - If locked: renders DinoGame; on win → saves to localStorage → shows children.
 *
 * Hydration-safe: localStorage is only read client-side via useEffect.
 */
export function GameGate({ problemId, children, avatarUrl = '/avatar.jpg' }: GameGateProps) {
  // Start as null to avoid hydration mismatch
  const [unlocked, setUnlocked] = useState<boolean | null>(null)

  // Read localStorage only on client
  useEffect(() => {
    setUnlocked(isProblemUnlocked(problemId))
  }, [problemId])

  const handleWin = () => {
    unlockProblem(problemId)
    setUnlocked(true)
  }

  // SSR / initial render: show nothing to avoid hydration mismatch
  if (unlocked === null) {
    return (
      <div
        style={{
          height: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          color: '#7a7a7a',
          fontSize: 14,
        }}
      >
        Đang tải...
      </div>
    )
  }

  // Already unlocked
  if (unlocked) {
    return (
      <div>
        {/* Unlocked badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 12px',
            background: '#f5f5f7',
            borderRadius: 9999,
            marginBottom: 24,
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            fontSize: 12,
            color: '#7a7a7a',
            letterSpacing: '-0.12px',
          }}
        >
          <span>🔓</span>
          <span>Lời giải đã được mở khóa</span>
        </div>
        {children}
      </div>
    )
  }

  // Locked — show game
  return (
    <div>
      {/* Lock indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 20,
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: '#f5f5f7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
          }}
        >
          🔒
        </div>
        <div>
          <p style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 600,
            color: '#1d1d1f',
            letterSpacing: '-0.374px',
          }}>
            Lời giải đang bị khóa
          </p>
          <p style={{
            margin: 0,
            fontSize: 14,
            color: '#7a7a7a',
            letterSpacing: '-0.224px',
          }}>
            Vượt qua mini-game bên dưới để mở khóa
          </p>
        </div>
      </div>

      <DinoGame onWin={handleWin} avatarUrl={avatarUrl} />
    </div>
  )
}
