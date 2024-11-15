import React, { useState } from "react";
import LogoNav from "../../images/87e1af770a49ce8e84e3.gif";
import "../Page After log/Style/PageAfterLog.css";
import { useNavigate } from "react-router";
import PopoverNavLog from "./PopoverNavlog";

const NavBarLog = () => {
  const navigate = useNavigate();
  const [isPopover, setIsPopover] = useState<boolean>(false);
  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };
  return (
    <div className="NavBarLogin">
      <div className="logoNav">
        <img className="logo" src={LogoNav} alt="" />
      </div>
      <div
        className="btnNav"
        onClick={() => {
          setIsPopover(!isPopover);
        }}
      >
        <div className="text">Workspace</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">Recent</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">In Favorites</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">Template</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">Create</div>
        <i className="arrow down"></i>
      </div>
      <div onClick={logoutBtn} className="logoutBtn">
        Log out
      </div>
      {isPopover && <PopoverNavLog />}
    </div>
  );
};

export default NavBarLog;
``;
