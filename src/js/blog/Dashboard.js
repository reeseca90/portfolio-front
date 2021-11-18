import '../../css/Blog.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Dashboard = (props) => {
  const [posts, setPosts] = useState([]);

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};

  useEffect(() => {
    axios.get('/api/blog/create/posts', tokenHeader)
      .then(data => setPosts([...data.data.posts]))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='blogPage'>
      <h1>Blog Page Dashboard</h1>
      <Link to='/blog/create/posts/new' className='dashLink'>Create New Post</Link>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id} className='userDashList'>
              <span><Link to={post._id}>{post.title}</Link>&nbsp;</span>
              <span>{moment(post.createDate, moment.ISO_8601).format("MMMM Do YYYY, h:mm:ss a")}&nbsp;</span>
              <span>Published: {post.published ? 'Yes' : 'No'}</span>
            </li>
          );
        })}
      </ul> 
    </div>

  )
}

export default Dashboard;