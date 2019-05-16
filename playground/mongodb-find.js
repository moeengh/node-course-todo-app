// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

// db.collection('Todos').find({
//   _id: new ObjectId ("5cdd1c67ad145c5fc9e9f953")
//   }).toArray().then((docs) => {
//   console.log('todos');
//   console.log(JSON.stringify(docs, undefined, 2))
// }, (err) => {
//   if (err) console.log('Unable to fetch todos', err);
// })

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// })

db.collection('Users').find({name:'Moeen Ghorabian'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch Users', err);
})
  // client.close();
});
