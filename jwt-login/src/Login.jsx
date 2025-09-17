import './styles/App.css';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

function Login() {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <section>
      {errorMessage ? (
        <p ref={errRef} className="errorMessage" aria-live='assertive'>
          {errorMessage}
        </p>
      ) : null}
      <div className="login-container">
        <h2>Login</h2>
        <form>
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