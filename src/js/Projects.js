import '../css/Projects.css';
import { Link } from 'react-router-dom';

const Projects = (props) => {

  return (
    <div className='projectsPage'>
      <h1>Projects</h1>

      <p>Here you can see some of my stand-out projects. Feel free to visit and test them out, and if you're interested see more of my work and the code behind it at my&nbsp;
        <a href='https://github.com/reeseca90' target="_blank" rel="noreferrer">GitHub</a> page (opens in a new tab). 
      </p>
      <p>
        Make sure you check out the <Link to='/blog/view/posts/'>blog</Link>!&nbsp;
        I created it as a stand-alone back-end project then moved it to this site, reworking several parts of it to improve its design.
      </p>
    </div>
  )
}

export default Projects;