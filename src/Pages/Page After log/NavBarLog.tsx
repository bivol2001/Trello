import React, { useState } from "react";
import LogoNav from "../../images/87e1af770a49ce8e84e3.gif";
import "../Page After log/Style/PageAfterLog.css";
import { useNavigate } from "react-router";
import bellImg from "../../images/notification.png";
import questionImg from "../../images/question.png";
import userImg from "../../images/user.png";
import logoutImg from "../../images/logout.png";
import UserProfilePopover from "../../Components/UserProfilePopover";
import QuestionPopover from "../../Components/QuestionPopover";
import { useTranslation } from "react-i18next";
import NotificationPopover from "../../Components/NotificationPopover";

const NavBarLog = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [openUserProfile, setOpenUserProfile] = useState<boolean>(false);
  const [questionButton, setIsquestionButton] = useState<boolean>(false);
  const [notificationButton, setIsNotificationButton] =
    useState<boolean>(false);
  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  const [customPopover, setCustomPopover] = useState<string>("");

  return (
    <div className="NavBarLogin">
      <div className="logoNav">
        <img className="logo" src={LogoNav} alt="" />
      </div>
      <div className="btnNav">
        <div className="text">{t("navbarLog.btn1")}</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">{t("navbarLog.btn2")}</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">{t("navbarLog.btn3")}</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">{t("navbarLog.btn4")}</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="text">{t("navbarLog.btn5")}</div>
        <i className="arrow down"></i>
      </div>
      <div className="btnNav">
        <div className="btnPlus">+</div>
      </div>
      <div className="search"></div>
      <div
        className="bellDiv"
        onClick={() => {
          setCustomPopover(
            customPopover === "notification" ? "" : "notification"
          );
        }}
      >
        <img src={bellImg} alt="" className="bellImg" />
      </div>
      <div
        className="questionDiv"
        onClick={() => {
          setCustomPopover(customPopover === "question" ? "" : "question");
        }}
        
      >
        <img src={questionImg} alt="" className="questionImg" />
      </div>
      <div
        className="userDiv"
        onClick={() => {
          setCustomPopover(customPopover === "user" ? "" : "user");
        }}
      >
        <img src={userImg} alt="" className="userImg" />
      </div>
      <div onClick={logoutBtn} className="logoutBtn">
        <img src={logoutImg} alt="" className="logoutImg" />
      </div>
      <div className="language-switch">
        <label className="language-switch">
          <input
            type="checkbox"
            id="toggle-lang"
            onChange={(e) => {
              const newLanguage = e.target.checked ? "ro" : "en";
              i18n.changeLanguage(newLanguage);
            }}
          />
          <span className="slider">
            <span className="label-on">Ro</span>
            <span className="label-off">En</span>
          </span>
        </label>
      </div>
      {customPopover === "user" && <UserProfilePopover />}
      {customPopover === "question" && <QuestionPopover />}
      {customPopover === "notification" && <NotificationPopover />}
    </div>
  );
  ``;
};

export default NavBarLog;
