import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CreatePost = (props) => {
  let location = useLocation().pathname.split('/');
  let id = location[4];
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [cont, setCont] = useState('');
  const [pub, setPub] = useState(false);
  const [_id, set_id] = useState('');
  const [thumb, setThumb] = useState({});
  const [image, setImage] = useState({});

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};


  useEffect(() => {
    axios.get('/api/blog/create/posts/' + id + '/edit' , tokenHeader)
      .then((res) => {
        console.log(res);
        setTitle(res.data.post.title);
        setCont(res.data.post.content);
        setThumb(res.data.post.thumb);
        setImage(res.data.post.image);
        set_id(res.data.post._id);
      })
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitEdit = () => {
    axios.post('/api/blog/create/posts/' + id + '/edit', { 
      createDate: Date.now, 
      title: title, 
      content: cont, 
      published: pub,
      thumb: thumb,
      image: image,
      _id: _id
    }, tokenHeader)
      .then(() => {
        navigate('/blog/create/posts/' + id);
      });
  }

  const submitDelete = () => {
    axios.post('/api/blog/create/posts/' + id + '/edit', { 
      deletePostID: _id
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

  const handlePub = (e) => {
    // eslint-disable-next-line eqeqeq
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
      <h2>Edit post post: </h2>
      <form>
      <button type='button' onClick={submitDelete}>Delete Post</button>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' required={true} onChange={handleTitle} value={title} />

        <label htmlFor='content'>Content: </label>
        <textarea rows='8' name='content' required={true} onChange={handleContent} value={cont} />

        <label htmlFor='thumb'>Update Thumbnail: </label>
        <input type='file' name='thumb' className='fileUpload' onChange={handleThumb} />

        <label htmlFor='blogImage'>Update image for post: </label>
        <input type='file' name='blogImage' className='fileUpload' onChange={handleImage} />

        <label htmlFor='published'>Publish Now: </label>
        <input type='checkbox' name='published' value='publish' onChange={handlePub} />

        <input type='hidden' name='_id' value={_id} />

        <button type='button' onClick={submitEdit}>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost;