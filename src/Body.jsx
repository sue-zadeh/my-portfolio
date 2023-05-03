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
          Debugging, P5, Phaser3, ISTQB, SQL, Squlit3, somnia, Postman, Heroku,
          Github, Adobe Dream weaver, Adobe Photoshop, visual studio. The
          capacity for structural and design thinking. Also I have Skills in
          cabling, socket handling and networking.
        </p>

        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV? Download it here &nbsp;
          <a href="/cvSueRZ.pdf" download>
            <ImDownload2 />
          </a>
        </p>
      </div>
      <div className="grid2">
        <h1 className="hh2">
          <BsQuestionSquare /> What do I do?
        </h1>
        <p className="p1">
          I am a junior full stack web developer and tech enthusiast. With a
          deep passion for web development, I constantly strive to improve my
          skills and gain more experience in this field.
        </p>

        <h1>
          <RiFlashlightLine /> Why hire me?
        </h1>
        <p class="p1">
          I am an enthusiastic, adaptive, and organized individual with a
          passion for developing new skills. I am proud to hold a Software
          Development L6 certification from Dev Academy, which provided me with
          an invaluable learning experience, giving me the opportunity to
          explore a range of technologies, from debugging to team working and
          communication. Moreover, I obtained a Technology Product Development
          certification from Otago Polytechnic in 2021, demonstrating my
          commitment to continuous learning and self-improvement. I do my best
          to succeed and I have confidence in my ability. I am always eager to
          learn and improve my skills, and I see joining your team as a great
          opportunity to do so. and I am excited about the prospect of
          contributing to and learning from your team.
        </p>
      </div>

      <div className="grid3">
        <h1 className="hh2">
          <RiThumbUpFill /> How do I do it?
        </h1>
        <p className="pp1">
          I use agile methods in projects to increase the efficiency and
          collaborate better with my team. I Communicate effectively using
          positive and actionable feedback, reflects on what can be improved,
          open communication while striving to use technology to make a positive
          impact on the community around us.
        </p>

        <div className="Social">
          <h2 className="social2">Social</h2>
          {/* <a className="social2"  href="https://www.facebook.com/sedighe.raisianzade"><ImFacebook2 /></a> */}
          <a
            className="social2"
            target="blank1"
            href="https://www.linkedin.com/in/sue-raisianzadeh/"
          >
            <ImLinkedin size={30} />
          </a>
          {/* <a className="social2" href="https://twitter.com"><ImTwitter /></a>
    <a className="social2" href="https://instagram.com/"><ImInstagram /></a>
    <a className="social2" href="https://Youtube.com"><ImYoutube /></a> */}
          <a
            className="social2"
            target="blank"
            href="https://github.com/sue-raisianzadeh?tab=repositories"
          >
            <AiOutlineGithub size={32} />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
export default Body
