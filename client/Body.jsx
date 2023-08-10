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
          php, Debugging, SQL, Squlit3, API, firebase, Github, Git, Azure
          Fundamentals and AI, AWS, ISTQB, P5, Phaser3, somnia, Postman,
          railway, Heroku, Adobe Photoshop, visual studio. The capacity for
          structural and design thinking.
        </p>
      </div>
      <div className="grid2">
        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV?
          <a
            className="download2"
            href="https://drive.google.com/file/d/17R7Z3qglfvFgV5sx51QYVAzmzSltkMBi/view?usp=sharing"
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
          As a full stack software developer and tech enthusiast with
          <b>
            {' '}
            a formal L6 software development education from Dev Academy Aotearoa
          </b>
          , I am deeply passionate about quality and constantly strive to
          improve my skills.I am a committed, adaptive and a fast learner with a
          strong passion for continuous learning and self-improvement. I thrive
          on challenges, and am excited at the prospect of joining your team to
          contribute, grow and pursuing my passion.
        </p>
      </div>

      <div className="grid3">
        <h1 className="hh2">
          <BsQuestionSquare size={35} /> What do I do?
        </h1>
        <p className="p1">
          I'm deeply passionate about web development and constantly enhancing
          my skills. I'm particularly drawn to cloud solutions, having learned{' '}
          <b>AWS, Azure Fundamentals, and AI</b>. I'm gearing up to take the
          Microsoft Azure exam soon.
        </p>
        <h1 className="hh2">
          <RiThumbUpFill size={35} /> How do I do it?
        </h1>
        <p className="pp1">
          I utilize agile methods to enhance project efficiency and foster
          collaborative teamwork. With strong communication skills, I
          proactively seek opportunities for improvement, prioritize open
          communication, and leverage technology to facilitate growth while
          pursuing my passion for technology
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
