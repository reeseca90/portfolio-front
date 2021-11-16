import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UserOnePost = (props) => {
  let location = useLocation().pathname.split('/');
  let id = location[4];

  const [onePost, setOnePost] = useState([]);
  const [comUser, setComUser] = useState('');
  const [comCont, setComCont] = useState('');

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};

  useEffect(() => {
    axios.get('http://localhost:3001/blog/create/posts/' + id, tokenHeader)
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
    const postURL = 'http://localhost:3001/blog/create/posts/' + id;

    axios.post(postURL, { name: comUser, content: comCont }, tokenHeader)
     .then(() => {
        setComUser('');
        setComCont('');
        axios.get('http://localhost:3001/blog/create/posts/' + id, tokenHeader)
          .then(data => setOnePost(data.data))
          .catch(err => console.log(err));
     });
  }

  const deleteComment = (e) => { 
    axios.post('http://localhost:3001/blog/create/posts/' + id, 
      { 
        commentID: e.target.id
      }, tokenHeader)
     .then(() => {
        axios.get('http://localhost:3001/blog/create/posts/' + id, tokenHeader)
          .then(data => setOnePost(data.data))
          .catch(err => console.log(err));
     });
  }

  if (onePost.post != null ) {
    return(
      <div>
        <Link to='/blog/create/posts' className='link'>User All Posts</Link>
        <h2>{onePost.post.title}</h2>
        <p>{onePost.post.createDate}</p>
        <p>{onePost.post.content}</p>
        <Link to={'/blog/create/posts/' + id + '/edit'} className='link'>Edit Post</Link>
        <h3>comments</h3>
        <ul>
          {onePost.comments.map((comment) => {
            return (
              <li key={comment._id}>
                <div className='commentCard'>
                  <p>{comment.name}, {comment.createDate}</p>
                  <p>{comment.content}</p>
                  <button type='button' id={comment._id} onClick={deleteComment}>Delete Comment</button>
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
      <Link to='/blog/create/posts' className='link'>User All Posts</Link>
      <p>Post not found</p>
    </div>
  )
}

export default UserOnePost;