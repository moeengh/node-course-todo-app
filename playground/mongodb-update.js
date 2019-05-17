// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectId("5cde79adad145c5fc9ea02e6")
// },{
//     $set : {
//     completed : true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result)
//   });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectId("5cdd1a299fe7e30ef002b456")
}, {
  $set:{
    name:"Moeen"
  }, $inc:{
    age: 1
  }
}, {
  returnOriginal : false
}).then((result) => {
  console.log(result)
});
  // client.close();
});
