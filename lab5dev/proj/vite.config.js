import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jezyki_wysokiego_poziomu/lab5prod/',
  plugins: [react()],
  build: {
    outDir: '../../lab5prod',
    emptyOutDir: true,
  },
})
