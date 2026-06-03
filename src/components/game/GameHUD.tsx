'use client'

import React from 'react'
import { TOTAL_OBSTACLES } from '@/lib/gameConstants'

interface GameHUDProps {
  score: number
}

export function GameHUD({ score }: GameHUDProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <span
        style={{
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          fontSize: 14,
          fontWeight: 600,
          color: '#1d1d1f',
          letterSpacing: '-0.224px',
        }}
      >
        🌵 Đã vượt:{' '}
        <span style={{ color: '#0066cc' }}>
          {score}
        </span>
        {' / '}{TOTAL_OBSTACLES}
      </span>

      {/* Progress bar */}
      <div
        style={{
          flex: 1,
          height: 4,
          background: '#f0f0f0',
          borderRadius: 9999,
          overflow: 'hidden',
          maxWidth: 200,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${(score / TOTAL_OBSTACLES) * 100}%`,
            background: score >= 56
              ? '#f5a623'
              : score >= 41
              ? '#ff6b35'
              : '#0066cc',
            borderRadius: 9999,
            transition: 'width 0.3s ease, background 0.5s ease',
          }}
        />
      </div>
    </div>
  )
}
