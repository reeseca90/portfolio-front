import '../../css/Blog.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Dashboard = (props) => {
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    axios.get('/api/blog/create/posts', { 
      headers: { 'Authorization': `Bearer ${props.token}` },
      params: { pageNum: pageNum } 
    })
      .then((data) => {
        setPosts([...data.data.posts])
        setPostCount(data.data.count);
      })
      .catch(err => console.log(err))
  }, [pageNum]);

  const pageIncrement = (e) => {
    const newPageNumber = parseInt(pageNum) + parseInt(e.target.value);
    
    if (newPageNumber > 0 && newPageNumber <= (Math.ceil(postCount / 5))) {
      setPageNum(parseInt(pageNum) + parseInt(e.target.value));
    }
  }

  const pageChange = (e) => {
    setPageNum(e.target.value);
  }

  const genPageNumbers = () => {
    const pageNumArray = [];
    for (let i = 1; i <= Math.ceil(postCount / 5); i++) {
      pageNumArray.push(i);
    }
    return pageNumArray;
  }

  return (
    <div className='blogPage'>
      <h1>Blog Page Dashboard</h1>
      {props.token &&
        <Link to='/blog/create/posts/new' className='dashLink'>Create New Post</Link>
      }

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

      <ul id="pageList">
        <p>Viewing 5 posts per page</p>
        <li><button value={-1} onClick={pageIncrement}>&lt;</button></li>
        {genPageNumbers().map((num) => {
          return (
            <li key={num}><button value={num} onClick={pageChange}>{num}</button></li>
          );
        })}
        <li><button value={1} onClick={pageIncrement}>&gt;</button></li>
      </ul>
    </div>

  )
}

export default Dashboard;