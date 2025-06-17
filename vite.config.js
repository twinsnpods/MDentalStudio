import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MDentalStudio/', // ✅ base goes here, not in server
  plugins: [react()],
  server: {
    open: true,
    port: 3001,
  },
})
