import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Container, Row, Col, Card, Alert, Spinner } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState("success");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        setMessage("Failed to load to-dos");
        setVariant("danger");
      });
  }, []);

  const addTodo = (newTodo) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/todos", newTodo)
      .then((response) => {
        setTodos([...todos, response.data]);
        setMessage("Todo added successfully");
        setVariant("success");
      })
      .catch(() => {
        setMessage("Failed to add todo");
        setVariant("danger");
      })
      .finally(() => setLoading(false));
  };

  const updateTodo = (id, title) => {
    console.log("Updating todo: " + id);
    axios
      .patch(`http://localhost:5000/api/todos/${id}`, title)
      .then((response) => {
        const updatedTodos = todos.map((t) => (t._id === id ? response.data : t));
        console.log(response.data);
        setTodos(updatedTodos);
        setMessage("Todo updated successfully");
        setVariant("success");
        
      })
      .catch((err) => {
        console.log("Failed to update todo:", err);
        setMessage("Failed to update todo");
        setVariant("danger");
      });
  };

  const deleteTodo = (id) => {
    console.log("ID:", id);
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
        setMessage("Todo deleted successfully");
        setVariant("success");
      })
      .catch(() => {
        setMessage("Failed to delete todo");
        setVariant("danger");
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h1 className="text-center">Todo List App</h1>

              {loading && <Spinner animation="border" className="mb-3" />}

              {message && (
                <Alert
                  variant={variant}
                  onClose={() => setMessage(null)}
                  dismissible
                >
                  {message}
                </Alert>
              )}

              <AddTodo onAdd={addTodo} />
              <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
