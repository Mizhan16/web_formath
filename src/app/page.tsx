'use client'

import { PROBLEMS } from '@/lib/problems'
import { ProblemCard } from '@/components/ui/ProblemCard'
 
export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: '#f5f5f7',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
          fontSize: 21, fontWeight: 600, color: '#0066cc',
          letterSpacing: '0.231px', margin: '0 0 12px',
        }}>
          web_formath
        </p>
        <h1 style={{
          fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
          fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 600,
          color: '#1d1d1f', letterSpacing: '-0.28px',
          lineHeight: 1.07, margin: '0 0 16px',
        }}>
          Học toán.<br />Hiểu thật sự.
        </h1>
        <p style={{
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          fontSize: 'clamp(19px, 2.5vw, 28px)', fontWeight: 400,
          color: '#1d1d1f', lineHeight: 1.14,
          margin: '0 auto 32px', maxWidth: 560,
        }}>
          Mỗi bài toán có video giải, lý thuyết, và lời giải được mở khóa bằng mini-game.
        </p>
        <a href="#problems" style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '11px 28px', background: '#0066cc',
          color: '#ffffff', fontSize: 17, fontWeight: 400,
          borderRadius: 9999, textDecoration: 'none',
          letterSpacing: '-0.374px',
        }}>
          Xem bài toán
        </a>
      </section>
 
      {/* ── Stats ── */}
      <section style={{
        background: '#ffffff', borderBottom: '1px solid #f0f0f0',
        padding: '24px', display: 'flex',
        justifyContent: 'center', gap: 48, flexWrap: 'wrap',
      }}>
        {[
          { n: PROBLEMS.length, label: 'Bài toán' },
          { n: 3,               label: 'Môn học'  },
          { n: '100%',          label: 'Miễn phí' },
        ].map(({ n, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
              fontSize: 34, fontWeight: 600, color: '#0066cc', margin: 0,
            }}>{n}</p>
            <p style={{
              fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
              fontSize: 14, color: '#7a7a7a', margin: 0,
            }}>{label}</p>
          </div>
        ))}
      </section>
 
      {/* ── Problems grid ── */}
      <section id="problems" style={{
        maxWidth: 1100, margin: '0 auto', padding: '80px 24px',
      }}>
        <h2 style={{
          fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
          fontSize: 40, fontWeight: 600, color: '#1d1d1f',
          letterSpacing: '-0.374px', marginBottom: 40, lineHeight: 1.1,
        }}>
          Danh sách bài toán
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {PROBLEMS.map(problem => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </section>
    </div>
  )
}