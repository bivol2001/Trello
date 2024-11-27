import React from "react";
import userImg from "../images/user.png";


const NotificationPopover = () => {
    return (
        <div className="notification-popover-container" >
      <div className="first-div-notification">
        <h5>Notification</h5>
        <p>Only show unread</p>
      </div>
      <div className="notification-line">
        <hr />
      </div>
      <img src={userImg} alt="" className="img-notification-popover" />
      <h4>No unread notification</h4>
    </div>
  );
};

export default NotificationPopover;
