var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo'
var insert_value = {
       firstName: process.argv[2],
       lastName: process.argv[3]
   };

/*
You should connect to the database named learnyoumongo and insert
a document into the docs collection.
*/
MongoClient.connect(url, function (err, db) {
   if (err) throw err;
   db.collection('docs').insert(insert_value, function (err, data) {
       if (err) throw err;
       console.log(JSON.stringify(insert_value));
       db.close();
   });
});