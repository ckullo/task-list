import React, { useState } from "react";
import { ListGroup, Button, Form, Modal } from "react-bootstrap";
import { FaRegTrashCan, FaFilePen } from "react-icons/fa6";

function TodoItem({ todo, onDelete, onUpdate }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = () => {
    onUpdate(todo._id, { title });
    handleClose();
  };

  const handleRadioChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <ListGroup.Item className="d-flex align-items-center">
        {/* <InputGroup> */}
        <Form.Check
          aria-label="mark as completed"
          onChange={handleRadioChange}
          className="p-2"
        />
        {/* <Form.Control type="text" value={todo.title} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }} /> */}
        <span className="p-2" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todo.title}</span>
        <div className="ms-auto">
          <Button variant="primary" onClick={handleShow} className="me-2">
            <FaFilePen />
          </Button>
          <Button variant="danger" onClick={() => onDelete(todo._id)}>
            <FaRegTrashCan />
          </Button>
        </div>
        {/* </InputGroup> */}
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
