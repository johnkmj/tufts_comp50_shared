var express = require('express');
var Promise = require('bluebird');

var app = express();
var request = Promise.promisify(require('request'));



var eve_server = {
    url: 'http://localhost:5000/data',
    method: 'GET',
  }


// at my port
app.listen(9300);


app.get('/', function (req, res, next) {
  request(eve_server)
  .then(function(json) {
    return(JSON.parse(json.body))
  })
  .then(function(data) {
    res.send(data);
  })
  .catch(next) //good old habits
})



// error handling just in case
app.use(function (err, req, res, next) {
  console.log("Ooops something went wrong");
})