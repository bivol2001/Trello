import React from "react";
import "./../StyleCss/boardPage.css"

const Boards = () => {
  return (
    <div className="home-container">
      <div className="home-sticky-container">
        <div className="left-sidebar">
          <div>
            <div>
              <ul>
                <div>Boards</div>
                <div>Templates</div>
                <div>Home</div>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <div>Workspaces</div>
              <li>
                <a href=""></a>
                <ul>
                  <li>Boards</li>
                  <li>Highlights</li>
                  <li>Views</li>
                  <li>Members</li>
                  <li>Settings</li>
                </ul>
                <div>
                  <div>Upgrade this workspace</div>
                  <div>
                    Get unlimited boards, advanced automation, and more.
                  </div>
                  <button>Update</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="all-boards">
          <div className="content-all-boards">
            <div>
              <div>
                <div>
                  <div>
                    <p>Most popular templates</p>
                  </div>
                  <button>X</button>
                </div>
                <span>
                  <h2>
                    Get going faster with a template from the Trello community
                    or
                  </h2>
                  <span>
                    <div>
                      <div>
                        container-list
                        <span></span>
                        <span></span>
                        <div>
                          <div className="list">
                            <div>choose a category</div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </span>
                <div className="templates-container">
                  <a href="">
                    <span></span>
                    <div>
                      <div className="template-badge"></div>
                      <h1>Project Management</h1>
                    </div>
                  </a>
                  <a href="">
                    <span></span>
                    <div>
                      <div className="template-badge"></div>
                      <h1>Kanban Template</h1>
                    </div>
                  </a>
                  <a href="">
                    <span></span>
                    <div>
                      <div className="template-badge"></div>
                      <h1>Simple Project Board</h1>
                    </div>
                  </a>
                  <a href="">
                    <span></span>
                    <div>
                      <div className="template-badge"></div>
                      <h1>Remote Team Hub</h1>
                    </div>
                  </a>
                </div>
                <p>
                  <a href="/templates">Browse the full template gallery</a>
                </p>
              </div>
            </div>
            <div>
              <div>
                <div></div>
                <h3>Recently viewed</h3>
              </div>
              <div>
                <ul>
                  <li>
                    <a className="board-title" href="">
                      <span className="title-fade"></span>
                      <div>
                        <div>
                          <span>Templates</span>
                        </div>
                        <div>
                          <div className="remote-class-template">
                            Remote Templates
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="board-title" href="">
                      <span className="title-fade"></span>
                      <div>
                        <div>
                          <span>Templates</span>
                        </div>
                        <div>
                          <div className="project-management">
                            Project Management
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="board-title" href="">
                      <span className="title-fade"></span>
                      <div>
                        <div>
                          <span>Templates</span>
                        </div>
                        <div>
                          <div className="my-trello-board">
                            My Trellor Board
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
                      <div>
                          <h3>YOUR WORKSPACES</h3>
                          <div>
                              <div className="board-section-header">
                                  <div></div>
                                  <h3>Trello Workspace</h3>
                              </div>
                              <div>
                                  <a className="board-space-option" href="">
                                      
                                  <span className="option-name">
                                      <span>Boards</span>
                                  </span>
                                  </a>
                                  <a className="board-space-option" href="">
                                      
                                  <span className="option-name">
                                      <span>Views</span>
                                  </span>
                                  </a>
                                  <a className="board-space-option" href="">
                                      
                                  <span className="option-name">
                                      <span>Member</span>
                                  </span>
                                  </a>
                                  <a className="board-space-option" href="">
                                      
                                  <span className="option-name">
                                      <span>Settings</span>
                                  </span>
                                  </a>
                                  <div>
                                      <button>
                                          <div>Upgrade</div>
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <ul>
                                  <li>
                                      <a href=""></a>
                                      <div>
                                          <div>
                                              <div>My Trello</div>
                                          </div>
                                      </div>
                                  </li>
                                  <li>
                                      <div>
                                          <p>
                                              <span>Create a new board</span>
                                          </p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <button className="close-all-boards">View all closed boards</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
