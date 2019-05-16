// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

// db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result) => {
//   console.log(result);
// });
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
//   console.log(result.result);
// });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

db.collection('Users').deleteMany({name: 'Moeen Ghorabian'}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndDelete({
  _id:new ObjectId("5cdd0f8166b4ac18a4274577")
}).then((result) => {
  console.log(result);
});

  // client.close();
});
