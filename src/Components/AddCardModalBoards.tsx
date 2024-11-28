import React from "react";
import { Modal } from "react-bootstrap";

const AddCardModalBoards = ({ open, closefn }) => {
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
      <div>Modal</div>
    </Modal>
  );
};

export default AddCardModalBoards;
