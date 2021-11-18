import '../css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../js/Nav';
import Footer from '../js/Footer';
import Home from '../js/Home';
import About from '../js/About';
import Projects from '../js/Projects';
import Experience from '../js/Experience';
import Blog from '../js/Blog';
import Contact from '../js/Contact';
import ReaderOnePost from '../js/blog/ReaderOnePost';
import Login from '../js/blog/Login';
import Dashboard from '../js/blog/Dashboard';
import CreatePost from '../js/blog/CreatePost';
import UserOnePost from '../js/blog/UserOnePost';
import EditPost from '../js/blog/EditPost';

function getToken() {
  const token = localStorage.getItem('token');
  if (token != null) {
    return token;
  } 
  else {
    return null;
  }
}

function App() {

  const [tokenHook, setTokenHook] = useState();

  function setToken(token) {
    localStorage.setItem('token', token.token);
    setTokenHook(token.token);
  }

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
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/blog/login' element={<Login setToken={setToken} />} />
            <Route exact path='/blog/view/posts' element={<Blog token={getToken()} />} />
            <Route exact path='/blog/create/posts' element={<Dashboard token={getToken()} />} />
            <Route exact path='/blog/create/posts/new' element={<CreatePost token={getToken()} />} />
            <Route path='/blog/view/posts/:id' element={<ReaderOnePost />} />
            <Route path='/blog/create/posts/:id' element={<UserOnePost token={getToken()} />} />
            <Route path='/blog/create/posts/:id/edit' element={<EditPost token={getToken()} />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
