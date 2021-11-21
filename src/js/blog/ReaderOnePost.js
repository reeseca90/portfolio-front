import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import { useNavigate } from "react-router";

const ReaderOnePost = (props) => {
  const navigate = useNavigate();

  let location = useLocation().pathname.split('/');
  let id = location[4];

  const [onePost, setOnePost] = useState([]);
  const [comUser, setComUser] = useState('');
  const [comCont, setComCont] = useState('');

  useEffect(() => {
    axios.get('/api/blog/view/posts/' + id)
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
    const postURL = '/api/blog/view/posts/' + id;

    axios.post(postURL, { name: comUser, content: comCont })
     .then(() => {
      setComUser('');
      setComCont('');
      axios.get('/api/blog/view/posts/' + id)
        .then(data => setOnePost(data.data))
        .catch(err => console.log(err))
     });
  }
  
  if (onePost.post != null ) {
    const content = onePost.post.content.split(/\n/);

    return(
      <div className='viewPostCard'>
        <h1>{onePost.post.title}</h1>
        <p className='date'>{moment(onePost.post.createDate, moment.ISO_8601).format("MMMM Do YYYY, h:mm:ss a")}</p>
        {content.map((para) => {
          if (para!=='') {
            return (
              <p>{para}</p>
            )
          }
        })}
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
                    if (para!=='') {
                      return (
                        <p>{para}</p>
                      )
                    }
                  })}
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
      <Link to='/blog/view/posts' className='link'>Reader All Posts</Link>
      <p>Post not found</p>
    </div>
  )
}

export default ReaderOnePost;