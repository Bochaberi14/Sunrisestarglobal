import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        primary: "#0F172A",   // slate-900
        accent: "#2563EB",    // blue-600
        muted: "#64748B",     // slate-500
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rem: ["REM", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
    },
  },
plugins: [
    plugin(function({ addBase, theme }) {
      const colors = theme('colors')
      const cssVars = {}
      Object.keys(colors).forEach(key => {
        const val = colors[key]
        if (typeof val === 'string') {
          cssVars[`--${key}`] = val
        }
      })
      addBase({ ':root': cssVars })
    })
  ],
}
