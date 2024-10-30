import React from "react";
import myVideo from "../../images/Wallem - Харизма.mp4";

interface ModalVideoprops {
  setVideoPopover: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalVideo = ({ setVideoPopover }: ModalVideoprops) => {
  return (
    <div className="videoPopoverDiv">
      <div
        className="fundalVideo"
        onClick={() => {
          setVideoPopover(false);
        }}
      ></div>
      <div className="videobtn">
        <video
          src={myVideo}
          typeof="vide/mp4"
          width="1600px"
          height="800px"
          controls
          className="video"
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
    </div>
  );
};

export default ModalVideo;
