/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "title": "#000000",
        "titleHover": "#6B6B6B",
        "description": "#6B6B6B",
        "content": "#000000",
        "highlight": "#B90101",
        "sectionHeader": "#6B6B6B",
        // ""
      },
      fontFamily: {
        'fcMinimal': ["FC Minimal"]
      }
    },
  },
  plugins: [],
}

