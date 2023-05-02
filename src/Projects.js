// import React, { useState } from 'react'
import NavBar from './NavBar.js'
import Squish from './Assets/squish.png'
import Devstagram from './Assets/Devstagram.png'
import Nodeal from './Assets/nodeal.png'
import Eat from './Assets/deveat.png'
// import Minesweeper from './Assets/minesweeper.png'
// import Calc from './Assets/mycalc.png'
// import Toe from './Assets/tic-tac-toe.png'
// import Unicorn from './Assets/inflate.png'
// import Clown from './Assets/clown.png'
// import Mole from './Assets/Mole.png'
import Music from './Assets/music.png'
import Devflix from './Assets/devflix.png'
import Portfolio from './Assets/portfolio.png'

function Projects() {
  // state to track whether to show the text layer
  // const [showText, setShowText] = useState(false)

  return (
    <div className="projects">
      <NavBar />
      <div className="projects1">
        <h2 className="h2-projects">Projects</h2>
        {/* <div
          className="pro1"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
  > */}
        <div className="rows">
          <div className="div-squish">
            <p className="p-projects">
              <img className="picsquish" src={Squish} alt="Jumpy" />
              <br />
              {/* {showText && ( */}
              {/* // <div className="text-layer"> */}
              {/* show the text layer when showText is true */}
              This web site is a game Using p5 library, reactjs, TypeScript,
              redux.js and jest It was our final project which lasted 1 week. we
              thought about using phaser 3 instead of p5, but finally we decided
              to use p5. But that was good as I learnt phaser3 too
              <br />
              <a href="https://github.com/sue-raisianzadeh/Squishy-Squish">
                view my project here
              </a>
            </p>
          </div>

          {/* </div>
        </div> */}

          <div className="div-squish">
            <p className="p-projects">
              <img className="picsquish" src={Devflix} alt="Flim" />
              <br />
              The website provides list of movies depends on genres, using
              reactjs and Typescript <br />
              <a href="https://github.com/sue-raisianzadeh/Flimflix">
                view my project here
              </a>
            </p>
          </div>

          <div className="div-squish">
            <p className="p-projects">
              <img className="picsquish" src={Devstagram} alt="Devstagram" />
              <br />
              This website can get some information, and should that in another
              page and add data on the data.jason too using reactjs, Typescript,
              Redux.js
              <br />
              <a href="https://github.com/sue-raisianzadeh/DevStagram">
                view my project here
              </a>
            </p>
          </div>
        </div>

        {/* <div className="rows"> */}
        <div className="div-squish">
          <p className="p-projects">
            <img className="picsquish" src={Nodeal} alt="Nodeal" />
            <br />
            This website is about a game, using reactjs, Typescript, Redux.js{' '}
            <br />
            <a href="https://github.com/sue-raisianzadeh/no-deal-or-deal">
              view my project here
            </a>
          </p>
        </div>

        <div className="div-squish">
          <p className="p-projects">
            <img className="picsquish" src={Eat} alt="Eat" />
            <br />
            This website is about offering some Indian, Italian, Asian, and
            Vegan restorants. using Javascript, Server-side-handeling and CSS3
            <br />
            <a href="https://github.com/sue-raisianzadeh/dev-eats">
              view my project here
            </a>
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
              <img className="picsquish" src={Minesweeper} alt="Minesweeper" />
              <img className="picsquish" src={Calc} alt="Calc" />
            </div>
            - there are 3 repositories that contain 5 games using Javascript.
            and there is a Calculator, using Javascript too.
            <br />
            <a href="https://github.com/sue-raisianzadeh/minesweeper">
              view minesweeper here
            </a>
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
            <img className="picsquish" src={Music} alt="Music" />
            <br />
            The website about an Iranian music band (folk music), using HTML5
            and CSS3
            <br />
            <a href="https://github.com/sue-raisianzadeh/music-band">
              view my project here
            </a>
          </p>
        </div>
        {/* </div> */}

        <div className="div-squish">
          <p className="p-projects">
            <img className="picsquish" src={Portfolio} alt="Portfolio" />
            This is my portfolio which I did it to introduce myself and say
            about my passion for Tech and programming
            <a href="https://github.com/sedrz/my-portfolio">
              view my project here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Projects
