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
        <h1 className="hh4">About</h1>
        {/* <p className="p4">Full Stack Web Developer.</p> */}
        <h4>Tech Skills:</h4>
        <p className="p4">
          HTML5, css3, Tailwind, Scss, Java Script, Typescript, Reactjs,
          Debugging, Microsoft Cloud, Azure Fundamentals, AWS, ISTQB, P5,
          Phaser3, SQL, Squlit3, somnia, Postman, Netlify, Heroku, Github, Adobe
          Dream weaver, Adobe Photoshop, visual studio. The capacity for
          structural and design thinking.
        </p>
      </div>
      <div className="grid2">
        <h1 className="hh2">
          <BsQuestionSquare size={35} /> What do I do?
        </h1>
        <p className="p1">
          As a full time web developer and tech enthusiast, I have a deep
          passion for web development. I am committed to continuously improving
          my skills and gaining valuable experience in this dynamic field.
        </p>

        <h1>
          <RiFlashlightLine size={45} /> Why hire me?
        </h1>
        <p class="p1">
          I am a committed, adaptive and fast learner person with a strong
          passion for continuous learning and self-improvement. I have L6
          software development certification from Dev Academy. I thrive on
          challenges, have a positive outlook on my abilities, and am excited at
          the prospect of joining your team to contribute, grow and make a
          positive impact.
        </p>
      </div>

      <div className="grid3">
        <h1 className="hh2">
          <RiThumbUpFill size={35} /> How do I do it?
        </h1>
        <p className="pp1">
          I use agile methods to increase project efficiency and promote
          collaborative teamwork. With strong communication skills, I am
          constantly looking for areas for improvement. I prioritize open
          communication and using technology to positively impact society.
        </p>

        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV? Download it here &nbsp;
          <a
            href="https://drive.google.com/file/d/1xacYbqRSj6Hub8sVRO54BjqwkTILIlBD/view?usp=sharing"
            target="_blank"
          >
            <ImDownload2 size={28} />
          </a>
        </p>

        <div className="Social social-container">
          {/* <h2 className="social2">Social</h2> */}
          {/* <a className="social2"  href="https://www.facebook.com/sedighe.raisianzade"><ImFacebook2 /></a> */}
          <a
            className="social2"
            target="blank1"
            href="https://www.linkedin.com/in/sue-raisianzadeh/"
          >
            <ImLinkedin size={35} />
          </a>
          {/* <a className="social2" href="https://twitter.com"><ImTwitter /></a>
    <a className="social2" href="https://instagram.com/"><ImInstagram /></a>
    <a className="social2" href="https://Youtube.com"><ImYoutube /></a> */}
          <a
            className="social2"
            target="blank"
            href="https://github.com/sue-raisianzadeh?tab=repositories"
          >
            <AiOutlineGithub size={35} />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
export default Body
