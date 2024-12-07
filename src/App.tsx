import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useParams,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/Page404";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { authRoutes } from "./consts/AuthRoutes";
import HomePageLog from "./Pages/Page After log/HomepageLog";
import Boards from "./Pages/Boards";
import "bootstrap/dist/css/bootstrap.min.css";
import BoardsWorkspaces from "./Components/BoardsWorkspaces";
import BoardsWorkspacesPanel from "./Pages/BoardsPanelWorkspaces";
import BoardOutlet from "./Components/HomeComponents/BoardOutlet";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (authRoutes.includes(location.pathname) && !accessToken) {
      navigate("/login");
    }
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<HomePageLog />} />
        
        <Route path="/boards" element={<Boards />}>
          <Route index element={<BoardsWorkspaces />} />
          <Route path="panel" element={<BoardOutlet/>} />
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;
