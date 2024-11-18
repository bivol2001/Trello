import React from "react";
import "./../StyleCss/boardPage.css";

const Boards = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebar-list">
          <ul>
            <li>Boards</li>
            <li>Templates</li>
            <li>Home</li>
          </ul>
          <hr />
        </div>
        <p>Workspaces</p>
        <div className="side-list-down">
          <ul>
            <li>Boards</li>
            <li>Hightlights</li>
            <li>Views</li>
            <li>Members</li>
            <li>Settings</li>
          </ul>
        </div>
      </aside>
      <main className="board-container">
        <div className="recently-viewed">Recently viewed</div>
        <div className="cards">
          <div className="trello-cards">
            <div>My Trello board</div>
          </div>
          <div className="trello-cards">
            <div>My Trello board</div>
          </div>
          <div className="trello-cards">
            <div>My Trello board</div>
          </div>
        </div>
        <h1 className="your-work">YOUR WORKSPACES</h1>
        <div className="trello-workspaces">
          Trello Workspaces
          <div className="trello-workspaces-items">
            <ul>
              <span>Boards</span>
              <span>Views</span>
              <span>Members</span>
              <span>Settings</span>
              <span>Upgrade</span>
            </ul>
          </div>
        </div>
        <div className="cards">
          <div className="trello-cards">
            <div>My Trello board</div>
          </div>
          <div className="trello-cards-new">
            <div>Create new board</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Boards;
