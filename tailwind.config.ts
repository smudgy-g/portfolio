import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cream': '#FFF5E0',
        'salmon': '#FF6969',
        'red-medium': '#C70039',
        'dark-slate': '#181823',
        'dark-blue': '#141E46'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
