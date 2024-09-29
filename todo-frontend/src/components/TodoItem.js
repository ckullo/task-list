import React, { useState } from "react";
import { ListGroup, Button, Form, Modal } from "react-bootstrap";
import { FaRegTrashCan, FaFilePen } from "react-icons/fa6";

function TodoItem({ todo, onDelete, onUpdate }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handlers for the form submission event
  const handleUpdate = () => {
    onUpdate(todo._id, { title });
    handleClose();
  };

  // handlers for the checkboxes tick events
  const handleRadioChange = () => {
    setIsCompleted(!isCompleted);
  };

  // handlers for the keydown events on add tasks
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <>
      <ListGroup.Item className="d-flex align-items-center">
        
        <Form.Check
          aria-label="mark as completed"
          onChange={handleRadioChange}
          className="p-2"
        />
        <span className="p-2" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todo.title}</span>
        <div className="ms-auto">
          <Button variant="primary" onClick={handleShow} className="me-2">
            <FaFilePen />
          </Button>
          <Button variant="danger" onClick={() => onDelete(todo._id)}>
            <FaRegTrashCan />
          </Button>
        </div>
        
      </ListGroup.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTodoTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoItem;
