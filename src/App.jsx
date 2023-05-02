import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
