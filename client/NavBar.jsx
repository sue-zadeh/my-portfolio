import React from 'react'
// import { Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { ImDownload2 } from 'react-icons/im'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav role="navigation" aria-label="main navigation">
      <div className="nav">
        <a
          role="navigation"
          className={` ${isOpen && 'is-active'}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className="allnav">
          <div className={`nav ${isOpen && 'is-active'}`}>
            <ul className="NavBar">
              <li className="NavBarli">
                <NavLink
                  className="Nav1"
                  // activeClassName="is-active"
                  to="/"
                  style={{ marginRight: '5px' }}
                >
                  <TiHome size={27} style={{ marginRight: '5px' }} />
                  Home
                </NavLink>
              </li>
              <li className="NavBarli">
                <a
                  className="Nav2"
                  // activeClassName="is-active"
                  href="https://drive.google.com/file/d/1xacYbqRSj6Hub8sVRO54BjqwkTILIlBD/view?usp=sharing"
                  style={{ marginRight: '5px' }}
                  target="_blank"
                  role="button"
                >
                  <ImDownload2 size={27} style={{ marginRight: '5px' }} /> My CV
                </a>
              </li>
              <li className="NavBarli">
                <NavLink
                  className="Nav3"
                  // activeClassName="is-active"
                  to="/AboutMe"
                  style={{ marginRight: '5px' }}
                  role="button"
                >
                  <MdSchool size={27} style={{ paddingRight: '5px' }} />
                  About Me
                </NavLink>
              </li>
              <li className="NavBarli">
                <NavLink
                  className="Nav4"
                  // activeClassName="is-active"
                  to="/Projects"
                  style={{ marginRight: '5px' }}
                  role="button"
                >
                  <CgStack size={27} style={{ marginRight: '5px' }} />
                  Projects
                </NavLink>
              </li>
              <li className="NavBarli">
                <NavLink
                  className="Nav5"
                  // activeClassName="is-active"
                  to="/ContactMe"
                  style={{ marginRight: '5px' }}
                  role="button"
                >
                  <FaComment size={27} style={{ marginRight: '5px' }} />
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
