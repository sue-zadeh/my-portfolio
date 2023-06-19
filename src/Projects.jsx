// import React, { useState } from 'react'
import NavBar from './NavBar'
import Squish from './Assets/squish.png'
import Devstagram from './Assets/Devstagram.png'
import Nodeal from './Assets/nodeal.png'
import Eat from './Assets/deveat.png'
import Minesweeper from './Assets/minesweeper.png'
// import Calc from './Assets/mycalc.png'
// import Toe from './Assets/tic-tac-toe.png'
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
        {/* <div
          className="pro1"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
  > */}
        {/* <div className="rows"> */}
        <div className="div-squish">
          <p className="p-projects">
            This website is a game Using p5 library, Reactjs, Typescript,
            Redux.js and jest. It was our final project which lasted 1 week. we
            thought about using phaser3 instead of p5, but finally we decided to
            use p5. But that was good as I learnt phaser3 too. I worked on some
            part of frontend, backend, git and wrote tests for some pages.
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

        <div className="div-squish">
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
        </div>

        <div className="div-squish">
          <p className="p-projects">
            This website can retrieve information, showed it in another page and
            add data on the JSON too using React.js, Typescript and Redux.js. I
            would like to improve this project by making it a chatroom with
            media. I worked on sign in page and git.
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/DevStagram"
              target="blank"
            >
              view my project here
            </a>
            <img className="picsquish" src={Devstagram} alt="Devstagram" />
          </p>
        </div>
        {/* </div> */}

        {/* <div className="rows"> */}
        <div className="div-squish">
          <p className="p-projects">
            This is a game created using React.js, Typescript and Redux.js.
            <b>
              We created this in a group and my role was to work on frontend
            </b>
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
            This website is about offering some Indian, Italian, Asian, and
            Vegan restaurants. We created this using Javascript,
            Server-side-handeling and CSS3.I would improve this project by
            adding in a ‘Search’ function.
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
            This is the Minesweeper game, using Javascript and CSS3. I built
            this to have more practice on javascript
            <br />
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/minesweeper"
              target="blank"
            >
              view minesweeper here
            </a>
            <img className="picsquish" src={Minesweeper} alt="Minesweeper" />
          </p>
        </div>

        {/* <div className="div-squish">
          <p className="p-projects">
            <div className="game-images">
              <img className="picsquish" src={Clown} alt="Clown" />
              <img className="picsquish" src={Mole} alt="Mole" />
              <img className="picsquish" src={Unicorn} alt="Unicorn" />
            </div>
            <div className="game-images">
              <img className="picsquish" src={Toe} alt="Toe" />
              <img className="picsquish" src={Calc} alt="Calc" />
            </div>
            - there are 3 repositories that contain 5 games using Javascript.
            and there is a Calculator, using Javascript too.
            <br />
            
            <br />
            <a href="https://github.com/sue-raisianzadeh/javascript-carnival">
              view Carnival-games (Inflate the unicorn, Dress the clown, Wack a
              mole) here <br />
            </a>
            <a href="https://github.com/sue-raisianzadeh/tic-tac-toe">
              view Tic-Tac-Toe here
            </a>
            <br />
            <a href="https://github.com/sue-raisianzadeh/calculator">
              view Calculator here
            </a>
          </p>
        </div> */}

        <div className="div-squish">
          <p className="p-projects">
            I built this website 2 years ago based on my self-studying and
            online courses. It is about an Iranian music band (folk music),
            created using HTML5 and CSS3. I want to transition this website from
            HTML to ReactJS, and add back-end functionality to the site.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="aa"
              href="https://github.com/sue-raisianzadeh/music-band"
              target="blank"
            >
              view my project here
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
