import '../css/About.css';
import shoes from '../images/running-shoes.jpg';
import orion from '../images/orion_e.jpg';

const About = (props) => {

  return (
    <div className='aboutPage'>
      <h1>About Me</h1>

      <div class='flexCol'>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;
          I am a full-stack developer with a long-time passion for learning new things. I have always had an interest in computers and technology, and enjoy&nbsp;
          the problem-solving aspect of development. I first started working with code in high school on HTML, CSS, and VisualBasic. In 2020, I decided to&nbsp;
          pursue development as a job, and began working with HTML, CSS, JavaScript, and Java. I've since added some frameworks to my stack, such as React and &nbsp;
          Node.js, and Express, and have worked with APIs and tech from Google, AWS, and MongoDB.
        </p>
        <img className='floatLeft aboutImg' src={shoes} alt="Craig's shoes" />

        <p>&nbsp;&nbsp;&nbsp;&nbsp;
          Formerly, I was enlisted in the United States Navy. I served as a Nuclear Field Electrician's Mate for 11 years, across three duty stations in many different roles.&nbsp;
          I started as an operator, maintenance technician, and instructor aboard the MTS-626, a nuclear submarine training platform, where I&nbsp;
          reinforced my fundamental maintenance and troubleshooting skills while training junior sailors to operate a nuclear power plant.  
        </p>

        <img className='floatRight aboutImg' src={orion} alt="Constellation orion the hunter" />
        <p><br />&nbsp;&nbsp;&nbsp;&nbsp;
          I transferred to the aircraft carrier USS John C. Stennis, CVN-74, where I directed the operation of the electrical distribution system aboard the ship&nbsp;
          and supervised all aspects of operation of the nuclear power plant. I served as Electrical Leading Petty Officer of number one propulsion plant, where I&nbsp;
          was responsible for the planning and execution of all electrical maintenance, as well as the training and development of junior personnel.
        </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;
          After my tour aboard CVN-74, I transferred to Nuclear Field 'A' School where I taught new students basic electrical theory and fundamentals, as well as&nbsp;
          serving as a section adviser to multiple classes. After being promoted to Chief Petty Officer, I served as electrical class director, where I led twelve other sea-returnee sailors&nbsp;
          who were responsible for all Electrician's Mate students enrolled at the school, including their technical training, military training, and personal development.
        </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;
          In my free time, I enjoy running, astronomy, and some video games; you can see some of what I'm up to in my blog posts.
        </p>
      </div>
    </div>

  )
}

export default About;