import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

function TodoList({ todos, onDelete }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
}

export default TodoList;
