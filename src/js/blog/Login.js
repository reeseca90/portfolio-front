import '../../css/Login.css';
import { useNavigate } from 'react-router';
const { useState } = require("react")

const Login = (props) => {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  async function loginUser(credentials) {
    return fetch('http://localhost:3001/blog/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json());
  }

  const submit = async (e) => {
    e.preventDefault();
    const newToken = await loginUser({
      username,
      password
    });
    props.setToken(newToken);
    navigate('/blog/create/posts');
  }


  return (
    <form method='POST'>
      <label htmlFor='username'>Username: </label>
      <input type='text' name='username' required={true} onChange={handleUsername} value={username} />

      <label htmlFor='password'>Password: </label>
      <input type='password' name='password' required={true} onChange={handlePassword} value={password} />

      <button type='submit' onClick={submit}>Submit</button>
    </form>
  )
}

export default Login;