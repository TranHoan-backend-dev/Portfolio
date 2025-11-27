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
        mono: ["var(--font-mono)"],
      },
      colors: {
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
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg,#0d0d0d 0%, #5a0fd8 100%)',
        'primary-gradient': 'linear-gradient(90deg,#7c3aed 0%,#ec4899 100%)',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;