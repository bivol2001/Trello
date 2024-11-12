import React, { useState } from "react";
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
  console.log(isPopover)
  const {t,i18n} = useTranslation()

  return (
    <div className="NavBarContainer">
      <h1>
        {t("navbar")}
      </h1>
      <div className="NavBarDiv">
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
            Features
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Solution" ? "" : "Solution");
            }}
          >
            Plans
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Pricings" ? "" : "Pricings");
            }}
          >
            Pricing
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Resources" ? "" : "Resources");
            }}
          >
            Resources
          </div>
        </div>
        <div className="userNav">
          <div className="optBtnNav" onClick={() => navigate("login")}>
            Log in
          </div>
          <div
            className="regBtn"
            onClick={() => {
              navigate("register");
            }}
          >
            Registration
          </div>
        </div>
        <div>
          <button className="active-language">
            EN</button>
          <button>
            RO</button>
        </div>
        <div>
        <button className="active-language" onClick={()=>{
          i18n.changeLanguage("en")
        }}>
          EN
        </button>
        <button onClick={()=>{
          i18n.changeLanguage("ro")
        }}>
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
