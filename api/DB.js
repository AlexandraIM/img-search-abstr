'use strict';
let MongoClient = require('mongodb').MongoClient;
//seve request string to DB
exports.save = function (request) {
  MongoClient.connect(process.env.DB_PATH, function(err, db) {
    if(err) {
      throw new Error(err);
    }
    
    let collection = db.collection('serchrequests'); //inti collection
    let object = {
      term : request,
      when : new Date()
    };
    
    try {
      collection.insertOne(object);
      
    } catch (err){
      throw new Error(err);
    } finally {
      db.close();
    }
  });
};
//get 10 last queries
exports.get = function (callback) {
  MongoClient.connect(process.env.DB_PATH, function(err, db) {
    if(err) {
      throw new Error(err);
    }
    
    let collection = db.collection('serchrequests');
    
    try {
      let results = collection.find(null,{_id : 0}).limit(10).sort({ when: -1 }).toArray(function(err,doc){
        callback(doc);
      });
    } catch (err){
      throw new Error(err);
    } finally {
      db.close();
    }
  });
}