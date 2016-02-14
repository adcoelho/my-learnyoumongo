var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

/*
In this exercise, we need to calculate the average price for all documents in prices
that have the size that will be passed as the first argument to your script.
*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('prices');
  collection.aggregate([
    { $match: {
      size: process.argv[2]
    }}
  , { $group: {
      _id: 'total'
    , total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err;
    console.log(Number(results[0].total).toFixed(2));
    db.close();
  });
});