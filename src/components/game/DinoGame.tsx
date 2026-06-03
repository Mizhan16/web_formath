'use client'

import React, { useCallback } from 'react'
import { useGameEngine } from './useGameEngine'
import { GameCanvas } from './GameCanvas'
import { GameHUD } from './GameHUD'
import { GameOverlay } from './GameOverlay'

interface DinoGameProps {
  onWin: () => void
  avatarUrl?: string
}

/**
 * DinoGame — kết hợp engine + canvas + HUD + overlay.
 * Gọi onWin() khi người chơi vượt qua xương rồng vàng.
 */
export function DinoGame({ onWin, avatarUrl }: DinoGameProps) {
  const { gameState, startGame, jump } = useGameEngine()

  const handleViewSolution = useCallback(() => {
    onWin()
  }, [onWin])

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
      }}
    >
      {/* HUD */}
      <GameHUD score={gameState.score} />

      {/* Divider */}
      <div style={{ height: 1, background: '#f0f0f0' }} />

      {/* Game area — clickable/tappable for mobile jump */}
      <div
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={() => {
          if (gameState.status === 'idle' || gameState.status === 'gameover') {
            startGame()
          } else {
            jump()
          }
        }}
      >
        <GameCanvas gameState={gameState} avatarUrl={avatarUrl} />
        <GameOverlay
          status={gameState.status}
          score={gameState.score}
          onStart={startGame}
          onViewSolution={handleViewSolution}
        />
      </div>

      {/* Mobile hint */}
      <div style={{
        padding: '8px 16px',
        background: '#fafafc',
        borderTop: '1px solid #f0f0f0',
        fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
        fontSize: 11,
        color: '#7a7a7a',
        textAlign: 'center',
        letterSpacing: '-0.12px',
      }}>
        Nhấn vào màn hình hoặc Space / ↑ để nhảy
      </div>
    </div>
  )
}
