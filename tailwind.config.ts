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
        'cream': '#F4E4C1',
        'light-gold': '#E4C580',
        'light-green': '#15DB95',
        'blue': '#0D19A3',
        'dark-blue': '#080F5B'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
