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
import Treetalk from './Assets/TreeTalk.png'
import Votingcenter from './Assets/voting-center.png'
import Pokemon from './Assets/advancedsearch.png'
// import Clown from './Assets/clown.png'
// import Mole from './Assets/Mole.png'

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 900
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
            Description: This volunteer project website for Smart Panel Homes
            Ltd features engaging scroll animations and a dynamic form linked to
            a database for smooth client interactions.
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
            <b>Pokedex:</b>
            <b>
              Language/Technologies: React.js (Vite), TypeScript, Bootstrap,
              Flask, REST API
            </b>
            Description: An interactive Pokémon Pokédex web application that
            allows users to explore, filter, and search through Pokémon details,
            with advanced search options and sorting functionality for
            attributes like type, height, and weight. The project demonstrates
            modern UI/UX principles and clean, maintainable coding practices.
            <a
              className="aa"
              href="https://github.com/sue-zadeh/pokedex"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-down-right"
              className="picsquish"
              src={Pokemon}
              alt="Pokemon"
            />
          </p>
          <p data-aos="fade-down-right" className="p-projects">
            <b>Selwyn Campground(scg):</b>
            <b>
              Language/Technologies: Python, Bootstrap, Flask, Jinja, MySQL{' '}
            </b>
            Description: A web application for Selwyn Campground to assist
            office staff in managing customer and booking data efficiently, with
            features for adding, editing, and managing records.
            <a
              className="aa"
              href="https://github.com/sue-zadeh/scg"
              target="blank"
            >
              view my project here
            </a>
            {/* <a
              className="aa"
              href="https://suezadeh.pythonanywhere.com/"
              target="blank"
            >
              
            </a> */}
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
            Description: Similar to Netflix but for sports, this project allows
            users to explore different sports, read detailed information, and
            navigate using a sidebar—great for backend API practice.
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
            <b> Language/Technologies: reactjs, Firebase, Realtime Database</b>
            Description: This project focuses on creating a chatroom with
            enhanced media sharing capabilities, utilizing Firebase and Realtime
            Database for live interactions.
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}{' '}
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
            <b>TreeTalk:</b>
            <b>
              Language/Technologies:Python, Flask, Jinja,Javascript, Bootstrap
              and CSS3
            </b>
            Description: Tree Talk is a community platform where neighbors can
            discuss and share insights about tree-related topics in their
            neighborhood. Users can post messages, reply to others, and engage
            in conversations.
            <a
              className="aa"
              href="https://github.com/sue-zadeh/tree-talk"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish-toe"
              src={Treetalk}
              alt="TreeTalk"
            />
          </p>

          <p data-aos="fade-up-right" className="p-projects">
            <b>minesweeper:</b>
            <b>Language/Technologies:Javascript and CSS3</b>
            Description: This is the Minesweeper game. I built this to have more
            practice on javascript
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
            <b> Language/Technologies: Javascript and CSS3</b>
            Description: This is the TIc-Tac-Toe game. I built this to have more
            practice on javascript .
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
            <b>music-band: Language/Technologies: HTML5, CSS3, JavaScript</b>
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
                  textDecoration: 'none'
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
                  textDecoration: 'none'
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
            <b>Language/Technologies: reactjs,Redux.js,TypeScript, css </b>
            Description: DevStagram, a one-day group project, pulls and displays
            data, letting users add to the JSON. I evolve it into a chatroom
            with media. I developed the sign-in page and led the git management.
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
            <b>
              Language/Technologies: p5, Javascript,Redux.js, Jest, and
              TypeScript, CSS3{' '}
            </b>
            Description: This was a 1-week final group project, and a game. I
            contributed to the frontend, backend, managed git, and wrote tests
            for pages.
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
            <b> Language/Technologies: React.js, Redux.js, TypeScript, CSS3 </b>
            Description: This website was a one-day group project. It is a game
            created. In the group, my role was to work as the frontend lead.
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
            <b>
              Language/Technologies: JavaScript with server-side handling and
              CSS3.
            </b>
            Description: This one-day group project website showcases Indian,
            Italian, Asian, and Vegan restaurants.
            <a
              className="aa"
              href="https://github.com/sue-zadeh/dev-eats"
              target="blank"
            >
              view my project here
            </a>
            <br />
            <br />
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
        <div className="div-squish">
          <p data-aos="fade-down-right" className="p-projects">
            <b>voting-center:</b>
            <b>
              Language/Technologies: Python, Flask,Jinja, javaScript,Bootstrap
              and css <br />
              <a
                className="aa"
                href="https://github.com/LUMasterOfAppliedComputing2024S2/COMP639S2_project_1_Gamma/tree/sue"
                target="blank"
              >
                view my project here
              </a>
              <br />
              <a
                className="aa"
                href="https://gamma.pythonanywhere.com/"
                target="blank"
              >
                view my project live on pythonanywhere
              </a>
            </b>
            Description: This project was part of a group assignment for a
            Master's course in Applied Computing. The website allows users to
            vote for the best walkway in New Zealand. I was responsible for
            developing all pages related to user registration, login, voting,
            displaying results, and ensuring the pages were styled responsively.
            <img
              data-aos="fade-down-right"
              className="picsquish"
              src={Votingcenter}
              alt="Devstagram"
            />
          </p>
        </div>
      </div>
    </div>
  )
}
export default Projects
