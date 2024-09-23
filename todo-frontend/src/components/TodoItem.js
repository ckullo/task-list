import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FaRegTrashCan } from "react-icons/fa6";

function TodoItem({ todo, onDelete }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <span>{todo.description}</span>
      <span>{todo.priority}</span>
      <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
      <Button variant="danger" onClick={() => onDelete(todo._id)}>
        <FaRegTrashCan />
      </Button>
    </ListGroup.Item>
  );
}

export default TodoItem;
