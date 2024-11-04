import React from "react";
import "../StyleCss/Login.css";
const Login = () => {
  return (
    <div className="login">
      
      <form action="">
        <h5>Log in to continue</h5>
        <div className="input-group">
          <input type="text" placeholder="Enter your email" id="username" />
        </div>
        <div className="input-group">
          <input type="password"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="sign-link">
          <p>
            Can't login?{" "}
            <a href="register" className="register-link">
              Create an acount
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
