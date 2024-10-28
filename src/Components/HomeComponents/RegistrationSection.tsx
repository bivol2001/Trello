
import React, { useState } from "react";
import ImgFirst from "../../images/TrelloUICollage_4x.webp";
import { GoPlay } from "react-icons/go";
import myVideo from "../../images/Wallem - Харизма.mp4";

const RegSection = () => {
  const [videoPopover, setVideoPopover] = useState<boolean>(false);

  return (
    <div className="regSect1">
      {videoPopover && (
        <div className="videoPopoverDiv">
          <video
            src={myVideo}
            typeof="vide/mp4"
            width="1600px"
            height="800px"
            controls
            className=""
          ></video>
          <div
            className="btnX"
            onClick={() => {
              setVideoPopover(false);
            }}
          >
            x
          </div>
        </div>
      )}
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
              setVideoPopover(!videoPopover);
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
    </div>
  );
};

export default RegSection;
