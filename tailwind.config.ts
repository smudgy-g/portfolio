import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        space: {
          "primary": "#e90064",
          "secondary": "#ec4899",
          "accent": "#f59e0b",
          "neutral": "#111827",
          "base-100": "#03070a",
          "info": "#00f4ff",
          "success": "#53ed1a",
          "warning": "#fcd34d",
          "error": "#ff0041",
        },
      }
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}
export default config