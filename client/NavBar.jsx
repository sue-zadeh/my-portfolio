import React, { useEffect, useState } from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  const [activeSection, setActiveSection] = useState(
    window.location.hash || '#home'
  )

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#home')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const isActive = (section) => {
    return activeSection === section ? 'active' : ''
  }

  return (
    <div className="nav">
      <div className="allnav">
        <ul className="NavBar">
          <li className="NavBarli">
            <a
              className={`NavLink ${isActive('#home')}`}
              href="#home"
              onClick={() => setActiveSection('#home')}
            >
              <TiHome className="NavIcon" />
              <span>Home</span>
            </a>
          </li>

          <li className="NavBarli">
            <a
              className={`NavLink ${isActive('#about-me')}`}
              href="#about-me"
              onClick={() => setActiveSection('#about-me')}
            >
              <MdSchool className="NavIcon" />
              <span>About Me</span>
            </a>
          </li>

          <li className="NavBarli">
            <a
              className={`NavLink ${isActive('#projects')}`}
              href="#projects"
              onClick={() => setActiveSection('#projects')}
            >
              <CgStack className="NavIcon" />
              <span>Projects</span>
            </a>
          </li>

          <li className="NavBarli">
            <a
              className={`NavLink ${isActive('#contact-me')}`}
              href="#contact-me"
              onClick={() => setActiveSection('#contact-me')}
            >
              <FaComment className="NavIcon" />
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar