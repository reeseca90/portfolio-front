import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = (props) => {
  const [posts, setPosts] = useState([]);

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};

  useEffect(() => {
    axios.get('http://localhost:3001/blog/create/posts', tokenHeader)
      .then(data => setPosts([...data.data.posts]))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Link to='/blog/create/posts/new' className='dashLink'>Create New Post</Link>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id}><Link to={post._id}>{post.title}</Link>, {post.createDate}, Published: {post.published ? 'Yes' : 'No'}</li>
          );
        })}
      </ul> 
    </div>

  )
}

export default Dashboard;