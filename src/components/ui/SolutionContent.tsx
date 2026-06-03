'use client'

import React from 'react'
import type { SolutionSection } from '@/types'

interface SolutionContentProps {
  steps: SolutionSection[]
}

/**
 * Renders the unlocked solution steps with Apple-style card design.
 */
export function SolutionContent({ steps }: SolutionContentProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {steps.map((step, i) => (
        <div
          key={i}
          style={{
            background: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: 18,
            padding: 24,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Step number accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 4,
            height: '100%',
            background: '#0066cc',
            borderRadius: '0 0 0 18px',
          }} />

          <div style={{ paddingLeft: 12 }}>
            {/* Step label */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '2px 10px',
              background: '#0066cc',
              borderRadius: 9999,
              marginBottom: 10,
            }}>
              <span style={{
                fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}>
                Bước {step.step}
              </span>
            </div>

            {/* Step title */}
            <h4 style={{
              fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
              fontSize: 17,
              fontWeight: 600,
              color: '#1d1d1f',
              margin: '0 0 8px',
              letterSpacing: '-0.374px',
            }}>
              {step.title}
            </h4>

            {/* Step content */}
            <p style={{
              fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
              fontSize: 17,
              color: '#333333',
              margin: step.formula ? '0 0 12px' : 0,
              lineHeight: 1.6,
              letterSpacing: '-0.374px',
            }}>
              {step.content}
            </p>

            {/* Formula block */}
            {step.formula && (
              <div style={{
                background: '#f5f5f7',
                borderRadius: 11,
                padding: '12px 16px',
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 16,
                color: '#1d1d1f',
                fontWeight: 600,
                letterSpacing: '0.5px',
                overflowX: 'auto',
                whiteSpace: 'pre',
              }}>
                {step.formula}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Completion badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '16px',
        background: 'rgba(52, 199, 89, 0.08)',
        border: '1px solid rgba(52, 199, 89, 0.3)',
        borderRadius: 18,
        marginTop: 8,
      }}>
        <span style={{ fontSize: 20 }}>✅</span>
        <span style={{
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          fontSize: 15,
          fontWeight: 600,
          color: '#1d6130',
          letterSpacing: '-0.224px',
        }}>
          Hoàn thành — Bạn đã hiểu bài toán này!
        </span>
      </div>
    </div>
  )
}
