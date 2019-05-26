const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5cea54128f8a7f0e849dd9e2';
if(!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if (todos.length == 0) {
//     return console.log('No todo was found matching the citeria')
//   }
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('No todo was found matching the citeria');
//   }
//   console.log('Todo', todo) ;
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e)) ;

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User does not exist');
  }
  console.log(JSON.stringify(user, undefined, 2));
  }, (e) => {console.log(e)});
