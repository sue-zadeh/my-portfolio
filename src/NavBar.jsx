import React from 'react'
// import { Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { ImDownload2 } from 'react-icons/im'
import { CgStack } from 'react-icons/cg'

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
                  <TiHome size={25} />
                  Home
                </NavLink>
              </li>
              <li className="NavBarli">
                <a
                  className="Nav2"
                  // activeClassName="is-active"
                  href="https://drive.google.com/file/d/1F3vJeYBXPDSgbHq43EqgWRgnDeAVJPDJ/view?usp=share_link"
                  style={{ marginRight: '5px' }}
                  target="_blank"
                  role="button"
                >
                  <ImDownload2 size={25} /> My CV
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
                  <MdSchool size={25} />
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
                  <CgStack size={25} />
                  Projects
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
