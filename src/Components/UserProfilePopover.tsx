import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { getUser } from "../api/request";
import { UserDto } from "src/api/api/api/data-contracts";
import Photo from "../images/IMG_8495.jpg"
const UserProfilePopover = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    getUser().then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });
  }, []);
  const constante: any = [
    {
      name: t("userProfilePopover.text1"),
      url: "",
    },
    {
      name: t("userProfilePopover.text2"),
      url: "",
    },
    {
      name: t("userProfilePopover.text3"),
      url: "",
    },
    {
      name: t("userProfilePopover.text4"),
      url: "",
    },
    {
      name: t("userProfilePopover.text5"),
      url: "",
    },
    {
      name: t("userProfilePopover.text6"),
      url: "",
    },
    {
      name: t("userProfilePopover.text7"),
      url: "",
    },
    {
      name: t("userProfilePopover.text8"),
      url: "",
    },
    {
      name: t("userProfilePopover.text9"),
      url: "",
    },
    {
      name: t("userProfilePopover.text10"),
      url: "",
    },
    {
      name: t("userProfilePopover.text11"),
      url: "",
    },
    {
      name: t("userProfilePopover.text12"),
      url: "",
    },
    {
      name: t("userProfilePopover.text13"),
      url: "/login",
    },
  ];

  return (
    <div className="user-profile-popover-container">
      <div className="user-profile">
        <img src={Photo} alt="" className="user-image" />
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
              navigate(el.url || "/boards");
            }}
          >
            {el.name || ""}
          </div>
        );
      })}
    </div>
  );
};

export default UserProfilePopover;
