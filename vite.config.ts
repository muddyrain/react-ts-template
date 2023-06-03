import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // other Babel plugins
          [
            '@locator/babel-jsx/dist',
            {
              env: 'development',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/dog': {
        target: 'https://dog.ceo/api/breeds/image/random/',
        changeOrigin: true,
      },
    },
  },
})
