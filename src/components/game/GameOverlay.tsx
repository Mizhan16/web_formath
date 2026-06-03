'use client'

import React from 'react'
import type { GameStatus } from '@/types'
import { TOTAL_OBSTACLES } from '@/lib/gameConstants'

interface GameOverlayProps {
  status: GameStatus
  score: number
  onStart: () => void
  onViewSolution: () => void
}

const overlayBase: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  background: 'rgba(255,255,255,0.92)',
  backdropFilter: 'blur(4px)',
  zIndex: 10,
  fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
}

const btnPrimary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '11px 28px',
  background: '#0066cc',
  color: '#ffffff',
  fontSize: 17,
  fontWeight: 400,
  borderRadius: 9999,
  border: 'none',
  cursor: 'pointer',
  letterSpacing: '-0.374px',
  transition: 'transform 0.1s ease, background 0.15s ease',
}

export function GameOverlay({ status, score, onStart, onViewSolution }: GameOverlayProps) {
  const [pressed, setPressed] = React.useState(false)

  if (status === 'running') return null

  // ── IDLE ──────────────────────────────────────────────────────────────────
  if (status === 'idle') {
    return (
      <div style={overlayBase}>
        <div style={{ fontSize: 32, marginBottom: 4 }}>🎮</div>
        <p style={{
          fontSize: 21,
          fontWeight: 600,
          color: '#1d1d1f',
          margin: 0,
          letterSpacing: '0.231px',
        }}>
          Vượt qua thử thách để xem lời giải
        </p>
        <p style={{
          fontSize: 14,
          color: '#7a7a7a',
          margin: 0,
          letterSpacing: '-0.224px',
          textAlign: 'center',
          maxWidth: 320,
          lineHeight: 1.5,
        }}>
          Nhảy qua <strong style={{ color: '#1d1d1f' }}>68 xương rồng</strong>.
          Xương rồng vàng ⭐ là cái cuối cùng!
        </p>
        <button
          style={{
            ...btnPrimary,
            transform: pressed ? 'scale(0.95)' : 'scale(1)',
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={onStart}
        >
          Bắt đầu chơi
        </button>
        <p style={{ fontSize: 12, color: '#7a7a7a', margin: 0 }}>
          Nhấn <kbd style={{
            background: '#f5f5f7',
            border: '1px solid #e0e0e0',
            borderRadius: 4,
            padding: '1px 6px',
            fontSize: 11,
          }}>Space</kbd> hoặc <kbd style={{
            background: '#f5f5f7',
            border: '1px solid #e0e0e0',
            borderRadius: 4,
            padding: '1px 6px',
            fontSize: 11,
          }}>↑</kbd> để nhảy
        </p>
      </div>
    )
  }

  // ── GAME OVER ─────────────────────────────────────────────────────────────
  if (status === 'gameover') {
    return (
      <div style={overlayBase}>
        <div style={{ fontSize: 28 }}>💥</div>
        <p style={{
          fontSize: 24,
          fontWeight: 600,
          color: '#1d1d1f',
          margin: 0,
          letterSpacing: '-0.374px',
        }}>
          GAME OVER
        </p>
        <p style={{
          fontSize: 17,
          color: '#7a7a7a',
          margin: 0,
          letterSpacing: '-0.374px',
        }}>
          Bạn đã vượt qua:{' '}
          <strong style={{ color: '#0066cc' }}>{score}</strong>
          {' / '}{TOTAL_OBSTACLES} 🌵
        </p>
        <button
          style={{
            ...btnPrimary,
            transform: pressed ? 'scale(0.95)' : 'scale(1)',
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={onStart}
        >
          Chơi lại
        </button>
        <p style={{ fontSize: 12, color: '#cccccc', margin: 0 }}>
          hoặc nhấn Space / ↑
        </p>
      </div>
    )
  }

  // ── WON ───────────────────────────────────────────────────────────────────
  if (status === 'won') {
    return (
      <div style={{ ...overlayBase, background: 'rgba(255,255,255,0.96)' }}>
        <div style={{ fontSize: 40, lineHeight: 1 }}>🎉</div>
        <p style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#1d1d1f',
          margin: 0,
          letterSpacing: '-0.28px',
        }}>
          CHÚC MỪNG!
        </p>
        <p style={{
          fontSize: 17,
          color: '#1d1d1f',
          margin: 0,
          letterSpacing: '-0.374px',
          textAlign: 'center',
        }}>
          Bạn đã vượt qua Xương Rồng Vàng ⭐
        </p>
        <p style={{
          fontSize: 14,
          color: '#7a7a7a',
          margin: 0,
          letterSpacing: '-0.224px',
        }}>
          Lời giải bài toán đã được mở khóa 🔓
        </p>
        <button
          style={{
            ...btnPrimary,
            marginTop: 8,
            transform: pressed ? 'scale(0.95)' : 'scale(1)',
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={onViewSolution}
        >
          Xem lời giải →
        </button>
      </div>
    )
  }

  return null
}
