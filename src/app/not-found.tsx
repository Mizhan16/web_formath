import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
      textAlign: 'center',
      padding: '0 24px',
    }}>
      <p style={{ fontSize: 80, margin: '0 0 16px' }}>🔍</p>
      <h1 style={{
        fontSize: 34,
        fontWeight: 600,
        color: '#1d1d1f',
        margin: '0 0 12px',
        letterSpacing: '-0.374px',
      }}>
        Không tìm thấy bài toán
      </h1>
      <p style={{
        fontSize: 17,
        color: '#7a7a7a',
        margin: '0 0 32px',
        letterSpacing: '-0.374px',
      }}>
        Bài toán này không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '11px 28px',
          background: '#0066cc',
          color: '#ffffff',
          fontSize: 17,
          fontWeight: 400,
          borderRadius: 9999,
          textDecoration: 'none',
          letterSpacing: '-0.374px',
        }}
      >
        ← Về trang chủ
      </Link>
    </div>
  )
}
