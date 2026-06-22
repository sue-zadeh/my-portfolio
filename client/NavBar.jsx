import React, { useEffect, useState } from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    {
      label: 'Home',
      href: 'home',
      icon: <TiHome />,
    },
    {
      label: 'About Me',
      href: 'about-me',
      icon: <MdSchool />,
    },
    {
      label: 'Projects',
      href: 'projects',
      icon: <CgStack />,
    },
    {
      label: 'Contact Me',
      href: 'contact-me',
      icon: <FaComment />,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.href))
        .filter(Boolean)

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 130 && rect.bottom >= 130
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const navHeight = 95
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - navHeight

    window.scrollTo({
      top: sectionTop,
      behavior: 'auto',
    })

    setActiveSection(sectionId)
  }

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="site-nav-list">
        {navItems.map((item) => (
          <li className="site-nav-item" key={item.href}>
            <button
              type="button"
              className={`site-nav-link ${
                activeSection === item.href ? 'active' : ''
              }`}
              onClick={() => goToSection(item.href)}
            >
              <span className="site-nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="site-nav-text">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar