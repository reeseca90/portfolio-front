import '../css/Projects.css';
import { Link } from 'react-router-dom';
import memgame from '../images/memgame-screen.jpg';
import battleship from '../images/battleship.jpg';
import weatherScreen from '../images/weather-screen.jpg';

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
        I created it myself as a stand-alone back-end project, then reworked several components of it for use here. It functions by making API calls to a Node.js server, which&nbsp;
        in turn retrieves data from a MongoDB and passes it back to the front-end for rendering and display. 
      </p>

      <div>
        <p>
          This <Link to='pdf-gen'>PDF generator</Link> originated as a small project to automatically generate a resume and display it on the page, all on a React front-end.&nbsp;
          I adapted it to my portfolio as a proof-of-concept for sending user input from React to a Node.js back-end for processing into a PDF, and then returning it to the user as a download.&nbsp;
          Functionally, the generated PDF could be sent via email or saved in a database as well, or the data could be processed into a variety of formats and saved another way.
        </p>
        
      </div>

      <div>
        <Link to='weather'><img src={weatherScreen} alt='Weather App Screenshot' id='weatherSS' /></Link>
        <p>
          While the final application looks simple, this was the first useful application of an external API that I created. Using the Open Weather Map API, the app will search by city or ZIP&nbsp;
          code to find the current weather. The API specifies three different calls depending on what the user input is, so this application will take the user input and determine whether the&nbsp;
          input was a ZIP, city, or city/state, then make the appropriate call using that input. Because it all goes through an external source, the search is not always successful for city&nbsp;
          or city/state searches. The data is returned in JSON format, then split out for display in a readable form. <Link to='weather'>Check it out here</Link>.
        </p>
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