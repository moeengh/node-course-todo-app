const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id:'5cee2d5ca7a02f127826118c'}).then((result) => {
  console.log(result);
});


Todo.findByIdAndRemove('5cee2d4fa7a02f127826118b').then((result) => {
  console.log(result);
})
