var mongodb = require('./utils/mongodb.js');

var stores = require('./stores.json');


mongodb.run(function(db) {
  stores.forEach(function(store) {
    db.collection('stores').insert(store);
  });
});
