import React, { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";

const EditCardModalBoards = ({ open, closefn,id,updateCard }) => {
  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [descriptionUpdate, setDescriptionUpdate] = useState<string>("");

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
            <span>Change </span>
          </div>
          <span className="modal-button-x" onClick={() => closefn(false)}>
            X
          </span>
        </div>
        <div>
          <p>Card Title</p>
          <input
            type="text"
            placeholder="Title"
            className="input-modal"
            value={titleUpdate}
            onChange={(e) => {
              setTitleUpdate(e.target.value);
            }}
          />
          <p>Card description</p>
          <input
            type="text"
            placeholder="Description"
            className="input-modal"
            value={descriptionUpdate}
            onChange={(e) => {
              setDescriptionUpdate(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={() => {
            closefn(false)
            updateCard(id, titleUpdate, descriptionUpdate, false);
          }}
            className="modal-button-start"
            disabled={!titleUpdate.trim() || !descriptionUpdate.trim()}
          >
            Change card
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditCardModalBoards;
