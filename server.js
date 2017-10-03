'use strict';

const express = require('express');
const app = express();

// Looking for static files inside /public
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Listening and spinning on port 3000");
