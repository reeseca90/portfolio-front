import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const UserOnePost = (props) => {
  let location = useLocation().pathname.split('/');
  let id = location[4];

  const [onePost, setOnePost] = useState([]);
  const [comUser, setComUser] = useState('');
  const [comCont, setComCont] = useState('');

  const tokenHeader = { headers: { 'Authorization': `Bearer ${props.token}` }};

  useEffect(() => {
    axios.get('/api/blog/create/posts/' + id, tokenHeader)
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
    const postURL = '/api/blog/create/posts/' + id;

    axios.post(postURL, { name: comUser, content: comCont }, tokenHeader)
     .then(() => {
        setComUser('');
        setComCont('');
        axios.get('/api/blog/create/posts/' + id, tokenHeader)
          .then(data => setOnePost(data.data))
          .catch(err => console.log(err));
     });
  }

  const deleteComment = (e) => { 
    axios.post('/api/blog/create/posts/' + id, 
      { 
        commentID: e.target.id
      }, tokenHeader)
     .then(() => {
        axios.get('/api/blog/create/posts/' + id, tokenHeader)
          .then(data => setOnePost(data.data))
          .catch(err => console.log(err));
     });
  }

  if (onePost.post != null ) {
    const content = onePost.post.content.split(/\n/);

    return(
      <div className='viewPostCard'>
        <Link to='/blog/create/posts' className='link'>Back to All Posts</Link>
        <h1>{onePost.post.title}</h1>
        <p className='date'>{moment(onePost.post.createDate, moment.ISO_8601).format("MMMM Do YYYY, h:mm:ss a")}</p>
        {content.map((para) => {
          if (para!=='') {
            return (
              <p>{para}</p>
            )
          }
        })}
        <Link to={'/blog/create/posts/' + id + '/edit'} className='link'>Edit Post</Link>
        <h3>Comments</h3>
        <ul>
          {onePost.comments.map((comment) => {
            const commentContent = comment.content.split(/\n/);
            
            return (
              <li key={comment._id}>
                <div className='commentCard'>
                  <p>From: {comment.name}<br />
                  {moment(comment.createDate, moment.ISO_8601).format("MMMM Do YYYY, h:mm:ss a")}</p>
                  {commentContent.map((para) => {
                    let i = 0;
                    if (para!=='') {
                      return (
                        <p key={i}>{para}</p>
                      )
                    }
                    i++;
                  })}
                  <button type='button' id={comment._id} onClick={deleteComment}>Delete Comment</button>
                </div>
              </li>
            );
          })}
        </ul>
        <h4>Add new comment</h4>
        <form className='newComment'>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' required={true} onChange={commentUser} value={comUser} />
          <label htmlFor='content'>Comment: </label>
          <textarea rows='6' name='content' onChange={commentContent} value={comCont} />
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