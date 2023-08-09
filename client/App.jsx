import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import NavBar from './NavBar' // Import the NavBar component

function App() {
  return (
    //   </Routes>
    // <Router>
    //   <div>
    //     <Home />
    //     <AboutMe />
    //     <Projects />
    //     <ContactMe />
    //   </div>
    // </Router>

    <Router>
      <NavBar /> {/* Keep the NavBar component here */}
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
