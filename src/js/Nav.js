import { Link } from "react-router-dom";
import '../css/Nav.css';

const Nav = (props) => {
  return (
    <header>
      <div className='navPage'>
        <div className='logo toLeft'>
          <Link to='/home' id='logoLink'>
            <div id='planet'>
              <div class='planet top planet-bg'></div>
              <div class='rings'></div>
              <div class='planet bottom planet-bg'></div>
            </div>
            <div className='nameArea'>
              <div className='name'>Craig Reese</div>
              <div className='desc'>Full-Stack Web Developer</div>
            </div>
          </Link>
        </div> 
        <div className='toRight navLinks'>
          <Link to='/home' className='highlight'>Home</Link>
          <Link to='/about' className='highlight'>About</Link>
          <Link to='/projects' className='highlight'>Projects</Link>
          <Link to='/experience' className='highlight'>Experience</Link>
          <Link to='/blog/view/posts' className='highlight'>Blog</Link>
          <Link to='/contact' className='highlight'>Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Nav;