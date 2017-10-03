'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongojs = require('mongojs');
// Indicating which MONGODB database and collection we will be using
const db = mongojs('contactlist', ['contactlist']);

// Looking for static files inside /public
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
  // console.log("Received a GET request");

  db.contactlist.find(function(err, docs) {
    // console.log(docs);
    // Sends the data back to the controller
    res.json(docs);
  });
});

app.post('/contactlist', function(req, res) {
  // console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function(req, res) {
  let id = req.params.id;
  // console.log(id);
  db.contactlist.remove({
    _id: mongojs.ObjectId(id)
  }, function(err, doc) {
    res.json(doc);
  });
});

app.get('/contactlist/:id', function(req, res) {
  let id = req.params.id;
  // console.log(id);
  db.contactlist.findOne({
    _id: mongojs.ObjectId(id)
  }, function(err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function(req, res) {
  let id = req.params.id;
  console.log(req.body.name, req.body.email, req.body.number);
  db.contactlist.findAndModify({
    query: {
      _id: mongojs.ObjectId(id)
    },
    update: {
      $set: {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
      }
    },
    new: true
  }, function(err, doc) {
    res.json(doc);
  });
});

app.listen(3000);
console.log("Listening and spinning on port 3000");
