import React from "react";
import { useTranslation } from "react-i18next";


const TemplatePopover = () => {
  const { t, i18n } = useTranslation();
  const constante = [
    t("templatePopover.text1"),
    t("templatePopover.text2"),
    t("templatePopover.text3"),
    t("templatePopover.text4"),
    t("templatePopover.text5"),
    t("templatePopover.text6"),
    t("templatePopover.text7"),
    t("templatePopover.text8"),
    t("templatePopover.text9"),
    t("templatePopover.text10"),
    t("templatePopover.text11"),
    t("templatePopover.text12"),
    t("templatePopover.text13"),
    t("templatePopover.text14"),
  ];

    return (
      <div className="side-bar-list">
        {constante.map((el, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{el}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
};

export default TemplatePopover;
