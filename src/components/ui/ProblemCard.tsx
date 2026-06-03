'use client'
 
import Link from 'next/link'
import type { Problem } from '@/types'
 
const difficultyColor: Record<Problem['difficulty'], string> = {
  'Dễ':         '#34c759',
  'Trung bình': '#ff9f0a',
  'Khó':        '#ff3b30',
}
 
const subjectIcon: Record<string, string> = {
  'Đại số':    '𝑥',
  'Giải tích': '∫',
  'Hình học':  '△',
}
 
export function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <Link href={`/problems/${problem.id}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          background: '#ffffff',
          border: '1px solid #e0e0e0',
          borderRadius: 18,
          padding: 24,
          cursor: 'pointer',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          height: '100%',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.boxShadow = 'none'
          el.style.transform = 'translateY(0)'
        }}
      >
        {/* Subject icon */}
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: '#f5f5f7', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 22, fontFamily: 'Georgia, serif',
          color: '#0066cc', marginBottom: 16,
        }}>
          {subjectIcon[problem.subject] ?? '📐'}
        </div>
 
        {/* Title */}
        <h3 style={{
          fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
          fontSize: 21, fontWeight: 600, color: '#1d1d1f',
          margin: '0 0 8px', letterSpacing: '0.231px', lineHeight: 1.19,
        }}>
          {problem.title}
        </h3>
 
        {/* Description */}
        <p style={{
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          fontSize: 14, color: '#7a7a7a', margin: '0 0 16px',
          letterSpacing: '-0.224px', lineHeight: 1.43,
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {problem.description}
        </p>
 
        {/* Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{
            padding: '3px 10px', background: '#f5f5f7', borderRadius: 9999,
            fontSize: 12, color: '#333333',
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            letterSpacing: '-0.12px',
          }}>
            {problem.subject}
          </span>
          <span style={{
            padding: '3px 10px',
            background: `${difficultyColor[problem.difficulty]}18`,
            borderRadius: 9999, fontSize: 12,
            color: difficultyColor[problem.difficulty],
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            fontWeight: 600, letterSpacing: '-0.12px',
          }}>
            {problem.difficulty}
          </span>
          <span style={{ marginLeft: 'auto', fontSize: 17, color: '#0066cc' }}>→</span>
        </div>
      </article>
    </Link>
  )
}