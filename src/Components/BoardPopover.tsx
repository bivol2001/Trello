import { url } from "inspector";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const BoardPopover = () => {
  const [openUrl, setOpenUrl] = useState<string>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const constante: any = [
    {
      name: t("boardsList.text5"),
      url: "panel",
    },
    {
      name: t("boardsList.text6"),
      url: "/login",
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

  const closeUrl = (url: string) => {
    openUrl !== url
      ? (setOpenUrl(url), navigate(`${url}`))
      : (setOpenUrl("/boards"), navigate("/boards"));
  };

  return (
    <div className="side-bar-list">
      {constante.map((el, index) => {
        return (
          <div key={index}>
            <p
              onClick={() => {
                closeUrl(el.url);
              }}
            >
              {el.name || ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BoardPopover;
