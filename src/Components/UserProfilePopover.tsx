import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";


const UserProfilePopover = () => {
  const { t, i18n } = useTranslation();
  const navigate =useNavigate()
  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  }
  const constante = [
    t("userProfilePopover.text1"),
    t("userProfilePopover.text2"),
    t("userProfilePopover.text3"),
    t("userProfilePopover.text4"),
    t("userProfilePopover.text5"),
    t("userProfilePopover.text6"),
    t("userProfilePopover.text7"),
    t("userProfilePopover.text8"),
    t("userProfilePopover.text9"),
    t("userProfilePopover.text10"),
    t("userProfilePopover.text11"),
    t("userProfilePopover.text12"),
    t("userProfilePopover.text13"),
  ];

  return (
    <div className="user-profile-popover-container">
      <div className="user-profile">
        <img src="" alt="" className="user-image" />
        <div>
          <span className="user-info">Bivol Ion</span>
          <span className="user-info">bivolion06@ gmail.com</span>
        </div>
      </div>
      {constante.map((el, index) => {
        return (
          <div
            key={index}
            className="popover-card"
            onClick={el === t("userProfilePopover.text13")?logoutBtn:undefined}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default UserProfilePopover;
