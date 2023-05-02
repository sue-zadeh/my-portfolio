import React from 'react'

import Banner from './Banner.jsx'
import NavBar from './NavBar.js'
import Body from './Body.jsx'

import './main.css'

function Home() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Body />
    </div>
  )
}

export default Home
