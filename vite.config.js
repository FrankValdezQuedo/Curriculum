import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Curriculum/',
  plugins: [react()],
  build: {
    outDir: 'build'
  }
})
