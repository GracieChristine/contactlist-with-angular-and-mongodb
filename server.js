'use strict';

const express = require('express');
const app = express();
const mongojs = require('mongojs');
// Indicating which MONGODB database and collection we will be using
const db = mongojs('contactlist', ['contactlist']);

// Looking for static files inside /public
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("Received a GET request");

  db.contactlist.find(function(err, docs) {
    console.log(docs);
    // Sends the data back to the controller
    res.json(docs);
  });

});

app.listen(3000);
console.log("Listening and spinning on port 3000");
