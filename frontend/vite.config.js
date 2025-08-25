import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4933, //tells Vite dev server to run on port 4933 instead of default 5173
  },
})
