import '../css/Blog.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import moment from 'moment';

const Blog = (props) => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (props.token) {
      navigate('/blog/create/posts/');
    }
  })

  useEffect(() => {
    axios.get('http://localhost:3001/blog/view/posts')
      .then(data => setPosts([...data.data.posts]))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='blogPage'>
      <h1>Craig's Blog</h1>
      <ul>
        {posts.map((post) => {
          if (post.published) {
            return (
              <li key={post._id} className='readerList'>
                <span><Link to={post._id}>{post.title}</Link></span>
                <span>{moment(post.createDate, moment.ISO_8601).format("MMMM Do YYYY, h:mm:ss a")}</span>
              </li>
            );
          }
        })}
      </ul> 
    </div>
  )
}

export default Blog;