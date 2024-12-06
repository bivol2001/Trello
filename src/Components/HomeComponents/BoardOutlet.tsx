import React from "react";
import star from "../../images/star.png";
import group from "../../images/people (2).png";
import "../../StyleCss/BoardPanelsworkspaces.css";

const BoardOutlet = () => {
  return (
    <div>
      <div className="board-container-workspaces">
        <div className="board-container-side-left">
          <div className="board-container-side-left-text">
            <span>
              <h3>Workspaces</h3>
            </span>
            <span>
              <p>Boards</p>
            </span>
            <span>
              <p>Memebers</p>
            </span>
            <span>
              <p>Workspaces settings</p>
            </span>
          </div>
          <hr />
          <div className="board-container-side-left-text">
            <span>
              <h3>Workspaces views</h3>
            </span>
            <span>
              <p>Table</p>
            </span>
            <span>
              <p>Calendar</p>
            </span>
          </div>
        </div>
        <div className="board-container-central">
          <div className="board-container-navbar">
            <div className="board-container-navbar-group1">
              <h1>My board Trello</h1>
              <span>
                <img src={star} alt="" className="img" />{" "}
              </span>
              <span>
                <img src={group} alt="" className="img" />{" "}
              </span>
              <span>
                <h4>Board</h4>
              </span>
              <span>
                <i className="arrow-navbar down"></i>
              </span>
            </div>
            <div className="board-container-navbar-group2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOutlet;
