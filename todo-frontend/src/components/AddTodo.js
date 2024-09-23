import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaRegFile } from 'react-icons/fa6';
function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [priority, setPriority] = useState('');
  // const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent submission if title is empty
    // if (text) {
    //   onAdd(text);
    //   setText('');
    // }
    try {
      const newTodo = {
        title:title, 
        // description:"", 
        // completed: false, 
        // priority: "Medium", 
        // dueDate: dueDate
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
          placeholder="Enter a new task"
        />
        {/* <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <Form.Control
          as="select"
          value={priority}
          onChange={e => {
            console.log("e.target.value", e.target.value);
            setPriority(e.target.value);
          }}
        >
          <option>Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">medium</option>
          <option value="Low">Low</option>
        </Form.Control>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        /> */}
        {/* <Button type="submit" variant="primary">
          <FaRegFile />
        </Button> */}
      </InputGroup>
    </Form>
  );
}

export default AddTodo;
