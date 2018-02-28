var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: {
    type: string,
    required: 'Name cannot be blank.'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: date,
    default: Date.now
  }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
