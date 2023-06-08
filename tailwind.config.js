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
      },
      fontFamily: {
        'fcMinimal': ["FC Minimal"],
        'montserrat': ["Montserrat"]
      },
      fontSize: {
        'primaryHeader': '55px',
        'secondaryHeader': '28px'
      },
      dropShadow: {
        'thumbnail': '0 4px 30px rgba(0,0,0,.15)'
      }
    },
  },
  plugins: [],
}

