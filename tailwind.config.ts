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
        'accent': '#EB455F',
        'light-blue': '#BAD7E9',
        'deep-blue': '#00337C',
        'light-slate': '#2B3467',
        'dark-purple': '#13005A',
        'cream': '#FCFFE7'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
