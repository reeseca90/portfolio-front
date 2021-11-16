import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CreatePost = (props) => {
  let location = useLocation().pathname.split('/');
  let id = location[3];
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [cont, setCont] = useState('');
  const [pub, setPub] = useState(false);
  const [_id, set_id] = useState('');

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};


  useEffect(() => {
    axios.get('http://localhost:3001/blog/create/posts/' + id + '/edit' , tokenHeader)
      .then((res) => {
        setTitle(res.data.post.title);
        setCont(res.data.post.content);
        set_id(res.data.post._id);
      })
      .catch(err => console.log(err))
  }, []);

  const submitEdit = () => {
    axios.post('http://localhost:3001/blog/create/posts/' + id + '/edit', { 
      createDate: Date.now, 
      title: title, 
      content: cont, 
      published: pub,
      _id: _id
    }, tokenHeader)
      .then(() => {
        navigate('/create/posts/' + id);
      });
  }

  const submitDelete = () => {
    axios.post('http://localhost:3001/blog/create/posts/' + id + '/edit', { 
      deletePostID: _id
    }, tokenHeader)
      .then(() => {
        navigate('/create/posts/');
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
    <div>
      <Link to='/blog/create/posts' className='link'>User All Posts</Link>
      <h2>Edit post post: </h2>
      <button type='button' onClick={submitDelete}>Delete Post</button>
      <form>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' required={true} onChange={handleTitle} value={title} />

        <label htmlFor='content'>Content: </label>
        <textarea rows='8' name='content' required={true} onChange={handleContent} value={cont} />

        <label htmlFor='published'>Publish Now: </label>
        <input type='checkbox' name='published' value='publish' onChange={handlePub} />

        <input type='hidden' name='_id' value={_id} />

        <button type='button' onClick={submitEdit}>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost;