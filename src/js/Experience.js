import '../css/Experience.css';
import { Link } from 'react-router-dom';

const Experience = (props) => {

  return (
    <div className='experienceList'>
      <h1>My Experience</h1>
      <Link to='/ReeseResume.docx' target="_blank" download>Download my Resume</Link>
      <div>
        College and Self-Learning; applications created<br />
        <Link to='/projects'>Projects I've created</Link>
      </div>
      <div>
        Maintenance Electrician, Crane Area Lead - JW Aluminum, Aug 2019 – Oct 2020
      </div>
      <div>
        Class Director and Instructor - Naval Nuclear Power Training Command, U.S. Navy, Nov 2016 – July 2019
      </div>
      <div>
        Reactor Electrical Leading Petty Officer - USS John C. Stennis, U.S. Navy, Feb 2013 – Nov 2016
      </div>
      <div>
      Electrical Technician and Operator - Nuclear Power Training Unit, U.S. Navy, Sept 2010 – Feb 2013
      </div>
    </div>
  )
}

export default Experience;