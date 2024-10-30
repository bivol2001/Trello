import React from "react";
import { GoPlay } from "react-icons/go";
import ImgFirst from "../../images/TrelloUICollage_4x.webp";

interface ComponentsEmailProps {
  setVideoPopover: React.Dispatch<React.SetStateAction<boolean>>;
}

const ComponentsEmail = ({ setVideoPopover }: ComponentsEmailProps) => {
  return (
    <div className="regSect2">
      <div className="EmailReg">
        <h1 className="h1EmailReg">
          Trello brings all your tasks, teammates, and tools together
        </h1>
        <p className="h5EmailReg">
          Keep everything in the same place—even if your team isn’t.
        </p>
        <div className="emailbtn">
          <input type="text" className="InputReg" placeholder="Email" />
          <a href="" className="regBtn">
            Sign up - it’s free!
          </a>
        </div>
        <div
          className="divWatch"
          onClick={() => {
            setVideoPopover(true);
          }}
        >
          <div className="WatchVideoText">Watch video</div>
          <div className="WatchVideoIcon">
            <GoPlay />
          </div>
        </div>
      </div>
      <div className="ImgDiv">
        <img src={ImgFirst} alt="" className="ImgReg" />
      </div>
    </div>
  );
};

export default ComponentsEmail;
