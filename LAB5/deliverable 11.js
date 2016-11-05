var request = require('request');
var express = require('express');
var app = express();

// at my port
app.listen(9300);

app.get('/', function (req, res) {
  res.send('hello')
})