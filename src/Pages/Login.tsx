import React, { useState } from "react";
import "../StyleCss/Login.css";
import { login } from "../api/request";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const navigate = useNavigate();
  const login1 = () => {
    login({ email, password: password1 })
      .then((res) => {
        if (res.data && res.data.accessToken) {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          navigate("/account");
        }
      })
      .catch((error) => {
        alert("Logarea a eșuat!");
      });
  };
  return (
    <div className="login">
      <div>
        <h5>Log in to continue</h5>
        <div className="input-group">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            placeholder="Enter your email"
            id="username"
          />
        </div>
        <div className="input-group">
          <input
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
            value={password1}
            type="password"
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button onClick={login1} type="submit" className="btn">
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
      </div>
    </div>
  );
};

export default Login;
