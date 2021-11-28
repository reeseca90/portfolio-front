import '../css/Projects.css';
import { Link } from 'react-router-dom';
import memgame from '../images/memgame-screen.jpg';
import battleship from '../images/battleship.jpg';

const Projects = (props) => {

  return (
    <div className='projectsPage'>
      <h1>Projects</h1>

      <p>Here you can see some of my stand-out projects. Feel free to visit and test them out, and if you're interested see more of my work and the code behind it at my&nbsp;
        <a href='https://github.com/reeseca90' target="_blank" rel="noreferrer">GitHub</a> page (opens in a new tab). This page is still a work in progress,&nbsp;
        since the learning process never really ends.
      </p>
      <p>
        First, make sure you check out the <Link to='/blog/view/posts/'>blog</Link>!&nbsp;
        I created it from scratch as a stand-alone back-end project then reworked several components of it and moved it to this site.
      </p>

      <div>
        <Link to='weather'>Weather App</Link>
      </div>

      <div>
        <Link to='memory-game'><img src={memgame} alt='Memory Game Screenshot' id='memgameSS' /></Link>
        <p>
          This 'memory game' is a simple concept, but a great exercise in using state in React. Essentially, the program has three different components that need to talk to each other.&nbsp;
          However, the program structure is a ladder; the Display component renders the Game component which renders the Card component, which complicates handling state because 'Card'&nbsp;
          needs to tell 'Display' what the state of the score is! Ultimately I used prop-drilling to send a callback from the top level to the bottom, which could tell the top level&nbsp;
          what the score was, when the game ended, and when to reset the score. <Link to='memory-game' className='center'>Try it out here</Link>; the directions are in the header of the program!
        </p>
      </div>

      <div>
        <Link to='battleship/'><img src={battleship} alt='Battleship game screenshot' id='battleshipSS' /></Link>
        <p>
          <Link to='battleship/'>Battleship</Link> is a classic game, and creating this version required a lot of planning and interaction between a lot of different objects. I learned a lot from this project about&nbsp;
          how to properly use event handlers, and especially how useful the default event is. It also took a while to iron out the bugs and ensure that things like double shots and&nbsp;
          overlapping ship placement couldn't happen. To play, simply click on the 'AI Board' to shoot at that block; sink all five ships (two two-space ships, and a three, four, and&nbsp;
          five-space ship) to win. Each board is randomly populated with the ships when loading the game. Click 'Start New Game' at any time to reload the boards.
        </p>
      </div> 
    </div>
  )
}

export default Projects;