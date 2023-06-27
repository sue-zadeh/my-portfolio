import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: `http://0.0.0.0:${process.env.PORT || 3000}`,
        changeOrigin: true,
      },
    },
  },
})
