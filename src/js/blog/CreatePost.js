import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CreatePost = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [cont, setCont] = useState('');
  const [pub, setPub] = useState(false);
  const [thumb, setThumb] = useState({});
  const [image, setImage] = useState({});

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};

  const submitPost = () => {
    axios.post('/api/blog/create/posts/new/', { 
      createDate: Date.now, 
      title: title, 
      content: cont, 
      published: pub,
      thumb: thumb,
      image: image,
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
    // eslint-disable-next-line eqeqeq
    if (e.target.value == 'publish') {
      setPub(true);
    }
    else {
      setPub(false);
    }
  }

  const handleThumb = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result
      };

      setThumb(fileInfo);
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result
      };

      setImage(fileInfo);
    }
  }

  useEffect(() => {
    if (thumb != null) {
      console.log(thumb.base64);
    }
  })

  return (
    <div className='createPostCard'>
      <Link to='/blog/create/posts' className='link'>User All Posts</Link>
      <h2>Create new post: </h2>
      <form>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' required={true} onChange={handleTitle} value={title} />

        <label htmlFor='content'>Content: </label>
        <textarea rows='8' name='content' required={true} onChange={handleContent} value={cont} />

        <label htmlFor='thumb'>Thumbnail: </label>
        <input type='file' name='thumb' className='fileUpload' onChange={handleThumb} />

        <label htmlFor='blogImage'>Image for post: </label>
        <input type='file' name='blogImage' className='fileUpload' onChange={handleImage} />

        <label htmlFor='published'>Publish Now: </label>
        <input type='checkbox' name='published' value='publish' onChange={handlePub} />

        <button type='button' onClick={submitPost}>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost;