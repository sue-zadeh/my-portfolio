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
// import Calc from './Assets/mycalc.png'
// import Unicorn from './Assets/inflate.png'
// import Clown from './Assets/clown.png'
// import Mole from './Assets/Mole.png'
// import NavBar from './NavBar'
// import Devflix from './Assets/devflix.png'
// import Portfolio from './Assets/portfolio.png'

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 900, // You can also fine-tune other options
    })
  }, [])

  // const [showText, setShowText] = useState(false)

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
            This is An API project I've created. It's a bit like Netflix, but
            for sports. People can look up different sports, read about them,
            and use a sidebar to move around, which I think is pretty cool. This
            project taught me a lot, especially about using APIs from scratch.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/my-sportlist"
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
            <b>
              Chatroom With Media: Currently, I am working on improving the
              'DevStagram' project by building a chatroom with media
              capabilities. The changes have been saved in the 'chatroom-app'
              repository.
              <br />
              I used Firebase and Realtime Database to build the necessary
              functionalities.
              <br />{' '}
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}{' '}
              <span className="push-word">{/* <b> ( On going )</b> */}</span>
            </b>
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/chatroom-App"
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
            This is the Minesweeper game, using Javascript and CSS3. I built
            this to have more practice on javascript
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/minesweeper"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish"
              src={Minesweeper}
              alt="Minesweeper"
            />
          </p>
          <p data-aos="fade-down-left" className="p-projects">
            This is the TIc-Tac-Toe game, using Javascript and CSS3. I built
            this to have more practice on javascript. I plan to add autoplay as
            a second player
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/tic-tac-toe"
              target="blank"
            >
              view my project here
            </a>
            <img
              data-aos="fade-up-right"
              className="picsquish"
              src={Toe}
              alt="Toe"
            />
          </p>
          <p data-aos="fade-down-left" className="p-projects">
            <b>
              I built this website in February 2021 based on my self-studying
              and online courses. It is about an Iranian music band (folk
              music), created using HTML5 and CSS3. I want to transition this
              website from HTML to ReactJS, and add back-end functionality to
              the site.
            </b>
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/music-band"
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
              className="picsquish"
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
            This website ( DevStagram ) was a one-day group project that
            retrieves information, displays it on another page, and allows users
            to add data to the JSON using React.js, Redux.js and Typescript. I
            would like to improve this project by turning it into a chatroom
            with media. I worked on the software sign-in page and served as the
            git leader.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/DevStagram"
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
            {/* <br /> */}
          </p>
          {/* </div> */}
          {/* className="pro1"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)} */}
          {/* <div className="rows"> */}
          {/* <div className="div-squish"> */}
          <p data-aos="fade-down-left" className="p-projects">
            <b>
              It was a final group project, which lasted 1 week, and is a game
              Using p5 library, Reactjs, Redux.js, jestT and ypescript . we
              thought about using phaser3 instead of p5, but finally we decided
              to use p5. But that was good as I learnt phaser3 too. I worked on
              some part of frontend, backend, git and wrote tests for some
              pages.
            </b>
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/Squishy-Squish"
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
            This website was a one-day group project. It is a game created using
            React.js,Redux.js, Typescript. In the group, my role was to work as
            the frontend lead.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/no-deal-or-deal"
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
            This website was a one-day group project, and it offers information
            about Indian, Italian, Asian, and Vegan restaurants, using CSS3
            Javascript, server-side handling. I would like to improve this
            project by adding a 'Search' function.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/dev-eats"
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
