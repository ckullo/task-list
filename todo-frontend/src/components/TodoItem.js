import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function TodoItem({ todo, onDelete }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{todo.text}</span>
      <Button variant="danger" onClick={() => onDelete(todo._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
}

export default TodoItem;
