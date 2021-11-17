import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CreatePost = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [cont, setCont] = useState('');
  const [pub, setPub] = useState(false);

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};

  const submitPost = () => {
    axios.post('/api/blog/create/posts/new/', { 
      createDate: Date.now, 
      title: title, 
      content: cont, 
      published: pub 
    }, tokenHeader)
      .then(() => {
        navigate('/blog/create/posts/');
      });
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleContent = (e) => {
    setCont(e.target.value);
  }

  const handlePub = (e) => {
    if (e.target.value == 'publish') {
      setPub(true);
    }
    else {
      setPub(false);
    }
  }

  return (
    <div className='createPostCard'>
      <Link to='/blog/create/posts' className='link'>User All Posts</Link>
      <h2>Create new post: </h2>
      <form>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' required={true} onChange={handleTitle} value={title} />

        <label htmlFor='content'>Content: </label>
        <textarea rows='8' name='content' required={true} onChange={handleContent} value={cont} />

        <label htmlFor='published'>Publish Now: </label>
        <input type='checkbox' name='published' value='publish' onChange={handlePub} />

        <button type='button' onClick={submitPost}>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost;