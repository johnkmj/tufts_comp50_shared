var express = require('express');
var app = express();
var request = Promise.promisify(require('request'));
var Promise = require('bluebird');


var eve_server = {
    url: 'http://localhost:5000/data',
    method: 'GET',
  }


// at my port
app.listen(9300);


app.get('/', function (req, res, next) {
  request(eve_server)
  .then(JSON.parse) //parse res
  .then(res.send())
  .catch(next) //good old habits
})



// error handling just in case
app.use(function (err, req, res, next) {
  console.log("Ooops something went wrong");
})