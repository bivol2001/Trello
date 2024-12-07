import React from "react";

const PanelCardsBoards = () => {
    return (
      <div className="panel-cards">
        <div className="panel-card">
          <span className="panel-card-text">To do</span>
        </div>
        <div className="panel-card">
          <span className="panel-card-text">In Progress</span>
        </div>
        <div className="panel-card">
          <span className="panel-card-text">Done</span>
        </div>
      </div>
    );
}

export default PanelCardsBoards;