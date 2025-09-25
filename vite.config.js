import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 5174,        // 👈 run this app on http://localhost:5174 to not conflict with other app
    strictPort: true,  // 👈 fail if 5174 is taken (prevents silent port changes)
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'production'
            ? `http://0.0.0.0:${process.env.PORT}`
            : 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
