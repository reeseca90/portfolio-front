import { LoginForm } from '@craigreesedev/craigreesedev-react-components';
import { useNavigate } from 'react-router';

const Login = (props) => {
  const navigate = useNavigate();

  async function loginUser(credentials) {
    return fetch('/api/blog/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json());
  }

  const submit = async (childData) => {
    const newToken = await loginUser(childData);
    props.setToken(newToken);
    navigate('/blog/create/posts');
  }

  return (
    <LoginForm submit={submit} />
  )
}

export default Login;