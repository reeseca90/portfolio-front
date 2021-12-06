import { useState } from "react";

const LoginForm = (props) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();

    props.submit({ username, password });
  }

  return (
    <form method='POST' className='login'>
      <label htmlFor='username'>Username: </label>
      <input type='text' name='username' required={true} onChange={handleUsername} value={username} />

      <label htmlFor='password'>Password: </label>
      <input type='password' name='password' required={true} onChange={handlePassword} value={password} />

      <button type='submit' onClick={submitForm}>Submit</button>
    </form>
  )
}

export default LoginForm;