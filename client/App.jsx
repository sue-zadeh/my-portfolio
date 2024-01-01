import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
    </div>
  )
}

//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about-me" element={<AboutMe />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/contact-me" element={<ContactMe />} />
//   </Routes>
// </Router>
//   )
// }

export default App
