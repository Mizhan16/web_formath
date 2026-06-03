import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        apple: {
          blue: '#0066cc',
          'blue-focus': '#0071e3',
          'blue-dark': '#2997ff',
          ink: '#1d1d1f',
          'ink-80': '#333333',
          'ink-48': '#7a7a7a',
          canvas: '#ffffff',
          parchment: '#f5f5f7',
          pearl: '#fafafc',
          hairline: '#e0e0e0',
          divider: '#f0f0f0',
        },
      },
      letterSpacing: {
        'apple-tight': '-0.374px',
        'apple-display': '-0.28px',
      },
      borderRadius: {
        'apple-sm': '8px',
        'apple-md': '11px',
        'apple-lg': '18px',
      },
    },
  },
  plugins: [],
}

export default config
