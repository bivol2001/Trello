import React from "react";



const WorkspacesCard = ({card}) => {
    return (
      <div className="workspace-card-container">
        <img src={card.img} alt="" className="card-icon" />
        <span className="card-title">{card.title}</span>
        <span className="card-description">{card.description}</span>
      </div>
    );
}

export default WorkspacesCard;