import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple Color System
        'apple-blue': '#007AFF',
        'apple-purple': '#AF52DE',
        'apple-pink': '#FF2D55',
        'apple-teal': '#5AC8FA',
        'apple-green': '#34C759',
        'apple-orange': '#FF9500',
        'apple-red': '#FF3B30',
        'apple-yellow': '#FFCC00',
        'apple-gray': {
          50: '#F2F2F7',
          100: '#E5E5EA',
          200: '#D1D1D6',
          300: '#C7C7CC',
          400: '#AEAEB2',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#3A3A3C',
          900: '#2C2C2E',
          950: '#1C1C1E',
        },
        // Theme colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        'sf-pro': ['var(--font-sf-pro)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'sf-text': ['var(--font-sf-text)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'sf-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'monospace'],
      },
      animation: {
        // Apple-style animations
        'apple-float': 'appleFloat 8s ease-in-out infinite',
        'apple-breathe': 'appleBreathe 6s ease-in-out infinite',
        'liquid-morph': 'liquidMorph 10s ease-in-out infinite',
        'apple-pulse': 'applePulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'apple-fade-in': 'appleFadeIn 0.8s ease-out',
        'apple-slide-up': 'appleSlideUp 0.6s ease-out',
        'apple-scale-in': 'appleScaleIn 0.5s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        appleFloat: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.8'
          },
          '33%': { 
            transform: 'translate(30px, -30px) scale(1.1)',
            opacity: '0.9'
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)',
            opacity: '0.7'
          },
        },
        appleBreathe: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.8'
          },
        },
        liquidMorph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': { 
            borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': { 
            borderRadius: '70% 30% 50% 50% / 30% 50% 70% 50%',
            transform: 'rotate(270deg) scale(1.05)'
          },
        },
        applePulse: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.7',
            transform: 'scale(0.95)'
          },
        },
        appleFadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        appleSlideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        appleScaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        shimmer: {
          '0%': { 
            backgroundPosition: '-1000px 0'
          },
          '100%': { 
            backgroundPosition: '1000px 0'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'apple': '20px',
        'apple-lg': '40px',
        'apple-xl': '60px',
      },
      borderRadius: {
        'apple': '12px',
        'apple-lg': '16px',
        'apple-xl': '20px',
        'apple-2xl': '24px',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'apple': '0 4px 16px rgba(0, 0, 0, 0.16)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.20)',
        'apple-xl': '0 16px 48px rgba(0, 0, 0, 0.24)',
        'apple-glow-blue': '0 0 40px rgba(0, 122, 255, 0.3)',
        'apple-glow-purple': '0 0 40px rgba(175, 82, 222, 0.3)',
        'apple-glow-pink': '0 0 40px rgba(255, 45, 85, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
