import React from 'react'

import { RiThumbUpFill } from 'react-icons/ri'
import { RiFlashlightLine } from 'react-icons/ri'
import { BsQuestionSquare } from 'react-icons/bs'
import { ImDownload2 } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'

import { ImLinkedin } from 'react-icons/im'
// import { ImFacebook2 } from 'react-icons/im'
// import { ImTwitter } from 'react-icons/im'
// import { ImYoutube } from 'react-icons/im'
// import { ImInstagram } from 'react-icons/im'

function Body() {
  return (
    <div
      // data-aos="fade-up"
      className="Body grid-wrapper"
      style={{ backgroundColor: 'black' }}
    >
      <div data-aos="fade-down-right" className="grid1">
        <div className="personal">
          <h1 className="hh2">Personal Info</h1>
          <p className="p3">Phone:</p>
          <p className="p2">0212049836</p>
          <p className="p3">Email:</p>
          <p className="p2">suezadeh.a@gmail.com</p>
        </div>

        <h4>Tech Skills:</h4>
        <p className="p4">
          DevOps, Reactjs, Javascript, Typescript, Python ,Flask, Jinja ,
          Redux.js, HTML5, CSS3, Bootstrap, Tailwind, SCSS, php, Apache,
          Debugging, MySQL, SQLite, API, firebase, Github, Git, Azure , AWS,
          Jest, ISTQB, somnia, Postman, railway, Heroku, visual studio
        </p>
      </div>
      <div data-aos="fade-down-right" className="grid2">
        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV ?
          <br />
          <a
            className="download2"
            href="https://drive.google.com/file/d/1OQrb6QOBKsIRTOKNjP1_OVjHgFAcyCW-/view?usp=sharing"
            target="_blank"
          >
            Download it here
            <ImDownload2
              size={32}
              color="rgb(246, 7, 7)"
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                alignItems: 'center',
                justifySelf: 'center',
                textAlign: 'center',
              }}
            />
          </a>
        </p>
        <div className="Social social-container">
          <a
            className="social2"
            target="blank1"
            href="https://www.linkedin.com/in/sue-zadeh/"
          >
            <ImLinkedin size={35} color="white" />
          </a>
          <a
            className="social2"
            target="blank"
            href="https://github.com/sue-zadeh"
          >
            <AiOutlineGithub size={45} color="white" />
          </a>
        </div>
      </div>

      <div data-aos="fade-down-right" className="grid3">
        <h1 className="hire">
          <RiFlashlightLine size={55} />
          Why hire me?
        </h1>
        <p className="p1">
          I am a results-driven Full Stack Developer (Microsoft Azure & Azure AI
          certified) with expertise in React, Node.js, Python, and cloud
          automation. With 5+ years of experience, I design and deploy scalable
          applications, optimize workflows, and solve complex technical
          challenges. I have built high-impact projects like FieldSafe (a SaaS
          platform improving efficiency by 90%) and Smart Panel Homes (a
          React-based website increasing engagement by 80%). Experienced in AWS,
          Salesforce, and CI/CD, I thrive in Agile teams, delivering innovative,
          efficient, and problem-solving solutions.
        </p>
      </div>
    </div>
  )
}
export default Body
