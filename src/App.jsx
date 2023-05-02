import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import AboutMe from './AboutMe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
