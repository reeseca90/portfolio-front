import '../css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Nav from '../js/Nav';
import Footer from '../js/Footer';
import Home from '../js/Home';
import About from '../js/About';
import Projects from '../js/Projects';
import Experience from '../js/Experience';
import Blog from '../js/Blog';
import Contact from '../js/Contact';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <section id='contentArea'>
          <Routes>
            <Route exact path='/' element={<Home />} />     
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/experience' element={<Experience />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
