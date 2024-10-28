import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/Page404";
import "./index.css";
import Navbar from "./Components/HomeComponents/NavBar";
import { Flip, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
