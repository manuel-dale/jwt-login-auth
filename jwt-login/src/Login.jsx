import './styles/App.css'

function Login() {
    return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
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
    )
};

export default Login;