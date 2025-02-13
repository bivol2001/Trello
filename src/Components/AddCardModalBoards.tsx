import React, { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import img from "../images/DSC_3987.jpg";
import { CardInterface } from "./BoardsWorkspaces";

const AddCardModalBoards = ({ open, closefn, setCards, cards }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const createCard = () => {
    const newId=cards.length +1
    const newCard: CardInterface = {
      id:newId,
      img: "",
      title: title,
      description: description,
      isActive: false,
      isLiked:true,
    };
    setCards([newCard, ...cards]);
    setDescription("");
    setTitle("");
    closefn(false);
  };
  return (
    <Modal
      onHide={() => closefn(false)}
      show={open}
      style={{ borderRadius: "8px" }}
      centered
      backdrop={true}
      backdropClassName="bg-opacity-50t"
      contentClassName="border-0"
    >
      <div className="container-modal-content">
        <div className="create-div">
          <div className="modal-title">
            <span>Create board</span>
          </div>
          <span className="modal-button-x" onClick={() => closefn(false)}>
            X
          </span>
        </div>
        <div>
          
          <img src={img} alt="" className="modal-board-img" />
        </div>
        <div>
          <p>Board title</p>
          <input
            type="text"
            placeholder="Title"
            className="input-modal"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <p>Board Description</p>
          <input
            type="text"
            placeholder="Description"
            className="input-modal"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Background</p>
        </div>
        <div>
          <p>Visibility</p>
          <select name="" id="" className="select-modal">
            <option value="">Workspaces</option>
            <option value="">Basic</option>
            <option value="">Private</option>
          </select>
        </div>
        <div>
          <button
            className="modal-button-create"
            onClick={createCard}
            disabled={!title || !description.trim()}
          >
            Create
          </button>
        </div>
        <div>
          <div className="modal-button-start">Start with a template</div>
        </div>
        <div className="comment-modal">
          <p>
            By using images from Unsplash, you agree to their license and Terms
            of Service
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AddCardModalBoards;
