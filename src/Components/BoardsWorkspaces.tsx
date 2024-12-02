import React, { useEffect, useState } from "react";
import userImg from "../images/1.png";
import WorkspacesCard from "./WorkspacesCard";
import AddCardModalBoards from "./AddCardModalBoards";

export interface CardInterface {
  img: string;
  title: string;
  description: string;
  isActive: boolean;
}

const workspacesUser: CardInterface[] = [
  {
    img: userImg,
    title: "New card1",
    description: "`zc`zc`zc``",
    isActive: false,
  },
  {
    img: "",
    title: "New card2",
    description: "lorem aretgre",
    isActive: true,
  },
];

const BoardsWorkspaces = () => {
  const [cards, setCards] = useState<CardInterface[]>(workspacesUser);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showActive, setShowActive] = useState<number>(0);
  const [filtredCards, setFiltredCards] = useState<CardInterface[]>(cards);

  useEffect(() => {
    if (showActive === 0) {
      setFiltredCards(cards);
    }
    if (showActive === 1) {
      setFiltredCards(
        cards.filter((e) => {
          return e.isActive === true;
        })
      );
    }
    if (showActive === -1) {
      setFiltredCards(
        cards.filter((e) => {
          return e.isActive === false;
        })
      );
    }
  }, [showActive, cards]);
  const createCard = () => {
    const newCard: CardInterface = {
      img: "",
      title: "Card3",
      description: "Card3",
      isActive: true,
    };
    setCards([newCard, ...cards]);
  };
  return (
    <div className="board-workspace-container">
      <h1 className="">YOUR WORKSPACES</h1>
      <div className="board-workspace-info-container">
        <span>Trello Workspaces</span>``
        <div className="trello-workspaces-items">
          <span
            onClick={() => {
              setShowActive(0);
            }}
          >
            All
          </span>
          <span
            onClick={() => {
              setShowActive(1);
            }}
          >
            Active
          </span>
          <span
            onClick={() => {
              setShowActive(-1);
            }}
          >
            Inactive
          </span>
        </div>
      </div>
      <div className="workspace-cards-container">
        {filtredCards.map((card) => {
          return <WorkspacesCard card={card} />;
        })}
        <div
          className="workspace-card-container"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Create new board
        </div>
      </div>
      <AddCardModalBoards
        open={openModal}
        cards={cards}
        setCards={setCards}
        closefn={setOpenModal}
      />
    </div>
  );
};

export default BoardsWorkspaces;
