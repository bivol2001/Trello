import React, { useState } from "react";

interface CardsPanelinterface {
  title: string;
  description: string;
}

const panelCards = [
  {
    title: "To do",
  },
  {
    title: "In Process",
  },
  {
    title: "Done",
  },
];

const PanelCardsBoards = () => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [inputText, setIsInputText] = useState("");
  const createCard = () => {
    <div className="panel-card-popover">
      <div>{inputText}</div>
    </div>;
  };
  return (
    <div className="panel-cards">
      {panelCards.map((card, index) => {
        return (
          <div className="panel-card">
            <span className="panel-card-text">{card.title}</span>
            
            {isInput && (
              <input
                value={inputText}
                onChange={(e) => {
                  setIsInputText(e.target.value);
                }}
                type="text"
                className="panel-card-input"
              />
            )}
            <div
              className="panel-card-button"
              onClick={() => {
                setIsInput(!isInput);
              }} onDoubleClick={() => {
                createCard()
              }}
            >
              Add Card
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PanelCardsBoards;
