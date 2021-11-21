import '../css/Experience.css';
import { Link } from 'react-router-dom';

const Experience = (props) => {

  return (
    <div className='experienceList'>
      <h1>My Experience</h1>

      <a href='/api/resume' download>Download my Resume</a>

      <div>
        <h3>College and Self-Learning, Oct 2020 - present. Check out some of the <Link to='/projects'>Projects I've created</Link>.</h3>
        <p>
          I began college courses in Fall 2020, and supplemented that using the website&nbsp;
          <a href='https://www.theodinproject.com/'>The Odin Project</a> as a guide on what to look at next. I also continued to&nbsp;
          just try and figure out how to do certain things on my own that I was curious about. One simple example of that&nbsp;
          is the logo for this site: a planet with rings rendered completely with CSS!
        </p>
      </div>

      <div>
        <h3>Maintenance Electrician, Crane Area Lead - JW Aluminum, Aug 2019 – Oct 2020</h3>
        <p>
          At JW Aluminum, I began as a shift electrician, responsible for emergent repairs to any electrical equipment in the&nbsp;
          rolled aluminum production process. I was moved to the Crane department, having never worked on a crane prior to this job,&nbsp;
          after demonstrating exceptional technical ability, and more importantly the ability to quickly learn new technology.
        </p>
      </div>

      <div>
        <h3>Class Director, Instructor - Naval Nuclear Power Training Command, US Navy, Nov 2016 – July 2019</h3>
        <p>
          At NNPTC, I taught basic electricity and electronics fundamentals to the newest sailors in the naval nuclear propulsion program.&nbsp;
          After being promoted to Chief Petty Officer, I became a section advisor, guiding two classes of 30 students through their time&nbsp;
          at Nuclear Field 'A' School, including training, military development, and personal development. My final assignment was as the&nbsp;
          Electrical Class Director, where I led 12 other section advisors in the development of over 350 students at a time.
        </p>
      </div>

      <div>
        <h3>Reactor Electrical Leading Petty Officer - USS John C. Stennis, US Navy, Feb 2013 – Nov 2016</h3>
        <p>
          Aboard CVN-74, I began as a technician, but was quickly promoted to new roles. First as Zone Manager, where I interfaced with&nbsp;
          Puget Sound Naval Shipyard and other shipboard departments to plan and coordinate maintenance during a shipyard maintenance period.&nbsp;
          Next, I was Work Center Supervisor, responsible for the planning and execution of maintenance on electrical components&nbsp;
          in the reactor plan, as well as training junior sailors in maintenance execution and best practices. Last, I was assigned&nbsp;
          as Leading Petty Officer, responsible for all aspects of the electrical systems in #1 propulsion plant, as well as over 30&nbsp;
          sailors training, qualifications, and professional development.
        </p>
      </div>

      <div>
        <h3>Electrical Technician and Operator - Nuclear Power Training Unit, US Navy, Sept 2010 – Feb 2013</h3>
        <p>
          I was retained at NPTU Charleston after completing nuclear power program training as a junior staff instructor, where&nbsp;
          I worked as a hands-on instructor for students in the program as well as an electrical technician and operator. 
        </p>
      </div>
    </div>
  )
}

export default Experience;