import React from "react";
import { useTranslation } from "react-i18next";

const BoardPopover = () => {
  const { t, i18n } = useTranslation();
  const constante = [
    t("boardsList.text5"),
    t("boardsList.text6"),
    t("boardsList.text7"),
    t("boardsList.text8"),
    t("boardsList.text9"),
  ];

  return (
    <div className="side-bar-list">
      {constante.map((el, index) => {
        return (
          <div key={index}>
              <p>{el}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BoardPopover;
