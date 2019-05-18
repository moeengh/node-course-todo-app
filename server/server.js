var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text:{
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt:{
    type : Number
  }
});

// var newTodo = new Todo({
//   text: 'Cool dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log("Saved to do", doc)
// }, (e) => {
//   console.log('Unable to save Todo')
// });

var myTodo = new Todo({
  text: 'Watch some videos',
  completed: true,
  completedAt:18
});

myTodo.save().then((doc) => {
  console.log('Saved new todo', doc)
}, (e) => {
  console.log('Unabale to dave Todo')
});
