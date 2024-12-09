import React, { useState } from "react";
import CardEditPopoverWorkspace from "./CardEditPopoverWorkspace";
import { CardInterface } from "./BoardsWorkspaces";

interface WorkspacesCardProps {
  card: CardInterface;
  updateCard: (id: number,title:string, description:string) => void;
  deleteCard: (id: number) => void;
}

const WorkspacesCard = ({ card, deleteCard ,updateCard}: WorkspacesCardProps) => {
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
      {isHover && <CardEditPopoverWorkspace isLiked={card.isLiked} updateCard={updateCard} deleteCard={deleteCard} id={card.id} />}
      <img src={card.img} alt="" className="card-icon" />
      <span className="card-title">{card.title}</span>
      <span className="card-description">{card.description}</span>
    </div>
  );
};

export default WorkspacesCard;
