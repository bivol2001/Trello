import React, { useState } from "react";
import CardEditPopoverWorkspace from "./CardEditPopoverWorkspace";

const WorkspacesCard = ({ card }) => {
  const [isHover, setIsHoveer] = useState(false);

  return (
    <div
      className="workspace-card-container"
      onMouseEnter={() => {
        setIsHoveer(true);
      }}
      onMouseLeave={() => {
        setIsHoveer(false);
      }}
    >
      {isHover && <CardEditPopoverWorkspace/>}
      <img src={card.img} alt="" className="card-icon" />
      <span className="card-title">{card.title}</span>
      <span className="card-description">{card.description}</span>
    </div>
  );
};

export default WorkspacesCard;
