/** @type {import('tailwindcss').Config} */
const tailwindScrollbar = require('tailwind-scrollbar')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
  corePlugins: {
    // 一套武断的针对 Tailwind 项目预设的基础样式
    preflight: false,
  },
}
