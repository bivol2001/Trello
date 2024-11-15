import React, { useRef, useState } from "react";
import SiteLogo from "../../../src/images/Brown Simple Elegant Minimalist Digital Crafts Etsy Shop Icon.png";
import { useNavigate } from "react-router-dom";
import NavBarPopover from "./NavBarPopover";
import {
  dataFeaturesPop,
  dataPlansPop,
  dataSolutionsPop,
  dataPricingsPop,
  dataResourcesPop,
} from "../../consts/PopoverData";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const [isPopover, setIsPopover] = useState<string>("");

  const { t, i18n } = useTranslation();

  const div = document.querySelector(".NavBarDiv");

  const div2 = useRef(null);

  console.log(div, div2.current);

  return (
    <div className="NavBarContainer">
      <div className="NavBarDiv" ref={div2}>
        <div
          className="divLogo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={SiteLogo} alt="Logo" className="logo" />
        </div>
        <div className="optionNav">
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Features" ? "" : "Features");
            }}
          >
            {t("navbar.btn1")}
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Solution" ? "" : "Solution");
            }}
          >
            {t("navbar.btn2")}
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Pricings" ? "" : "Pricings");
            }}
          >
            {t("navbar.btn3")}
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Resources" ? "" : "Resources");
            }}
          >
            {t("navbar.btn4")}
          </div>
        </div>
        <div className="userNav">
          <div className="optBtnNav" onClick={() => navigate("login")}>
            {t("navbar.login")}
          </div>
          <div
            className="regBtn"
            onClick={() => {
              navigate("register");
            }}
          >
            {t("navbar.btn5")}
          </div>
        </div>

        <div>
          <button
            className={i18n.language === "en" ? "active-language" : ""}
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </button>
          <button
            className={i18n.language === "ro" ? "active-language" : ""}
            onClick={() => {
              i18n.changeLanguage("ro");
            }}
          >
            RO
          </button>
        </div>
      </div>

      {isPopover === "Features" && <NavBarPopover cardData={dataFeaturesPop} />}
      {isPopover === "Solution" && (
        <NavBarPopover cardData={dataSolutionsPop} />
      )}
      {isPopover === "Plans" && <NavBarPopover cardData={dataPlansPop} />}
      {isPopover === "Pricings" && <NavBarPopover cardData={dataPricingsPop} />}
      {isPopover === "Resources" && (
        <NavBarPopover cardData={dataResourcesPop} />
      )}
    </div>
  );
};

export default Navbar;
