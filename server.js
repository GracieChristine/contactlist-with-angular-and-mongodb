'use strict';

const express = require('express');
const app = express();

// Looking for static files inside /public
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("Received a GET request");

  const person1 = {
    name: 'Tim',
    email: 'tim@email1.com',
    number: '(111) 111-1111'
  };

  const person2 = {
    name: 'Emily',
    email: 'emily@email2.com',
    number: '(222) 222-2222'
  };

  const person3 = {
    name: 'John',
    email: 'john@email3.com',
    number: '(333) 333-3333'
  };

  const contactlist = [person1, person2, person3];
  // Response GET request in a JSON format
  res.json(contactlist);
});

app.listen(3000);
console.log("Listening and spinning on port 3000");
