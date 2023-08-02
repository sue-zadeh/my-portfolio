import React from 'react'
import NavBar from './NavBar'
import Squish from './Assets/squish.png'
import Devstagram from './Assets/Devstagram.png'
import Nodeal from './Assets/nodeal.png'
import Eat from './Assets/deveat.png'
import Chat from './Assets/Chat.png'
import Minesweeper from './Assets/minesweeper.png'
import Toe from './Assets/tic-tac-toe.png'
// import Calc from './Assets/mycalc.png'
// import Unicorn from './Assets/inflate.png'
// import Clown from './Assets/clown.png'
// import Mole from './Assets/Mole.png'
import Music from './Assets/music.png'
import Devflix from './Assets/devflix.png'
// import Portfolio from './Assets/portfolio.png'

function Projects() {
  // state to track whether to show the text layer
  // const [showText, setShowText] = useState(false)

  return (
    <div className="projects">
      <div className="navpro">
        <NavBar />
      </div>
      <div className="projects1">
        <h2 className="h2-projects">Projects</h2>

        <div className="div-squish">
          <p className="p-projects">
            This website ( DevStagram ) was a one-day group project that
            retrieves information, displays it on another page, and allows users
            to add data to the JSON using React.js, Typescript, and Redux.js. I
            would like to improve this project by turning it into a chatroom
            with media. I worked on the software sign-in page and served as the
            git leader
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/DevStagram"
              target="blank"
            >
              view my project here
            </a>
            <br />
            <b>
              I am working on this project and have saved the changes to the
              chatroom-app repository. I used Firebase and Realtime Database for
              the backend <b> ( On going )</b>
            </b>
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/chatroom-App"
              target="blank"
            >
              {' '}
              view my project here
            </a>
            <br />
            <div className="chat">
              <img className="picsquish" src={Devstagram} alt="Devstagram" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img className="picsquish" src={Chat} alt="Chat" />
            </div>
          </p>
        </div>
        {/* <div
          className="pro1"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
  > */}
        {/* <div className="rows"> */}
        <div className="div-squish">
          <p className="p-projects">
            It was a final group project, which lasted 1 week, and is a game
            Using p5 library, Reactjs, Typescript, Redux.js and jest. we thought
            about using phaser3 instead of p5, but finally we decided to use p5.
            But that was good as I learnt phaser3 too. I worked on some part of
            frontend, backend, git and wrote tests for some pages.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/Squishy-Squish"
              target="blank"
            >
              view my project here
            </a>
            <img className="picsquish" src={Squish} alt="Jumpy" />
            <br />
            {/* {showText && ( */}
            {/* // <div className="text-layer"> */}
            {/* show the text layer when showText is true */}
          </p>
        </div>

        {/* </div>
        </div> */}

        {/* <div className="div-squish">
          <p className="p-projects">
            The website provides list of movies based on genres, using React.js,
            Typescript and API . It was a good practice to learn more about API
            and backend
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/Flimflix"
              target="blank"
            >
              view my project here
            </a>
            <img className="picsquish" src={Devflix} alt="Flim" />
          </p>
        </div> */}

        {/* </div> */}

        <div className="div-squish">
          <p className="p-projects">
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
            <img className="picsquish" src={Minesweeper} alt="Minesweeper" />
          </p>
        </div>

        <div className="div-squish">
          <p className="p-projects">
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
            <img className="picsquish" src={Toe} alt="Toe" />
          </p>
        </div>

        {/* <div className="rows"> */}
        <div className="div-squish">
          <p className="p-projects">
            This website was a one-day group project. It is a game created using
            React.js, Typescript, and Redux.js. In the group, my role was to
            work as the frontend lead.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/no-deal-or-deal"
              target="blank"
            >
              view my project here
            </a>
            <img className="picsquish" src={Nodeal} alt="Nodeal" />
          </p>
        </div>

        <div className="div-squish">
          <p className="p-projects">
            This website was a one-day group project, and it offers information
            about Indian, Italian, Asian, and Vegan restaurants, using
            Javascript, server-side handling, and CSS3. I would like to improve
            this project by adding a 'Search' function.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/dev-eats"
              target="blank"
            >
              view my project here
            </a>
            <img className="picsquish" src={Eat} alt="Eat" />
          </p>
        </div>

        <div className="div-squish">
          <p className="p-projects">
            <b>
              I built this website in February 2021 based on my self-studying
              and online courses.{' '}
            </b>
            It is about an Iranian music band (folk music), created using HTML5
            and CSS3. I want to transition this website from HTML to ReactJS,
            and add back-end functionality to the site.
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/music-band"
              target="blank"
            >
              built view my project here
            </a>
            <img className="picsquish" src={Music} alt="Music" />
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
export default Projects
