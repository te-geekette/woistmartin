var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.delete('/martin-url/lat', function(req, res) {
  res.send(53.14677033085084);
});

app.delete('/martin-url/lng', function(req, res) {
  res.send(27.2021484375);
});