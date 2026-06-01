import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0F',
        surface: {
          DEFAULT: '#111118',
          light: '#16161F',
          border: '#1E1E2E',
        },
        accent: {
          green: '#7EE8A2',
          blue: '#5BC8FF',
        },
        txt: {
          primary: '#F8F8F2',
          secondary: '#A0A0B8',
          muted: '#5C5C70',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(126,232,162,0.18) 0%, transparent 60%)',
        'blue-glow': 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(91,200,255,0.12) 0%, transparent 60%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
        'gradient-green': 'linear-gradient(135deg, #7EE8A2 0%, #5BC8FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0F 0%, #0D0D15 100%)',
      },
      boxShadow: {
        'green-glow': '0 0 30px rgba(126,232,162,0.25)',
        'blue-glow': '0 0 30px rgba(91,200,255,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(126,232,162,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(126,232,162,0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
