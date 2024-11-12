import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useParams,
  useLocation,
  useNavigate,
} from "react-router";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/Page404";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HomePageLog from "./Pages/Page After log/HomepageLog";
import { authRoutes } from "./consts/AuthRoutes";
import Practic from "./Pages/practica/practic";
import UseEffect from "./Pages/practica/exe"

const App = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const location = useLocation();
  
  useEffect(() => {
    console.log(location.pathname);
     if (authRoutes.includes(location.pathname) && !accessToken) {
       navigate("/login");
     } 
  },[location])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<HomePageLog />} />
        <Route path="/calc" element={<Practic/>} />
        <Route path="/efect" element={<UseEffect/>} />
      </Routes>
    </div>
  );
};

export default App;
