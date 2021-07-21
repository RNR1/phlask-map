import React from "react";
import { Modal, Form } from "react-bootstrap";
import SharedFormFields from "./SharedFormFields";

function AddBathroom({ prev, next }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Bathroom</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={e => {
            e.preventDefault();
            console.log("boop");
          }}
        >
          <SharedFormFields />
        </Form>
      </Modal.Body>

      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </>
  );
}

export default AddBathroom;
