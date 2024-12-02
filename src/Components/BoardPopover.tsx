import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const BoardPopover = () => {
    const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const constante: any = [
    {
      name: t("boardsList.text5"),
      url: "/boards/panel",
    },
    {
      name: t("boardsList.text6"),
      url: "",
    },
    {
      name: t("boardsList.text7"),
      url: "",
    },
    {
      name: t("boardsList.text8"),
      url: "",
    },
    {
      name: t("boardsList.text9"),
      url: "",
    },
  ];

  return (
    <div className="side-bar-list">
      {constante.map((el, index) => {
        return (
          <div key={index}>
            <p onClick={()=>{navigate(el.url)}}>{el.name||""}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BoardPopover;
