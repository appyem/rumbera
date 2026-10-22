import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo_rumbera.png', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'RUMBERA - ¡La rumba que te conecta!',
        short_name: 'RUMBERA',
        description: 'Tu plataforma de música tropical. Escucha en vivo, noticias y eventos.',
        theme_color: '#FF9500',
        background_color: '#0A0A0A',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/logo_rumbera.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/logo_rumbera.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest,jpg,mp4}'],
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024
      }
    })
  ]
})
