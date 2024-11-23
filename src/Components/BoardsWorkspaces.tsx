import React from "react";

const BoardsWorkspaces = () => {
  return (
    <div className="board-workspace-container">
      <h1 className="">YOUR WORKSPACES</h1>
      <div className="board-workspace-info-container">
        <span>Trello Workspaces</span>
        <div className="trello-workspaces-items">
          <span>Boards</span>
          <span>Views</span>
          <span>Members</span>
          <span>Settings</span>
          <span>Upgrade</span>
        </div>
      </div>
      <div className="workspace-cards-container">
        <div className="workspace-card-container">
          <img src="" alt="" className="card-icon" />
          <span className="card-title">Lorem, ipsum dolor.</span>
                  <span className="card-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quas.
          </span>
        </div>
        <div className="workspace-card-container"></div>
      </div>
    </div>
  );
};

export default BoardsWorkspaces;
