import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/Page404";
import "./index.css";
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import HomePageLog from "./Pages/Page After log/HomepageLog";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<HomePageLog/> } />
      </Routes>
    </div>
  );
};

export default App;
