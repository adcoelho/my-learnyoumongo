var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2]

/*
Here we are going to update a document in the users collection.
*/
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var collection = db.collection('users');
    collection.update({
       name: 'Tina' 
    }, {
        $set: {
            age: 40
        }
    }, function (err) {
        if (err) throw err;
        db.end();
    });
});
