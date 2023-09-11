import React from 'react'
import { Outlet, useLocation } from 'react-router-dom' // Import Outlet and useLocation

import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'

function Content() {
  const location = useLocation() // Get the current location

  return (
    <div>
      {/* Use a conditional rendering based on the current route */}
      {location.pathname === '/about' && <AboutMe />}
      {location.pathname === '/projects' && <Projects />}
      {location.pathname === '/contact' && <ContactMe />}
      <Outlet /> {/* Render nested routes */}
    </div>
  )
}

export default Content
