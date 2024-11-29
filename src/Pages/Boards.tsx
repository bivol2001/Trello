import React, { useState } from "react";
import "./../StyleCss/boardPage.css";
import NavBarLog from "./Page After log/NavBarLog";
import TemplatePopover from "../Components/TemplatePopover";
import { useTranslation } from "react-i18next";
import BoardsWorkspaces from "../Components/BoardsWorkspaces";
import userImg from "../images/user.png";
import BoardPopover from "../Components/BoardPopover";

const Boards = () => {
  const { t, i18n } = useTranslation();
  const [templatePopover, useIsTemplatePopover] = useState<boolean>(false);
  const [boardPopover, useBoardPopoveer] = useState(false);

  return (
    <div className="page-container">
      <NavBarLog />
      <div className="container-page-board">
        <aside className="sidebar">
          <div className="sidebar-list">
            <div className="side-list-down">
              <div className="sidebar-list-div">
                <p className="sidebar-list-p">{t("boardsList.text1")}</p>
              </div>
              <div className="side-list-down">
                <div className="sidebar-list-div">
                  <p
                    className="sidebar-list-p"
                    onClick={() => {
                      useIsTemplatePopover(!templatePopover);
                    }}
                  >
                    {t("boardsList.text2")}
                  </p>
                </div>
              </div>
              {templatePopover && <TemplatePopover />}
              <div className="sidebar-list-div">
                <p className="sidebar-list-p">{t("boardsList.text3")}</p>
              </div>
            </div>
            <div className="sidebar-list-line">
              <hr />
            </div>
          </div>
          <div className="side-list-down">
            <p>{t("boardsList.text4")}</p>
            <div
              className="side-bar-list-board"
              onClick={() => {
                useBoardPopoveer(!boardPopover);
              }}
            >
              <img src={userImg} alt="" className="side-bar-list-board-img" />
              <p className="side-bar-list-board-text">Boards Panel Trello</p>
              <div
                className={boardPopover === false ? "arrow down" : "arrow up"}
              ></div>
            </div>
            {boardPopover && <BoardPopover />}
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
          <BoardsWorkspaces />
        </main>
      </div>
    </div>
  );
};

export default Boards;
