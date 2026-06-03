'use client'
 
import React from 'react'
import {
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  GAME_HEIGHT,
  GROUND_Y,
  PLAYER_X,
} from '@/lib/gameConstants'
 
interface PlayerCharacterProps {
  playerY: number
  isJumping: boolean
  frame: number
  avatarUrl?: string
}
 
export function PlayerCharacter({
  playerY,
  isJumping,
  frame,
  avatarUrl = '/avatar.jpg',
}: PlayerCharacterProps) {
  const groundY = GAME_HEIGHT - GROUND_Y
  const bottomPx = groundY - playerY
  const topPx = bottomPx - PLAYER_HEIGHT
 
  // Hoạt ảnh chạy: đổi pha mỗi 7 frame
  const legPhase = Math.floor(frame / 7) % 2
  // Tóc bay nhẹ khi chạy
  const hairOffset = isJumping ? -2 : Math.sin(frame / 8) * 1.5
 
  return (
    <div
      style={{
        position: 'absolute',
        left: PLAYER_X,
        top: topPx,
        width: PLAYER_WIDTH,
        height: PLAYER_HEIGHT,
      }}
    >
      {/* ── TÓC (phía sau đầu) ── */}
      <div style={{
        position: 'absolute',
        top: 2 + hairOffset,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 26,
        height: 18,
        background: '#1a0a00',
        borderRadius: '50% 50% 30% 30%',
        zIndex: 0,
      }} />
      {/* Tóc dài bên phải */}
      <div style={{
        position: 'absolute',
        top: 8 + hairOffset * 0.5,
        right: 1,
        width: 8,
        height: 22,
        background: '#1a0a00',
        borderRadius: '0 0 6px 6px',
        transform: `rotate(${isJumping ? 8 : legPhase === 0 ? 4 : 6}deg)`,
        zIndex: 0,
      }} />
 
      {/* ── ĐẦU: avatar hình tròn ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 26,
        height: 26,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid #1d1d1f',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        background: '#f5deb3',
        zIndex: 2,
      }}>
        <img
          src={avatarUrl}
          alt="player"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </div>
 
      {/* ── CỔ ── */}
      <div style={{
        position: 'absolute',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 8,
        height: 5,
        background: '#f5c5a0',
        zIndex: 1,
      }} />
 
      {/* ── ÁO (trên váy) ── */}
      <div style={{
        position: 'absolute',
        top: 27,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 16,
        height: 10,
        background: '#ff85a1',       // hồng nhạt cho áo
        border: '1.5px solid #c45c7a',
        borderRadius: '3px 3px 0 0',
        zIndex: 1,
      }} />
 
      {/* ── VÁY HỒNG SÀNH ĐIỆU ── */}
      {/* Thân váy */}
      <div style={{
        position: 'absolute',
        top: 35,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 22,
        height: 12,
        background: 'linear-gradient(180deg, #ff4da6 0%, #ff1a8c 100%)',
        border: '1.5px solid #c0006a',
        borderRadius: '2px 2px 6px 6px',
        zIndex: 1,
      }} />
      {/* Viền váy (ruffle) */}
      <div style={{
        position: 'absolute',
        top: 44,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 26,
        height: 5,
        background: '#ff66b8',
        border: '1.5px solid #c0006a',
        borderRadius: '0 0 8px 8px',
        zIndex: 1,
      }} />
      {/* Thắt lưng nhỏ */}
      <div style={{
        position: 'absolute',
        top: 35,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 22,
        height: 3,
        background: '#c0006a',
        borderRadius: '2px',
        zIndex: 2,
      }} />
      {/* Tim nhỏ trên váy */}
      <div style={{
        position: 'absolute',
        top: 38,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 6,
        lineHeight: 1,
        zIndex: 3,
        userSelect: 'none',
      }}>
        🤍
      </div>
 
      {/* ── CHÂN ── */}
      {isJumping ? (
        // Chân co khi nhảy
        <>
          <div style={{
            position: 'absolute', top: 47, left: 4,
            width: 5, height: 8,
            background: '#f5c5a0', border: '1.5px solid #c49070',
            borderRadius: 3,
            transform: 'rotate(-25deg)',
          }} />
          <div style={{
            position: 'absolute', top: 47, right: 4,
            width: 5, height: 8,
            background: '#f5c5a0', border: '1.5px solid #c49070',
            borderRadius: 3,
            transform: 'rotate(25deg)',
          }} />
        </>
      ) : (
        // Chân chạy
        <>
          <div style={{
            position: 'absolute', top: 47, left: 4,
            width: 5, height: 10,
            background: '#f5c5a0', border: '1.5px solid #c49070',
            borderRadius: 3,
            transformOrigin: 'top center',
            transform: `rotate(${legPhase === 0 ? -20 : 12}deg)`,
            transition: 'transform 0.07s linear',
          }} />
          <div style={{
            position: 'absolute', top: 47, right: 4,
            width: 5, height: 10,
            background: '#f5c5a0', border: '1.5px solid #c49070',
            borderRadius: 3,
            transformOrigin: 'top center',
            transform: `rotate(${legPhase === 0 ? 12 : -20}deg)`,
            transition: 'transform 0.07s linear',
          }} />
        </>
      )}
 
      {/* ── GIÀY HỒNG ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 1,
        width: 9, height: 4,
        background: '#ff1a8c',
        border: '1.5px solid #c0006a',
        borderRadius: '2px 3px 3px 2px',
        transform: isJumping ? 'none'
          : legPhase === 0 ? 'translateX(-2px)' : 'translateX(0)',
        transition: 'transform 0.07s linear',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 1,
        width: 9, height: 4,
        background: '#ff1a8c',
        border: '1.5px solid #c0006a',
        borderRadius: '2px 3px 3px 2px',
        transform: isJumping ? 'none'
          : legPhase === 0 ? 'translateX(0)' : 'translateX(-2px)',
        transition: 'transform 0.07s linear',
      }} />
    </div>
  )
}