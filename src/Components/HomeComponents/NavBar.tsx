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

const Navbar = () => {
  const navigate = useNavigate();
  const [isPopover, setIsPopover] = useState<string>("");
  console.log(isPopover)
  return (
    <div className="NavBarContainer">
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
            Solution
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Plans" ? "" : "Plans");
            }}
          >
            Plans
          </div>
          <div
            className="optBtnNav"
            onClick={() => {
              setIsPopover(isPopover === "Pricings" ? "":"Pricings");
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
          <div className="optBtnNav">Log in</div>
          <div className="regBtn">Registration</div>
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
