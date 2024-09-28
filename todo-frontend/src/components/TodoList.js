import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <ListGroup>
      {todos.map((todo, index) => (
        <TodoItem key={todo._id || index} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ListGroup>
  );
}

export default TodoList;
