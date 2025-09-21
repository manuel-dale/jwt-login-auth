import './styles/App.css';
import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthProvider.jsx';

function Login() {

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('')
  }, [user, password]);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = import.meta.env.VITE_LOGIN_URL;

    try {
      const response = await axios.post(url, {
        email: user,
        password: password,
      });

      const accessToken = response?.data?.accessToken;
      console.log(response?.data?.accessToken)
      setAuth({ user, password, accessToken }) // Store in Auth object

      setErrorMessage('')
    } catch (err) {
      console.log('Invalid username or password')
      setErrorMessage('Invalid username or password')

      errRef?.current?.focus();
    }
  };

  return (
    <section>
      {errorMessage ? (
        <p ref={errRef} className="errorMessage" aria-live='assertive'>
          {errorMessage}
        </p>
      ) : null}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={user}
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  )
};

export default Login;