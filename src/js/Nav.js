import { Link } from "react-router-dom";
import '../css/Nav.css';

const Nav = (props) => {
  return (
    <header>
      <div class='navPage'>
        <span class='logo toLeft'>placeholder for logo</span>
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