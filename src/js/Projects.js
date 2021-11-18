import '../css/Projects.css';
import { Link } from 'react-router-dom';

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
    </div>
  )
}

export default Projects;