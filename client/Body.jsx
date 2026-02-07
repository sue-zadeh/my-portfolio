import React from 'react'

import { RiFlashlightLine } from 'react-icons/ri'
import { ImDownload2 } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import ISQI from './Assets/ISTQB-ISQI.png'

function Body() {
  return (
    <div className="Body grid-wrapper" style={{ backgroundColor: 'black', paddingTop: '3rem'}}>
      <div data-aos="fade-down-right" className="grid1">
        <div className="personal">
          <h1 className="hh2">Personal Info</h1>
          <p className="p3">Phone:</p>
          <p className="p2">0212049836</p>
          <p className="p3">Email:</p>
          <p className="p2">raisianz@gmail.com</p>
        </div>

        <h4>Tech Skills:</h4>
        <p className="p4">
          DevOps, React.js, JavaScript, TypeScript, Python, Flask, Jinja,
          Redux.js, HTML5, CSS3, Bootstrap, Tailwind, SCSS, PHP, Apache, MySQL,
          SQLite, Firebase, GitHub, Git, Azure, AWS, Jest, ISTQB, Postman,
          Railway, Heroku, Visual Studio Code, Agile, Scrum, Kanban
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
            rel="noreferrer"
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
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sue-zadeh/"
          >
            <ImLinkedin size={35} color="white" />
          </a>

          <a
            className="social2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sue-zadeh"
          >
            <AiOutlineGithub size={45} color="white" />
          </a>
        </div>
      </div>

      {/* ✅ Updated, shorter, stronger */}
      <div data-aos="fade-down-right" className="grid3">
        <h1 className="hire">
          {/* <RiFlashlightLine size={55} /> */}
          Why hire me?
        </h1>

        <p className="p1">
          <b>I ship real production apps.</b> I build end-to-end (UI + API + database + deployment) and I care about clean UX.
          <br />
          <b>Recent live work:</b> Shower Power — React/Node/Express/PostgreSQL on Azure with Docker + GitHub Actions (CI/CD).
          <br />
          <b>Quality mindset:</b> testing, edge cases, readable code, and reliable releases.
          <br />
          <b>Remote AI evaluation:</b> currently working with <b>Alignerr</b> and <b>Labelbox</b> on AI correction and quality review tasks.
          <br />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={ISQI}
              alt="ISTQB Certified Tester"
              style={{ height: '34px' }}
            />
            <span><b>ISTQB® CTFL</b> + Azure certified.</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Body
