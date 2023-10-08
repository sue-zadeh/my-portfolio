import React from 'react'
// import { Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdSchool } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'
import { ImDownload2 } from 'react-icons/im'
import { CgStack } from 'react-icons/cg'
import { FaComment } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="nav">
      <div className="allnav">
        <ul className="NavBar">
          <li className="NavBarli">
            <Link className="Nav1" to="/" style={{ marginRight: '5px' }}>
              <TiHome size={27} style={{ marginRight: '5px' }} />
              Home
            </Link>
          </li>

          <li className="NavBarli">
            <Link className="Nav3" to="/AboutMe" style={{ marginRight: '5px' }}>
              <MdSchool size={27} style={{ paddingRight: '5px' }} />
              About Me
            </Link>
          </li>
          <li className="NavBarli">
            <Link
              className="Nav4"
              to="/Projects"
              style={{ marginRight: '5px' }}
            >
              <CgStack size={27} style={{ marginRight: '5px' }} />
              Projects
            </Link>
          </li>
          <li className="NavBarli">
            <Link
              className="Nav5"
              to="/ContactMe"
              style={{ marginRight: '5px' }}
            >
              <FaComment size={27} style={{ marginRight: '5px' }} />
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
