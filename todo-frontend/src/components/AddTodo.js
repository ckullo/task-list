import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task"
        />
        <Button type="submit" variant="primary">
          Add Todo
        </Button>
      </InputGroup>
    </Form>
  );
}

export default AddTodo;
