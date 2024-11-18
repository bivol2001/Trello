import React, { useState } from "react";
import LogoNav from "../../images/87e1af770a49ce8e84e3.gif";
import "../Page After log/Style/PageAfterLog.css";
import { useNavigate } from "react-router";
import PopoverNavLog from "./PopoverNavlog";
import bellImg from "../../images/notification.png";
import questionImg from "../../images/question.png";
import userImg from "../../images/user.png";
import logoutImg from "../../images/logout.png";

console.log(12);
const NavBarLog = () => {
  const navigate = useNavigate();
  const [isPopover, setIsPopover] = useState<boolean>(false);
  console.log(2);
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
      <div className="btnNav">
        <div className="btnPlus">+</div>
      </div>
      <div className="search"></div>

      <div className="bellDiv">
        <img src={bellImg} alt="" className="bellImg" />
      </div>
      <div className="questionDiv">
        <img src={questionImg} alt="" className="questionImg" />
      </div>
      <div className="userDiv">
        <img src={userImg} alt="" className="userImg" />
      </div>

      <div onClick={logoutBtn} className="logoutBtn">
        <img src={logoutImg} alt="" className="logoutImg" />
      </div>
      {isPopover && <PopoverNavLog />}
    </div>
  );
};

export default NavBarLog;
