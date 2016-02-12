var MongoClient = require('mongodb').MongoClient;
var db_url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

/*
Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

Using console.log, print the documents to stdout.
*/

MongoClient.connect(db_url, function (err, db) {
    if (err) throw err;
    var collection = db.collection('parrots');
    collection.find({
        age: { $gt: +age }
    },
    {
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function (err, docs) {
        if (err) throw err;
        console.log(docs);
        db.end();
    })
})