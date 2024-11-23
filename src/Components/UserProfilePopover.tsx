import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { getUser } from "../api/request";
import { UserDto } from "src/api/api/api/data-contracts";


const UserProfilePopover = () => {
  const { t, i18n } = useTranslation();
  const navigate =useNavigate()
  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  }
  const [userData, setUserData] = useState<any>()
  useEffect(() => {
    getUser().then((res) => {
      setUserData(res.data)
      console.log(res.data)
    })
  },[])
  console.log(userData);
  const constante:any = [
    {
      name: t("userProfilePopover.text1"),
      url: "/login",
      
    },
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
            onClick={() => {
              navigate(el.url||"/boards")
            }}
          >
            {el.name || "ion"}
          </div>
        );
      })}
    </div>
  );
};

export default UserProfilePopover;
