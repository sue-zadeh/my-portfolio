import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    hmr: {
      overlay: false,
    },
    proxy: {
      '/add-user': {
        target: 'http://localhost:5173', // Replace with your server's actual URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/add-user/, ''),
      },
    },
  },
})
