import '../css/Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div className="homePage">
      <h1>Welcome</h1>

      <p>Hi, I'm Craig. I'm a full-stack developer looking for new opportunities, either fully-remote or in the Charleston, SC metro area.</p>

      <p>My major focus areas are React front-end (HTML, CSS, JavaScript) and Node.js back-end (Express), using MongoDB (NoSQL) for data storage. I also have experience in with Java, Test-Driven Development (using Jest), and RESTful API development.</p>

      <p>
        Everything about this site was created by me; the front-end code, design, back-end routing, and back-end API endpoints.&nbsp;
        feel free to reach out and ask me about any of the design choices, coding logic, or challenges with creating this site.
      </p>

      <p>
        Check out my&nbsp;
        <Link to='/projects'>projects</Link>, or get to know a little&nbsp;
        <Link to='/about' className='about'>about me</Link>. Find how to reach me at the&nbsp;
        <Link to='/contact'>contact</Link> page, or check out my&nbsp;
        <Link to='/blog'>blog</Link> where I post about my work, what I'm currently learning, and my hobbies.
      </p>
    </div>
  )
}

export default Home;