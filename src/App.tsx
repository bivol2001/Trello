import React, { useEffect } from "react";
import { Routes, Route, useParams, useLocation, Navigate, useNavigate } from "react-router";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/Page404";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HomePageLog from "./Pages/Page After log/HomepageLog";
import { authRoutes } from "./consts/AuthRoutes";
import Boards from "./Pages/Boards";

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const accessToken = localStorage.getItem("accessToken")

  useEffect(()=>{
    if(authRoutes.includes(location.pathname) && !accessToken){
      navigate("/login")
    }
    console.log(location.pathname);
  }
    ,[location])

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<HomePageLog />} />
        <Route path="/boards" element={<Boards/>} />
       
      </Routes>
    </div>
  );
};

export default App;
