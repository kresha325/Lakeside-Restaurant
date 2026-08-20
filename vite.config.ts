import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

/** GitHub Pages SPA: 404.html + real folders so /room and /pool return 200 */
function spaFallback() {
  return {
    name: 'spa-github-pages-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      const index = resolve(dist, 'index.html')
      if (!existsSync(index)) return

      copyFileSync(index, resolve(dist, '404.html'))

      for (const route of ['room', 'pool']) {
        const dir = resolve(dist, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(index, resolve(dir, 'index.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
