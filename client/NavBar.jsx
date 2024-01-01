import React from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="nav">
      <div className="allnav">
        <ul className="NavBar">
          <li className="NavBarli">
            <a
              className="Nav1 `Nav1 ${isActive('#home')}`"
              href="#home"
              style={{ marginRight: '5px' }}
            >
              <TiHome size={27} style={{ marginRight: '5px' }} />
              Home
            </a>
          </li>
          <li className="NavBarli">
            <a className="Nav3" href="#about-me" style={{ marginRight: '5px' }}>
              <MdSchool size={27} style={{ marginRight: '5px' }} />
              About Me
            </a>
          </li>
          <li className="NavBarli">
            <a className="Nav4" href="#projects" style={{ marginRight: '5px' }}>
              <CgStack size={27} style={{ marginRight: '5px' }} />
              Projects
            </a>
          </li>
          <li className="NavBarli">
            <a
              className="Nav5"
              href="#contact-me"
              style={{ marginRight: '5px' }}
            >
              <FaComment size={27} style={{ marginRight: '5px' }} />
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
