var request = require('request');
var express = require('express');
var app = express();

// gets and returns eve
function get_eve() {
  // Configure the request
  var options = {
    url: 'localhost/data',
    method: 'GET',
  }

  // Start the request
  request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // return(body);
    callback(body);
  }
  else
    console.log(error);
  })  
}


// at my port
app.listen(9300);

app.get('/', function (req, res) {
  res.send('hello')
})