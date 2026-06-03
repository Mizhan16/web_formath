import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'web_formath — Học Toán Thông Minh',
  description: 'Học toán với video giải, lý thuyết và lời giải tương tác.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        {/* ── Global Nav (Apple style: black, 44px) ── */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: 44,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
        }}>
          <a
            href="/"
            style={{
              color: '#ffffff',
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: '-0.374px',
              textDecoration: 'none',
            }}
          >
            ∑ web_formath
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/" style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 12,
              letterSpacing: '-0.12px',
              textDecoration: 'none',
            }}>
              Bài toán
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 12,
              letterSpacing: '-0.12px',
              textDecoration: 'none',
            }}>
              Lý thuyết
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 12,
              letterSpacing: '-0.12px',
              textDecoration: 'none',
            }}>
              Về chúng tôi
            </a>
          </div>
        </nav>

        <main>{children}</main>

        {/* ── Footer ── */}
        <footer style={{
          background: '#f5f5f7',
          padding: '40px 24px',
          marginTop: 80,
          fontFamily: 'SF Pro Text, -apple-system, system-ui, sans-serif',
          fontSize: 12,
          color: '#7a7a7a',
          textAlign: 'center',
          letterSpacing: '-0.12px',
          lineHeight: 1.5,
        }}>
          <p style={{ margin: 0 }}>Copyright © 2024 web_formath. All rights reserved.</p>
          <p style={{ margin: '4px 0 0' }}>Học toán thông minh — Giải toán có hệ thống.</p>
        </footer>
      </body>
    </html>
  )
}
