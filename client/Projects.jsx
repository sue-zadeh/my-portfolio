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
            This website, which I developed as a volunteer for Smart Panel Homes
            Ltd, showcases my work. It's built with ReactJS, CSS, Bootstrap,
            Sqlite, php,and MySQL featuring engaging scroll animations.
            Additionally, it includes a form that connects to a database,
            facilitating easy communication with clients. The website is now
            live on the internet. Check it out here:
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
              view my project here
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
            <b>my-sportlist:</b>
            This project was a good practice for backend, especially about using
            APIs from scratch. It's a bit like Netflix, but for sports. users
            can look up different sports, read about them, and use a sidebar to
            move around, which I think is pretty cool.
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

          <p data-aos="fade-down-right" className="p-projects">
            <b>chatroom:</b>
            Chatroom With Media. I am working on building a chatroom with media
            capabilities.
            <br />
            I used Firebase and Realtime Database to build the necessary
            functionalities.
            <br /> {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}{' '}
            <span className="push-word"></span>
            <a
              className="aa"
              href="https://github.com/sue-zadeh/chatroom"
              target="blank"
            >
              view my project here <br />
              <span
                style={{
                  paddingRight: '1.5em',
                  color: 'rgb(240, 240, 165)',
                  fontSize: '20px',
                  textDecoration: 'none',
                }}
              >
                <b>( On going )</b>
              </span>
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
            This is the Minesweeper game, using Javascript and CSS3. I built
            this to have more practice on javascript
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
            This is the TIc-Tac-Toe game, using Javascript and CSS3. I built
            this to have more practice on javascript. I plan to add autoplay as
            a second player
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
            <b>music-band:</b>Created in February 2021 from self-study and
            online courses, this website features an Iranian folk music band
            using HTML5 and CSS3. I've incorporated backend functionality with
            JavaScript and aim to upgrade the site to ReactJS.
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
                  fontSize: '20px',
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
            DevStagram, a one-day group project, pulls and displays data,
            letting users add to the JSON with React.js, Redux.js, and
            TypeScript. I evolve it into a chatroom with media. I developed the
            sign-in page and led the git management.
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
            This was a 1-week final group project, a game using the p5 library,
            Reactjs, Redux.js, Jest, and TypeScript. We considered Phaser3 but
            chose p5, yet I still learned Phaser3. I contributed to the
            frontend, backend, managed git, and wrote tests for pages.
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
            This website was a one-day group project. It is a game created using
            React.js,Redux.js, Typescript. In the group, my role was to work as
            the frontend lead.
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
            This one-day group project website showcases Indian, Italian, Asian,
            and Vegan restaurants using CSS3 and JavaScript with server-side
            handling. I plan to enhance it by adding a 'Search' function.
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
