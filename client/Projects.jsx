import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Squish from './Assets/squish.png'
import Devstagram from './Assets/Devstagram.png'
import Nodeal from './Assets/nodeal.png'
import Eat from './Assets/deveat.png'
import Chat from './Assets/Chat.png'
import Minesweeper from './Assets/minesweeper.png'
import Toe from './Assets/tic-tac-toe.png'
import Music from './Assets/music.png'
import Sportflix from './Assets/Sportflix.png'
import Smartpanel from './Assets/smartpanel.png'
import Scg from './Assets/selwyn.png'
// import Calc from './Assets/mycalc.png'
// import Unicorn from './Assets/inflate.png'
// import Clown from './Assets/clown.png'
// import Mole from './Assets/Mole.png'

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    })
  }, [])

  return (
    <div data-aos="fade-up" className="projects">
      <h2 data-aos="fade-down-right" className="h2-projects">
        Projects
      </h2>
      <div className="projects2">
        <h2 data-aos="fade-down-left" className="h2-projects2">
          Solo Projects:
        </h2>
        <div className="div-squish">
          <p data-aos="fade-down-right" className="p-projects">
            <b>smart-panel:</b>
            <b>
              Language/Technologies: ReactJS, CSS, Bootstrap, SQLite, PHP, MySQL
            </b>
            <br />
            Description: Developed as a volunteer project, this website for
            Smart Panel Homes Ltd showcases engaging scroll animations and
            includes a dynamic form that connects to a database for seamless
            client interactions. Check it out here:
            <a
              className="aa"
              href="https://www.smartpanelhomes.co.nz/"
              target="blank"
            >
              Smart Panel Homes Ltd
            </a>
            <a
              className="aa"
              href="https://github.com/sue-zadeh/smart-panel"
              target="blank"
            >
              view my project with Nodjs here
            </a>
            <a
              className="aa"
              href="https://github.com/sue-zadeh/smart-php-panel"
              target="blank"
            >
              view my project here(using php for backend)
            </a>
            <img
              data-aos="fade-down-right"
              className="picsquish"
              src={Smartpanel}
              alt="Sportflix"
            />
          </p>
          <p data-aos="fade-down-right" className="p-projects">
            <b>Selwyn Campground(scg):</b>
            <b>
              Language/Technologies: Python, Bootstrap, Flask, Jinja, MySQL{' '}
            </b>
            <br />
            Description: A web application for Selwyn Campground to assist
            office staff in managing customer and booking data efficiently, with
            features for adding, editing, and managing records.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/scg"
              target="blank"
            >
              view my project here
            </a>
            <a
              className="aa"
              href="https://suezadeh.pythonanywhere.com/"
              target="blank"
            >
              view my project live on pythonanywhere
            </a>
            <img
              data-aos="fade-down-left"
              className="picsquish"
              src={Scg}
              alt="Sportflix"
            />
          </p>
          <p data-aos="fade-down-right" className="p-projects">
            <b>my-sportlist:</b>
            <b>Language/Technologies: reactjs, css3, Various APIs </b>
            <br />
            Description: Similar to Netflix but for sports, this project allows
            users to explore different sports, read detailed information, and
            navigate using a sidebar—great for backend API practice.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/my-sportlist"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-down-right"
              className="picsquish"
              src={Sportflix}
              alt="Sportflix"
            />
          </p>

          <p data-aos="fade-down-left" className="p-projects">
            <b>chatroom:</b>
            Language/Technologies: reactjs, Firebase, Realtime Database
            <br /> Description: This project focuses on creating a chatroom with
            enhanced media sharing capabilities, utilizing Firebase and Realtime
            Database for live interactions.
            <br /> {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}{' '}
            <span className="push-word"></span>
            <a
              className="aa"
              href="https://github.com/sue-zadeh/chatroom"
              target="blank"
            >
              view my project here <br />
              {/* <span
                style={{
                  paddingRight: '1.5em',
                  color: 'rgb(240, 240, 165)',
                  fontSize: '17px',
                  textDecoration: 'none',
                }}
              >
                <b>( On going )</b>
              </span> */}
            </a>
            <img
              data-aos="fade-up-left"
              className="picsquish"
              src={Chat}
              alt="Chat"
            />
          </p>
        </div>
        <div className="div-squish">
          <p data-aos="fade-up-right" className="p-projects">
            <b>minesweeper:</b>
            Language/Technologies:Javascript and CSS3
            <br />
            Description: This is the Minesweeper game. I built this to have more
            practice on javascript
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/minesweeper"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish-toe"
              src={Minesweeper}
              alt="Minesweeper"
            />
          </p>
          <p data-aos="fade-down-left" className="p-projects">
            <b>tic-tac-toe:</b>
            Language/Technologies: Javascript and CSS3
            <br />
            Description: This is the TIc-Tac-Toe game. I built this to have more
            practice on javascript .
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/tic-tac-toe"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish-toe"
              src={Toe}
              alt="Toe"
            />
          </p>
          <p data-aos="fade-down-left" className="p-projects">
            <b>music-band:</b>Language/Technologies: HTML5, CSS3, JavaScript
            <br />
            Description: Created in February 2021 from self-study and online
            courses, this website features an Iranian folk music band. backend
            functionality is with JavaScript.
            <a
              className="aa"
              href="https://sue-zadeh.github.io/music-band/"
              target="blank"
            >
              Music Band <br />
              <span
                style={{
                  paddingRight: '1.5em',
                  color: 'rgb(240, 240, 165)',
                  fontSize: '20px',
                  textDecoration: 'none',
                }}
              ></span>
            </a>
            <a
              className="aa"
              href="https://github.com/sue-zadeh/music-band"
              target="blank"
            >
              view my project here <br />
              <span
                style={{
                  paddingRight: '1.5em',
                  color: 'rgb(240, 240, 165)',
                  fontSize: '18px',
                  textDecoration: 'none',
                }}
              >
                <b>( 2021 )</b>
              </span>
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish-toe"
              src={Music}
              alt="Music"
            />
          </p>
        </div>
      </div>
      <div className="projects2">
        <h2 data-aos="fade-down-right" className="h2-projects2">
          group Projects:
        </h2>

        <div className="div-squish">
          <p data-aos="fade-down-right" className="p-projects">
            <b>DevStagram:</b>
            Language/Technologies: reactjs,Redux.js,TypeScript, css <br />
            Description: DevStagram, a one-day group project, pulls and displays
            data, letting users add to the JSON. I evolve it into a chatroom
            with media. I developed the sign-in page and led the git management.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/DevStagram"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-down-right"
              className="picsquish"
              src={Devstagram}
              alt="Devstagram"
            />
          </p>
          {/* </div> */}
          {/* className="pro1"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)} */}
          {/* <div className="rows"> */}
          {/* <div className="div-squish"> */}
          <p data-aos="fade-down-left" className="p-projects">
            <b>Squishy-Squish:</b>
            Language/Technologies: p5, Javascript,Redux.js, Jest, and
            TypeScript, CSS3 <br /> Description: This was a 1-week final group
            project, and a game. I contributed to the frontend, backend, managed
            git, and wrote tests for pages.
            <a className="aa" href="https://helpfulself.xyz/" target="blank">
              Squishy-Squish
            </a>
            <a
              className="aa"
              href="https://github.com/sue-zadeh/Squishy-Squish"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-left"
              className="picsquish"
              src={Squish}
              alt="Jumpy"
            />
          </p>
          {/* </div> */}
          {/* {showText && ( */}
          {/* // <div className="text-layer"> */}
          {/* show the text layer when showText is true */}
          {/* </div>
        </div> */}

          {/* </div> */}
          {/* <div className="rows"> */}
          {/* <div className="div-squish"> */}
          <p data-aos="fade-down-right" className="p-projects">
            <b>no-deal-or-deal:</b>
            Language/Technologies: React.js, Redux.js, TypeScript, CSS3 <br />
            Description: This website was a one-day group project. It is a game
            created. In the group, my role was to work as the frontend lead.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/no-deal-or-deal"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish"
              src={Nodeal}
              alt="Nodeal"
            />
          </p>
          {/* </div>
        <div className="div-squish"> */}
          <p data-aos="fade-down-right" className="p-projects">
            <b>dev-eats:</b>
            Language/Technologies: CSS3 and JavaScript with server-side
            handling. <br />
            Description: This one-day group project website showcases Indian,
            Italian, Asian, and Vegan restaurants.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-zadeh/dev-eats"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish"
              src={Eat}
              alt="Eat"
            />
          </p>
          {/* </div>
        <div className="div-squish"> */}
        </div>
      </div>
    </div>
  )
}
export default Projects
