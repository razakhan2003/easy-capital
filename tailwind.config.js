/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors:{
      primary: "#4285f4"
    },
    extend:{
        fontFamily:{
          poppins: ["Poppins", "sans-serif"]
        }
    },
    container:{
        center: true,
        padding: '16px',
        'max-width': '1750px',
    },
  },
  plugins: [],
}