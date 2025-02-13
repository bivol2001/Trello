import React, { useState } from "react";
import Pen from "../images/Pen.png";
import FavoriteEmpty from "../images/star.png";
import FavoriteGold from "../images/star (1).png";
import EditCardModalBoards from "./EditCardModalBoards";
import trush from "../images/trush.png";

interface CardEditPopoverWorkspaceProps{
  id: number;
  updateCard: (id: number, title:string, description:string ,updateLike:boolean) => void;
  deleteCard: (id: number) => void;
  isLiked: boolean
}



const CardEditPopoverWorkspace = ({deleteCard,id,updateCard,isLiked}:CardEditPopoverWorkspaceProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)



  return (
    <div className="workspace-card-btn">
      <div>
        <span
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={Pen} alt="" className="workspace-card-btn-customize" />
        </span>
        <span>
          <img
            onClick={() => {
              // setIsFavorite(!isFavorite);
              updateCard(id,"","", true)
            }}
            src={isLiked ? FavoriteGold : FavoriteEmpty}
            alt=""
            className="workspace-card-btn-customize"
          />
        </span>
        <span>
          <img onClick={() => {
            deleteCard(id)
          }} src={trush} alt="" className="workspace-card-btn-customize" />
        </span>
      </div>
      <EditCardModalBoards id={id} updateCard={updateCard} open={openModal} closefn={setOpenModal} />
    </div>
  );
};

export default CardEditPopoverWorkspace;
