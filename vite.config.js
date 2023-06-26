import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    hmr: {
      overlay: false,
    },
    fs: {
      strict: false, // Allows Vite to serve files outside of the project root
    },
    open: true,
  },
})
