import { useState } from "react";
import SiteLogo from "../../../src/images/Brown Simple Elegant Minimalist Digital Crafts Etsy Shop Icon.png";
import { useNavigate } from "react-router-dom";
import { iconStar } from "../../consts/icons";
const Navbar = () => {
  const navigate = useNavigate();
  const [isPopover, setIsPopover] = useState<boolean>(false);

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
              setIsPopover(!isPopover);
            }}
          >
            Features
          </div>
          <div className="optBtnNav">Solution</div>
          <div className="optBtnNav">Plans</div>
          <div className="optBtnNav">Pricing</div>
          <div className="optBtnNav">Resources</div>
        </div>
        <div className="userNav">
          <div className="optBtnNav">Log in</div>
          <div className="regBtn">Registration</div>
        </div>
      </div>

      {isPopover && (
        <div className="NavBarPopover">
          <div className="divCard">
            <div className="cardline">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                corporis.
              </p>
              <hr />
            </div>
            <div className="card">
              {iconStar()} <p className="titleCard">Views</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card">
              {iconStar()} <p className="titleCard">Automation</p>
              <p className="text">
                Delectus architecto corporis quis veniam quam ullam vel!
              </p>
            </div>
            <div className="card">
              {iconStar()} <p className="titleCard">Power-ups</p>
              <p className="text">
                Eligendi corrupti nam aspernatur qui minus dicta temporibus?
              </p>
            </div>
            <div className="card">
              {iconStar()} <p className="titleCard">Templates</p>
              <p className="text">
                Error, provident quibusdam veniam ullam tempore veritatis
                distinctio.
              </p>
            </div>
            <div className="card">
              {iconStar()} <p className="titleCard">Integration</p>
              <p className="text">
                Eaque laudantium deleniti autem, doloribus nulla voluptatibus
                quidem.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
