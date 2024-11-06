import React, { useState } from "react";
import "../StyleCss/Register.css";
import { register } from "../api/request";
const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const register1 = () => {
    console.log(email, password1);
    try {
      register({ email, password: password1 }).then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
     })
    
      
    } catch (e) {
      console.log(e);
    }
    if (password1 === password2) {
    } else {
      alert("parolele nu sunt egale")
    }
  };

  return (
    <div className="login">
      <div className="form">
        <h5>Sign up to continue</h5>
        <div className="input-group">
          <span className="icon"></span>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter your email"
            id="username"
          />
        </div>
        <div className="input-group">
          <span className="icon"></span>
          <input
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
            value={password1}
            type="text"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <div className="input-group">
          <span className="icon"></span>
          <input
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            value={password2}
            type="text"
            placeholder="Re-enter your password"
            id="password"
          />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button onClick={register1} className="btn">
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
      </div>
    </div>
  );
};

export default Register;
