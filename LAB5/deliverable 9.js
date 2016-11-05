var request = require('request');
var express = require('express');
var app = express();

// gets and returns eve
function get_eve(callback) {
  // Configure the request
  var options = {
    url: 'http://localhost:5000/data',
    method: 'GET',
  }

  // Start the request
  request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Success");
    // return(body);
    callback(body);
  }
  else
    callback(error);
    // console.log(error);
  })  
}

get_eve(function(err, data) {
    console.log(data.toString());
});

// // at my port
// app.listen(9300);

// app.get('/', function (req, res) {
//   get_eve().res.send()
// })