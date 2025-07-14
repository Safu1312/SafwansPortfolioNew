module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep navy for trust and technical authority
        primary: {
          50: "#e6f3ff", // primary-50
          100: "#b3d9ff", // primary-100
          200: "#80bfff", // primary-200
          300: "#4da6ff", // primary-300
          400: "#1a8cff", // primary-400
          500: "#1a365d", // primary-500 (main)
          600: "#153056", // primary-600
          700: "#102a4f", // primary-700
          800: "#0b2448", // primary-800
          900: "#061e41", // primary-900
          DEFAULT: "#1a365d", // primary default
        },
        // Secondary Colors - Innovation cyan for interactive elements
        secondary: {
          50: "#e6fbff", // secondary-50
          100: "#b3f3ff", // secondary-100
          200: "#80ebff", // secondary-200
          300: "#4de3ff", // secondary-300
          400: "#1adbff", // secondary-400
          500: "#00d4ff", // secondary-500 (main)
          600: "#00bfe6", // secondary-600
          700: "#00aacc", // secondary-700
          800: "#0095b3", // secondary-800
          900: "#008099", // secondary-900
          DEFAULT: "#00d4ff", // secondary default
        },
        // Accent Colors - Warm orange for achievements and CTAs
        accent: {
          50: "#fff4f0", // accent-50
          100: "#ffe0d1", // accent-100
          200: "#ffccb3", // accent-200
          300: "#ffb894", // accent-300
          400: "#ffa476", // accent-400
          500: "#ff6b35", // accent-500 (main)
          600: "#e6602f", // accent-600
          700: "#cc5529", // accent-700
          800: "#b34a23", // accent-800
          900: "#993f1d", // accent-900
          DEFAULT: "#ff6b35", // accent default
        },
        // Background and Surface Colors
        background: "#f7fafc", // gray-50 equivalent
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700 equivalent
          secondary: "#718096", // gray-500 equivalent
        },
        // Status Colors
        success: {
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#10b981", // green-500 (main)
          600: "#38a169", // green-600
          700: "#2f855a", // green-700
          800: "#276749", // green-800
          900: "#22543d", // green-900
          DEFAULT: "#10b981", // success default
        },
        warning: {
          50: "#fffbeb", // yellow-50
          100: "#fef3c7", // yellow-100
          200: "#fde68a", // yellow-200
          300: "#fcd34d", // yellow-300
          400: "#fbbf24", // yellow-400
          500: "#f6ad55", // yellow-500 (main)
          600: "#d97706", // yellow-600
          700: "#b45309", // yellow-700
          800: "#92400e", // yellow-800
          900: "#78350f", // yellow-900
          DEFAULT: "#f6ad55", // warning default
        },
        error: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#e53e3e", // red-500 (main)
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
          DEFAULT: "#e53e3e", // error default
        },
        // Gray Scale
        gray: {
          50: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'typing': 'typing 3s steps(40, end), blink 0.75s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        typing: {
          '0%': {
            width: '0',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '0%, 50%': {
            borderColor: 'transparent',
          },
          '51%, 100%': {
            borderColor: '#00d4ff',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}