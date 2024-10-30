import React, { useState } from "react";
import ModalVideo from "./ModalVideo";
import ComponentsEmail from "./ComponentsEmail";

const RegSection = () => {
  const [videoPopover, setVideoPopover] = useState<boolean>(false);

  return (
    <div className="regSect1">
      {videoPopover && (
        <ModalVideo setVideoPopover={setVideoPopover}></ModalVideo>
      )}
      <ComponentsEmail setVideoPopover={setVideoPopover} />
    </div>
  );
};

export default RegSection;
