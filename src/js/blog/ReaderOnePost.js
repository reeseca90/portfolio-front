import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ReaderOnePost = (props) => {
  let location = useLocation().pathname.split('/');
  let id = location[4];

  const [onePost, setOnePost] = useState([]);
  const [comUser, setComUser] = useState('');
  const [comCont, setComCont] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/blog/view/posts/' + id)
      .then(data => setOnePost(data.data))
      .catch(err => console.log(err))
  }, []);

  const commentUser = (e) => {
    setComUser(e.target.value);
  }

  const commentContent = (e) => {
    setComCont(e.target.value);
  }

  const postComment = () => {
    const postURL = 'http://localhost:3001/blog/view/posts/' + id;

    axios.post(postURL, { name: comUser, content: comCont })
     .then(() => {
      setComUser('');
      setComCont('');
      axios.get('http://localhost:3001/blog/view/posts/' + id)
        .then(data => setOnePost(data.data))
        .catch(err => console.log(err))
     });
  }

  if (onePost.post != null ) {
    return(
      <div>
        <Link to='/blog/view/posts' className='link'>Reader All Posts</Link>
        <h2>{onePost.post.title}</h2>
        <p>{onePost.post.createDate}</p>
        <p>{onePost.post.content}</p>
        <h3>comments</h3>
        <ul>
          {onePost.comments.map((comment) => {
            return (
              <li key={comment._id}>
                <div className='commentCard'>
                  <p>{comment.name}, {comment.createDate}</p>
                  <p>{comment.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <h4>Add new comment</h4>
        <form>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' required={true} onChange={commentUser} value={comUser} />
          <label htmlFor='content'>Comment: </label>
          <textarea rows='4' name='content' onChange={commentContent} value={comCont} />
          <button type='button' onClick={postComment}>Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Link to='/blog/view/posts' className='link'>Reader All Posts</Link>
      <p>Post not found</p>
    </div>
  )
}

export default ReaderOnePost;