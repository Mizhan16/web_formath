import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PROBLEMS } from '@/lib/problems'
import { SolutionContent } from '@/components/ui/SolutionContent'
import { GameGate } from '@/components/game/GameGate'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return PROBLEMS.map(p => ({ id: p.id }))
}

export default function ProblemPage({ params }: PageProps) {
  const problem = PROBLEMS.find(p => p.id === params.id)
  if (!problem) notFound()

  const difficultyColor =
    problem.difficulty === 'Dễ' ? '#34c759'
    : problem.difficulty === 'Trung bình' ? '#ff9f0a'
    : '#ff3b30'

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* ── Breadcrumb ── */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 32,
        fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
        fontSize: 14,
        color: '#7a7a7a',
        letterSpacing: '-0.224px',
      }}>
        <Link href="/" style={{ color: '#0066cc', textDecoration: 'none' }}>
          Bài toán
        </Link>
        <span>›</span>
        <span style={{ color: '#1d1d1f' }}>{problem.title}</span>
      </nav>

      {/* ── Header ── */}
      <header style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{
            padding: '4px 12px',
            background: '#f5f5f7',
            borderRadius: 9999,
            fontSize: 12,
            color: '#333333',
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            letterSpacing: '-0.12px',
          }}>
            {problem.subject}
          </span>
          <span style={{
            padding: '4px 12px',
            background: `${difficultyColor}18`,
            borderRadius: 9999,
            fontSize: 12,
            color: difficultyColor,
            fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.12px',
          }}>
            {problem.difficulty}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
          fontSize: 'clamp(28px, 5vw, 40px)',
          fontWeight: 600,
          color: '#1d1d1f',
          letterSpacing: '-0.374px',
          lineHeight: 1.1,
          margin: '0 0 16px',
        }}>
          {problem.title}
        </h1>
      </header>

      {/* ── Section 1: Đề bài ── */}
      <section style={{ marginBottom: 56 }}>
        <SectionLabel emoji="📋" text="Đề bài" />
        <div style={{
          background: '#f5f5f7',
          borderRadius: 18,
          padding: 28,
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          fontSize: 17,
          color: '#1d1d1f',
          lineHeight: 1.6,
          letterSpacing: '-0.374px',
          borderLeft: '4px solid #0066cc',
        }}>
          {problem.description}
        </div>
      </section>

      {/* ── Section 2: Video giải ── */}
      {problem.videoUrl && (
        <section style={{ marginBottom: 56 }}>
          <SectionLabel emoji="🎬" text="Video giải" />
          <div style={{
            borderRadius: 18,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            aspectRatio: '16/9',
            background: '#000',
          }}>
            <iframe
              src={problem.videoUrl}
              title="Video giải"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block', border: 'none' }}
            />
          </div>
        </section>
      )}

      {/* ── Section 3: Lý thuyết ── */}
      <section style={{ marginBottom: 56 }}>
        <SectionLabel emoji="📚" text="Lý thuyết" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {problem.theory.map((section, i) => (
            <div key={i} style={{
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: 18,
              padding: 24,
            }}>
              <h3 style={{
                fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
                fontSize: 17,
                fontWeight: 600,
                color: '#1d1d1f',
                margin: '0 0 10px',
                letterSpacing: '-0.374px',
              }}>
                {section.title}
              </h3>
              <p style={{
                fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
                fontSize: 17,
                color: '#333333',
                margin: 0,
                lineHeight: 1.6,
                letterSpacing: '-0.374px',
                whiteSpace: 'pre-line',
              }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Lời giải (locked behind GameGate) ── */}
      <section>
        <SectionLabel emoji="✏️" text="Lời giải" />
        <GameGate problemId={problem.id}>
          <SolutionContent steps={problem.solution} />
        </GameGate>
      </section>
    </div>
  )
}

// ── Small helper component ────────────────────────────────────────────────────
function SectionLabel({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
    }}>
      <span style={{ fontSize: 20 }}>{emoji}</span>
      <h2 style={{
        fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
        fontSize: 21,
        fontWeight: 600,
        color: '#1d1d1f',
        margin: 0,
        letterSpacing: '0.231px',
      }}>
        {text}
      </h2>
    </div>
  )
}
