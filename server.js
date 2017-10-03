'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("Hello world from server.js")
});

app.listen(3000);
console.log("Listening and spinning on port 3000");
