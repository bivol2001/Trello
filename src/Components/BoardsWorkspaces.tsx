import React, { useEffect, useState } from "react";
import userImg from "../images/1.png";
import WorkspacesCard from "./WorkspacesCard";
import AddCardModalBoards from "./AddCardModalBoards";

export interface CardInterface {
  id: number;
  img: string;
  title: string;
  description: string;
  isActive: boolean;
  isLiked: boolean;
}

const workspacesUser: CardInterface[] = [
  {
    id: 1,
    img: userImg,
    title: "New card1",
    description: "`zc`zc`zc``",
    isActive: false,
    isLiked: false,
  },
  {
    id: 2,
    img: "",
    title: "New card2",
    description: "lorem aretgre",
    isActive: true,
    isLiked: false,
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

  const deleteCard = (id: number) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  const updateCard = (
    id: number,
    titleUpdate: string,
    descriptionUpdate: string,
    updateLike?:boolean,
  ) => {
    const editedCard = cards.find((card) => card.id === id);
    if (updateLike) {
            const newCard = {
              ...editedCard,
              isLiked: !editedCard.isLiked
            };

            const newCards = cards.map((card) => {
              if (card.id === newCard.id) {
                return newCard;
              } else {
                return card;
              }
            });
            setCards(newCards);
    } else {
      
    
      const newCard = {
        ...editedCard,
        title: titleUpdate ? titleUpdate : editedCard.title,
        description: descriptionUpdate
          ? descriptionUpdate
          : editedCard.description,
      };

      const newCards = cards.map((card) => {
        if (card.id === newCard.id) {
          return newCard;
        } else {
          return card;
        }
      });
      setCards(newCards);
    }

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
          return (
            <WorkspacesCard
              updateCard={updateCard}
              card={card}
              deleteCard={deleteCard}
            />
          );
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
