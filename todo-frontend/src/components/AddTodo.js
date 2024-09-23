import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent submission if title is empty

    try {
      const newTodo = {
        title:title, 

      };

      onAdd(newTodo);
      setTitle("");

    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a task"
        />
        
      </InputGroup>
    </Form>
  );
}

export default AddTodo;
