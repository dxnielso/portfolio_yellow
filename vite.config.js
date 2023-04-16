import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/porfolio_yellow/'
  // base: import.meta.env?.BASE_URL ? '/porfolio_yellow/' : '/',
})
