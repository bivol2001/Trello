import React, { useState } from "react";
import CardEditPopoverWorkspace from "./CardEditPopoverWorkspace";
import { CardInterface } from "./BoardsWorkspaces";
import { useNavigate } from "react-router";

interface WorkspacesCardProps {
  card: CardInterface;
  updateCard: (id: number,title:string, description:string) => void;
  deleteCard: (id: number) => void;
}

const WorkspacesCard = ({ card, deleteCard ,updateCard}: WorkspacesCardProps) => {
  const [isHover, setIsHoveer] = useState(false);
  const navigate = useNavigate()

  return (
    <div
      className="workspace-card-container"
      onMouseEnter={() => {
        setIsHoveer(true);
      }}
      onMouseLeave={() => {
        setIsHoveer(false);
      }}
      onClick={() => {
        navigate("panel")
      }}
    >
      {isHover && <CardEditPopoverWorkspace updateCard={updateCard} deleteCard={deleteCard} id={card.id} isLiked={card.isLiked} />}
      <img src={card.img} alt="" className="card-icon" />
      <span className="card-title">{card.title}</span>
      <span className="card-description">{card.description}</span>
    </div>
  );
};

export default WorkspacesCard;
