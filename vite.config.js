import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    base:"/MDentalStudio/", // Set the base path for the server
    open: true, // Automatically open the browser when the server starts
    port: 3001, // Specify the port for the development server
  }
})
