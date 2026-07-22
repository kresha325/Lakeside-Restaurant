import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/** GitHub Pages SPA fallback: serve index.html for unknown routes */
function spaFallback() {
  return {
    name: 'spa-github-pages-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      const index = resolve(dist, 'index.html')
      const notFound = resolve(dist, '404.html')
      if (existsSync(index)) copyFileSync(index, notFound)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/Lakeside-Restaurant/',
})
