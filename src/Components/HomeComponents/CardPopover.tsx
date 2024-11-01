import React from "react";
import { iconStar } from "../../consts/icons";

interface CardPopoverProps {
  title: string;
  description: string;
}

const CardPopover = ({ title, description }: CardPopoverProps) => {
  return (
    <div className="card">
      {iconStar()} <p className="titleCard"> {title}</p>
      <p className="text">{description}</p>
    </div>
  );
};

export default CardPopover;
