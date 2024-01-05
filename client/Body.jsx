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
          Reactjs, Javascript, Typescript, , Redux.js, HTML5, CSS3, Bootstrap,
          Tailwind, SCSS, php, Debugging, SQL, Squlit3, API, firebase, Github,
          Git, Azure , AWS, Jest, ISTQB, somnia, Postman, railway, Heroku,
          visual studio
        </p>
      </div>
      <div data-aos="fade-down-right" className="grid2">
        <h1 className="hh5">Download</h1>
        <p className="pp4">
          Need a printable version of my CV ?
          <br />
          <a
            className="download2"
            href="https://drive.google.com/file/d/1j9NM-miBMdj-1y1ChvDZ9WCqzfJj03Vs/view?usp=sharing"
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
          <RiFlashlightLine size={55} /> Why hire me?
        </h1>
        <p className="p1">
          {/* I'm &nbsp;<b>deeply passionate </b>&nbsp;about technology and coding, */}
          As a full-stack developer with&nbsp;{' '}
          <b>
            {' '}
            Microsoft's Azure Fundamentals certification, six years of
            experience teaching and supervising in computer workshops, L6
            Applied Software Development certification from Dev Academy
            Aotearoa,
          </b>{' '}
          &nbsp; and growing expertise in{' '}
          <b> &nbsp;AWS, Azure AI Fundamentals,</b> &nbsp; I'm{' '}
          <b> &nbsp;deeply passionate</b> &nbsp; about technology and coding.
          <b>
            &nbsp; I'm a dedicated, fast learner, eager to contribute and pursue
            my passion in a challenging environment.
          </b>
        </p>
        {/* <h1 className="hh2">
          <BsQuestionSquare size={35} /> What do I do?
         </h1>
         <p className="p1">
          I'm deeply passionate about web development and constantly enhancing
          my skills. I'm particularly drawn to cloud solutions, having learned
          <b>AWS, Azure Fundamentals, and AI</b>. I'm gearing up to take the
          Microsoft Azure exam soon.
         </p> */}
        {/* <h1 className="hh2"> 
          <RiThumbUpFill size={35} /> How do I do it?
         </h1>
         <p className="p1">
          I use agile methods for efficient projects and collaborative teamwork.
          With strong communication skills, I seek improvement, prioritize open
          communication, and leverage technology for growth while pursuing my
          tech passion.
          </p>  */}
      </div>
      {/* </div> */}
    </div>
  )
}
export default Body
