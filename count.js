var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

/*
Here we will learn how to count the number of documents that
meet certain criteria.
*/
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection('parrots').count({
        age: { $gt: +age}
    }, function (err, count) {
        if (err) throw err;
        console.log(count);
        db.close();
    });
});