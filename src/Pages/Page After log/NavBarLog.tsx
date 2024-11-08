import React from "react";
import LogoNav from "../../images/87e1af770a49ce8e84e3.gif";
import {} from "../../StyleCss/PageAfterLog.css";
import { useNavigate } from "react-router";

const NavBarLog = () => {
  const navigate = useNavigate();
  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };
  return (
    <div className="NavBarLogin">
      <div className="logoNav">
        <img src={LogoNav} alt="" />
      </div>
      <div>Workspace</div>
      <div>Recent</div>
      <div>In Favorites</div>
      <div>Template</div>
      <div>Create</div>
      <div onClick={logoutBtn} className="logoutBtn">
        Log out
      </div>
    </div>
  );
};

export default NavBarLog;
