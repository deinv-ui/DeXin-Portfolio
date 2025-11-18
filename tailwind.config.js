/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#111827',
        'bg-variant': '#1f2937',
        'primary': '#ec4899',
        'secondary': '#8b5cf6',
        'white-variant': '#ffffff',
        'light': 'rgba(229, 231, 235, 0.85)',
        'text': '#f9fafb',
      },
      spacing: {
        'container-lg': '75%',
        'container-md': '86%',
        'container-sm': '90%',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}
