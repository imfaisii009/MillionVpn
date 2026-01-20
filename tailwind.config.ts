import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D4AFF',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#E2DBFF',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#6D4AFF',
          600: '#5B3FD9',
          700: '#4C35B3',
          800: '#3D2A8D',
          900: '#2E2067',
        },
        accent: {
          teal: '#1F7170',
          'teal-light': '#2D9D9C',
        },
        trust: {
          emerald: '#10B981',
          'emerald-light': '#34D399',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F6F7F9',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.1)',
        'primary': '0 4px 14px -4px rgba(109, 74, 255, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
