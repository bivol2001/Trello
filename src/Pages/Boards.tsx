import React, { useState } from "react";
import "./../StyleCss/boardPage.css";
import NavBarLog from "./Page After log/NavBarLog";
import TemplatePopover from "../Components/TemplatePopover";
import { useTranslation } from "react-i18next";

const Boards = () => {
  const { t, i18n } = useTranslation();
  const [templatePopover, useIsTemplatePopover] = useState<boolean>(false);
  return (
    <div className="page-container">
      <NavBarLog />
      <div className="container">
        <aside className="sidebar">
          <div className="sidebar-list">
            <ul>
              <li>{t("boardsList.text1")}</li>
              <li
                onClick={() => {
                  useIsTemplatePopover(!templatePopover);
                }}
              >
                {t("boardsList.text2")}
              </li>
              {templatePopover && <TemplatePopover />}
              <li>{t("boardsList.text3")}</li>
            </ul>
            <hr />
          </div>
          <p>{t("boardsList.text4")}</p>
          <div className="side-list-down">
            <ul>
              <li>{t("boardsList.text5")}</li>
              <li>{t("boardsList.text6")}</li>
              <li>{t("boardsList.text7")}</li>
              <li>{t("boardsList.text8")}</li>
              <li>{t("boardsList.text9")}</li>
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
    </div>
  );
};

export default Boards;
