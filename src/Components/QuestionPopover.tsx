import React from "react";
import img from "../images/1.png";
import { useTranslation } from "react-i18next";


const QuestionPopover = () => {
  const { t, i18n } = useTranslation();
  const constante = [
    t("questionPopover.text3"),
    t("questionPopover.text4"),
    t("questionPopover.text5"),
    t("questionPopover.text6"),
    t("questionPopover.text7"),
    t("questionPopover.text8"),
    
  ];
  return (
    <div className="question-popover-container">
      <div className="img-question-popover">
        <img src={img} alt="" className="img-question" />
        <h3>{t("questionPopover.text1")}</h3>
        <div className="get-text-question">{t("questionPopover.text2")}</div>
        <hr />
      </div>
      <div className="constante-question-popover">
        {constante.map((el, index) => {
          return <div key={index}>{el}</div>;
        })}
      </div>
    </div>
  );
};

export default QuestionPopover;
