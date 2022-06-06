import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
  build: {
    outDir: "docs",
    chunkSizeWarningLimit: 9999,
  }
})