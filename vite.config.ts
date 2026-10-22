import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo_rumbera.png', 'robots.txt', 'apple-touch-icon.png', 'icon-192x192.png', 'icon-512x512.png'],
      manifest: {
        name: 'RUMBERA - Plataforma de ¡La rumba que te conecta!',
        short_name: 'Rumbera',
        description: 'Tu plataforma para ¡La rumba que te conecta!. Música en vivo, noticias y eventos.',
        theme_color: '#000000',
        background_color: '#0a0a0a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest,jpg}'],
        // 🚨 SOLUCIÓN: Aumentar el límite a 10 MB para permitir el logo.jpg actual
        // (Ver recomendación importante abajo)
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 
      }
    })
  ]
})