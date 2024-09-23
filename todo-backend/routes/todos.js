// routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// @route    GET /api/todos
// @desc     Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET /api/todos/:id
// @desc     Get todo by id.
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST /api/todos
// @desc     Create a new todo
router.post('/', async (req, res) => {
  try {
    // const { title, description, completed, priority, dueDate } = req.body;
    const { title } = req.body;
    const newTodo = new Todo({
      // title, description, completed, priority, dueDate
      title
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE /api/todos/:id
// @desc     Delete a todo
router.delete('/:id', async (req, res) => {
  console.log('ID:', req.params.id);

  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    await todo.deleteOne();
    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error('Error deleting todo:', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
