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
          Debugging, Cloud, AWS, Azure Fundamentals, Phaser3, ISTQB, SQL, Squlit3, somnia, Postman, Heroku,
          Github, Adobe Dream weaver, Adobe Photoshop, visual studio. The
          capacity for structural and design thinking. Also I have Skills in
          cabling, socket handling and networking.
        </p>

        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV? Download it here &nbsp;
          <a
            href="https://drive.google.com/file/d/1F3vJeYBXPDSgbHq43EqgWRgnDeAVJPDJ/view?usp=share_link"
            target="_blank"
          >
            <ImDownload2 />
          </a>
        </p>
      </div>
      <div className="grid2">
        <h1 className="hh2">
          <BsQuestionSquare /> What do I do?
        </h1>
        <p className="p1">
          As a full stack web developer and tech enthusiast, I possess a profound passion for web development.
          I am dedicated to continuously enhancing my skills and gaining valuable experience in this dynamic field.
        </p>

        <h1>
          <RiFlashlightLine /> Why hire me?
        </h1>
        <p class="p1">
          I am a dedicated and adaptable individual with a strong passion for acquiring new skills.
          With a Software Development L6 certification from Dev Academy, I have demonstrated my
          commitment to continuous learning and self-improvement. I thrive on challenges and have a 
          positive outlook on my abilities. Joining your team would provide an excellent opportunity for me to learn,
            contribute, and grow. I am genuinely excited about the prospect of being part of your team and making a positive impact.
        </p>
      </div>

      <div className="grid3">
        <h1 className="hh2">
          <RiThumbUpFill /> How do I do it?
        </h1>
        <p className="pp1">
          I employ agile methods in my projects to enhance efficiency and foster better collaboration within my team.
          Effective communication is one of my strengths, and I provide positive and actionable feedback while continuously
          reflecting on areas that can be improved.
          I value open communication and strive to leverage technology to make a positive impact on the surrounding community.
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
