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

      <ul className='userDashList'>
        {posts.map((post) => {
          return (
            <li key={post._id} className='listFlex'>
              {post.thumb && 
                <img className='blogThumb' src={post.thumb.base64} alt={post.thumb.name} />
              }
              <div className='blogListText alignLeft'>
                <div><Link to={post._id}>{post.title}</Link>&nbsp;</div>
                <div>{moment(post.createDate, moment.ISO_8601).format("MMMM Do YYYY, h:mm:ss a")}&nbsp;</div>
                <div>Published: {post.published ? 'Yes' : 'No'}</div>
              </div>
            </li>
          );
        })}
      </ul> 
    </div>

  )
}

export default Dashboard;