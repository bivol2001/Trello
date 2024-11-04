import React from "react";
import "../StyleCss/Register.css"

const Register = () => {
  return (
    <div className="login">
      <form action="">
        <h5>Sign up to continue</h5>
        <div className="input-group">
          <span className="icon"></span>
          <input type="text" placeholder="Enter your email" id="username" />
        </div>
        <div className="input-group">
          <span className="icon"></span>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <div className="input-group">
          <span className="icon"></span>
          <input
            type="password"
            placeholder="Re-enter your password"
            id="password"
          />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">
          Sign up
        </button>
        <div className="sign-link">
          <p>
            Already have an Atlassian account?{" "}
            <a href="login" className="register-link">
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
