// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class', // Important for class-based dark mode
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#0A2540',   // Deep Navy (Light mode)
            dark: '#05121F',      // Dark mode background
          },
          accent: {
            DEFAULT: '#00D4FF',   // Electric Blue
            light: '#40E0FF',
          },
          neutral: {
            50: '#F8FAFC',
            900: '#0F172A',
            950: '#020617',
          }
        },
        fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }