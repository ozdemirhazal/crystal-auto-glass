import { useState } from "react";
import "../style/Login-SignUp.css";

function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Giriş işlemi
    } else {
      // Kayıt işlemi
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <form action="" className="form-login" onSubmit={handleSubmit}>
        <ul className="login-nav">
          <li className={`login-nav__item ${isLogin ? "active" : ""}`}>
            <a href="#" onClick={toggleForm}>
              Sign In
            </a>
          </li>
          <li className={`login-nav__item ${!isLogin ? "active" : ""}`}>
            <a href="#" onClick={toggleForm}>
              Sign Up
            </a>
          </li>
        </ul>
        <label htmlFor="login-input-user" className="login__label">
          Username
        </label>
        <input
          id="login-input-user"
          className="login__input"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="login-input-password" className="login__label">
          Password
        </label>
        <input
          id="login-input-password"
          className="login__input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="login-sign-up" className="login__label--checkbox">
          <input
            id="login-sign-up"
            type="checkbox"
            className="login__input--checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Keep me Signed in
        </label>
        <button className="login__submit" disabled={!(username && password)}>
          Sign {isLogin ? "in" : "Up"}
        </button>
      </form>
      {isLogin && (
        <a href="#" className="login__forgot">
          Forgot Password?
        </a>
      )}
    </div>
  );
}

export default LoginSignupForm;
