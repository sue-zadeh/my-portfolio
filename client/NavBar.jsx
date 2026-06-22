import React from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  const navItems = [
    {
      label: 'Home',
      href: '#home',
      icon: <TiHome />,
    },
    {
      label: 'About Me',
      href: '#about-me',
      icon: <MdSchool />,
    },
    {
      label: 'Projects',
      href: '#projects',
      icon: <CgStack />,
    },
    {
      label: 'Contact Me',
      href: '#contact-me',
      icon: <FaComment />,
    },
  ]

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="site-nav-list">
        {navItems.map((item) => (
          <li className="site-nav-item" key={item.href}>
            <a className="site-nav-link" href={item.href}>
              <span className="site-nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="site-nav-text">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar