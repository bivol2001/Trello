import React, { useState } from "react";
import userImg from "../images/1.png";
import WorkspacesCard from "./WorkspacesCard";
import AddCardModalBoards from "./AddCardModalBoards";

interface CardInterface {
  img: string,
  title:string,
  description:string,
}

const workspacesUser:CardInterface[] = [
  {
    img: userImg,
    title: "New card1",
    description: "`zc`zc`zc``",
  },
  {
    img: "",
    title: "New card2",
    description: "lorem aretgre",
  },
];



const BoardsWorkspaces = () => {
  const [cards, setCards] = useState<CardInterface[]>(workspacesUser)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const createCard = () => {
    const newCard:CardInterface = {
      img: "",
      title: "Card3",
      description: "Card3"
    }
    setCards([newCard,...cards])
  }
  return (
    <div className="board-workspace-container">
      <h1 className="">YOUR WORKSPACES</h1>
      <div className="board-workspace-info-container">
        <span>Trello Workspaces</span>``
        <div className="trello-workspaces-items">
          <span>Boards</span>
          <span>Views</span>
          <span>Members</span>
          <span>Settings</span>
          <span>Upgrade</span>
        </div>
      </div>
      <div className="workspace-cards-container">
        {cards.map((card) => {
          return (
           <WorkspacesCard card={card} />
          );
        })}
        <div className="workspace-card-container" onClick={()=>{setOpenModal(true)}}>Create new board</div>
      </div>
      <AddCardModalBoards open={openModal} closefn={setOpenModal} />
    </div>
  );
};

export default BoardsWorkspaces;
