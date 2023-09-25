import React from 'react'

import { RiThumbUpFill } from 'react-icons/ri'
import { RiFlashlightLine } from 'react-icons/ri'
import { BsQuestionSquare } from 'react-icons/bs'
import { ImDownload2 } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'

// import { ImFacebook2 } from 'react-icons/im'
// import { ImTwitter } from 'react-icons/im'
// import { ImYoutube } from 'react-icons/im'
import { ImLinkedin } from 'react-icons/im'
// import { ImInstagram } from 'react-icons/im'

function Body() {
  return (
    <div className="Body grid-wrapper">
      {/* <div className=""> */}
      <div className="grid1">
        <div className="personal">
          <h1 className="hh2">Personal Info</h1>
          <p className="p3"> Name:</p>
          <p className="p2">Sue Raisianzadeh</p>
          <p className="p3">Phone:</p>
          <p className="p2">0212049836</p>
          <p className="p3">Email:</p>
          <p className="p2">Raisianz@gmail.com</p>
        </div>
        {/* <h1 className="hh4">About</h1> */}
        {/* <p className="p4">Full Stack Web Developer.</p> */}
        <h4>Tech Skills:</h4>
        <p className="p4">
          HTML5, CSS3, Tailwind, SCSS, Javascript, Typescript, Reactjs, Redux,
          php, Debugging, SQL, Squlit3, API, firebase, Github, Git, Azure , AWS,
          Jest, ISTQB, somnia, Postman, railway, Heroku, visual studio
        </p>
      </div>
      <div className="grid2">
        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV?
          <a
            className="download2"
            href="https://drive.google.com/file/d/1FSN7MKxwscyFw1uKp2RzfJUfR-ubQ8iy/view?usp=sharing"
            target="_blank"
          >
            Download it here
            <ImDownload2
              size={28}
              color="white"
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
          </a>
        </p>
        <h1 className="hire">
          <RiFlashlightLine size={45} /> Why hire me?
        </h1>
        <p className="p1">
          I'm a full-stack developer and tech enthusiast, with a{' '}
          <b>
            formal L6 Applied Software Development from Dev Academy Aotearoa
          </b>
          . I'm a dedicated, fast learner, eager to contribute and pursue my
          passion in a challenging environment.
        </p>
      </div>

      <div className="grid3">
        <h1 className="hh2">
          <BsQuestionSquare size={35} /> What do I do?
        </h1>
        <p className="p1">
          I'm deeply passionate about web development and constantly enhancing
          my skills. I'm particularly drawn to cloud solutions, having learned
          <b>AWS, Azure Fundamentals, and AI</b>. I'm gearing up to take the
          Microsoft Azure exam soon.
        </p>
        <h1 className="hh2">
          <RiThumbUpFill size={35} /> How do I do it?
        </h1>
        <p className="p1">
          I use agile methods for efficient projects and collaborative teamwork.
          With strong communication skills, I seek improvement, prioritize open
          communication, and leverage technology for growth while pursuing my
          tech passion.
        </p>

        <div className="Social social-container">
          {/* <h2 className="social2">Social</h2> */}
          {/* <a className="social2"  href="https://www.facebook.com/sedighe.raisianzade"><ImFacebook2 /></a> */}
          <a
            className="social2"
            target="blank1"
            href="https://www.linkedin.com/in/sue-raisianzadeh/"
          >
            <ImLinkedin size={35} color="white" />
          </a>
          {/* <a className="social2" href="https://twitter.com"><ImTwitter /></a>
    <a className="social2" href="https://instagram.com/"><ImInstagram /></a>
    <a className="social2" href="https://Youtube.com"><ImYoutube /></a> */}
          <a
            className="social2"
            target="blank"
            href="https://github.com/sue-raisianzadeh?tab=repositories"
          >
            <AiOutlineGithub size={35} color="white" />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
export default Body
