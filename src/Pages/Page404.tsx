import React from "react";
import Navbar from "../Components/HomeComponents/NavBar";
import Firstimg from "../../src/images/1.png";
import Secondimg from "../../src/images/2.png";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div className="body2404">
      <Navbar />
      <div className="body1404">
        <div className="DivFirstimg">
          <img src={Firstimg} alt="" className="firstImg" />
        </div>
        <div className="DivSecondimg">
          <img src={Secondimg} alt="" className="secondImg" />
          <p className="text404">We couldn't find what you're looking for.</p>
          <Link to="/" className="btntohome">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page404;
