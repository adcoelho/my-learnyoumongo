var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

/*
Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.
Using console.log, print the documents to stdout.
*/
MongoClient.connect(url, function (err, db) {
    if (err) return err;
    var collection = db.collection('parrots');
    collection.find({
        age: { $gt: +age }
    }).toArray(function (err, doc) {
        if (err) throw err;
        console.log(doc);
        db.close();
    });
});