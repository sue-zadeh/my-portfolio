import { createRoot } from 'react-dom/client'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
