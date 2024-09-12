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
    res.status(500).send('Server Error');
  }
});

// @route    POST /api/todos
// @desc     Create a new todo
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
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
    console.error('Error deleteing todo:', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
