/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans JP"', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      }
    }
  },
  plugins: []
};
