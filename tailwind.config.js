import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        brand: {
          dark: '#0B0C10',
          gray: '#1F2833',
          light: '#C5C6C7',
          cyan: '#66FCF1',
          teal: '#45A29E',
          gold: '#FFD700',
        },
        primary: {
          DEFAULT: '#7c3aed',
          500: '#7c3aed',
        },
        secondary: {
          DEFAULT: '#ec4899',
        },
        accent: {
          450: '#5a0fd8',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg,#0d0d0d 0%, #5a0fd8 100%)',
        'primary-gradient': 'linear-gradient(90deg,#7c3aed 0%,#ec4899 100%)',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

export default config;