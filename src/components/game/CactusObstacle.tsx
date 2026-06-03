'use client'

import React from 'react'
import { GAME_HEIGHT, GROUND_Y } from '@/lib/gameConstants'

interface CactusObstacleProps {
  x: number
  width: number
  height: number
  isGolden: boolean
}

/**
 * Pixel-art cactus rendered as inline SVG.
 * Thường: màu xanh lá đậm / Golden: màu vàng-cam rực rỡ
 */
export function CactusObstacle({ x, width, height, isGolden }: CactusObstacleProps) {
  const groundY = GAME_HEIGHT - GROUND_Y
  const top = groundY - height

  const fill   = isGolden ? '#f5a623' : '#2d6a2d'
  const stroke = isGolden ? '#c47d0e' : '#1a3d1a'
  const shine  = isGolden ? '#ffe082' : '#5aab5a'

  return (
    <svg
      style={{
        position: 'absolute',
        left: x,
        top,
        overflow: 'visible',
      }}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Main trunk */}
      <rect
        x={width / 2 - 4}
        y={height * 0.35}
        width={8}
        height={height * 0.65}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        rx={2}
      />

      {/* Left arm */}
      <rect
        x={width / 2 - 10}
        y={height * 0.45}
        width={6}
        height={height * 0.25}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        rx={2}
      />
      {/* Left arm vertical */}
      <rect
        x={width / 2 - 12}
        y={height * 0.3}
        width={6}
        height={height * 0.22}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        rx={2}
      />

      {/* Right arm */}
      <rect
        x={width / 2 + 4}
        y={height * 0.55}
        width={6}
        height={height * 0.2}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        rx={2}
      />
      {/* Right arm vertical */}
      <rect
        x={width / 2 + 6}
        y={height * 0.4}
        width={6}
        height={height * 0.22}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        rx={2}
      />

      {/* Top of trunk */}
      <rect
        x={width / 2 - 4}
        y={0}
        width={8}
        height={height * 0.4}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        rx={2}
      />

      {/* Shine / highlight */}
      <rect
        x={width / 2 - 2}
        y={height * 0.05}
        width={2}
        height={height * 0.3}
        fill={shine}
        opacity={0.6}
        rx={1}
      />

      {/* Golden star on top for boss cactus */}
      {isGolden && (
        <text
          x={width / 2}
          y={-4}
          textAnchor="middle"
          fontSize={14}
          style={{ userSelect: 'none' }}
        >
          ⭐
        </text>
      )}
    </svg>
  )
}
