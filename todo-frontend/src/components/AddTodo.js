import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

   // handlers for the form submission event
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent submission if title is empty

    try {
      const newTodo = {
        title:title
      };

      onAdd(newTodo);
      setTitle("");

    } catch (err) {
      console.error(err);
    }
  };

  // handlers for the keydown events on add tasks
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
          onKeyDown={handleKeyDown}
          placeholder="Add a task"
        />
        <Button type='submit' variant='success'>
          <FaPlusCircle />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default AddTodo;
