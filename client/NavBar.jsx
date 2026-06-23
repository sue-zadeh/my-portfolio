import React, { useEffect, useState } from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  const [activeSection, setActiveSection] = useState(
    window.location.hash || '#home'
  )

  const navItems = [
    {
      label: 'Home',
      href: '#home',
      icon: <TiHome className="NavIcon" />,
    },
    {
      label: 'About Me',
      href: '#about-me',
      icon: <MdSchool className="NavIcon" />,
    },
    {
      label: 'Projects',
      href: '#projects',
      icon: <CgStack className="NavIcon" />,
    },
    {
      label: 'Contact Me',
      href: '#contact-me',
      icon: <FaComment className="NavIcon" />,
    },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#home')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const isActive = (href) => {
    return activeSection === href ? 'active' : ''
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()

    const sectionId = href.replace('#', '')
    const section = document.getElementById(sectionId)

    if (!section) return

    const navHeight = document.querySelector('.NavBar')?.offsetHeight || 90
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - navHeight

    // Force instant scroll, even if another CSS file says smooth
    document.documentElement.style.scrollBehavior = 'auto'
    document.body.style.scrollBehavior = 'auto'

    window.scrollTo(0, sectionTop)

    window.history.pushState(null, '', href)
    setActiveSection(href)
  }

  return (
    <div className="nav">
      <div className="allnav">
        <ul className="NavBar">
          {navItems.map((item) => (
            <li className="NavBarli" key={item.href}>
              <a
                className={`NavLink ${isActive(item.href)}`}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar