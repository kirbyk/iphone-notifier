var MongoClient = require('mongodb').MongoClient;


var MONGODB_URL = 'mongodb://localhost:27017/iphone-notifier';

exports.run = function(callback) {
  MongoClient.connect(MONGODB_URL, function(err, db) {
    if (err) {
      return console.error("Can't connect to MongoDB");
    }

    callback(db);

    // TODO: figure out how to uncomment this
    // db.close();
  });
};
