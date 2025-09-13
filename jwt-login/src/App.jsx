import './styles/App.css'

function App() {
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
      </form>
    </div>
  );
}

export default App
