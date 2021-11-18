import { Link } from "react-router-dom";
import '../css/Nav.css';

const Nav = (props) => {
  return (
    <header>
      <div className='navPage'>
        <div className='logo toLeft'>
          <div id='planet'>
            <div class='planet top planet-bg'></div>
            <div class='rings'></div>
            <div class='planet bottom planet-bg'></div>
          </div>
          <div className='nameArea'>
            <div className='name'>Craig Reese</div>
            <div className='desc'>Full-Stack Web Developer</div>
          </div>
        </div>
        <Link to='/home' className='toRight'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/blog/view/posts'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </header>
  )
}

export default Nav;