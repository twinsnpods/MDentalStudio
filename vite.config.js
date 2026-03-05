import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/MobileDentist/', // ✅ base goes here, not in server
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    port: 3001,
  },
})
