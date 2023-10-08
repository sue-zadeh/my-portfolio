import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import NavBar from './NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Home />
      <AboutMe />
      <Projects />
      <ContactMe />  */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  )
}

export default App
