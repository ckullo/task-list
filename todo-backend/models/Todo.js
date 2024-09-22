// models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority:{
    type: String, enum: ['Low', 'Medium', 'High'], 
    default: 'Medium' 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  dueDate: { 
    type: Date, 
    default: null }
});

module.exports = mongoose.model('Todo', TodoSchema);
