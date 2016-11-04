var request = require('request');
var express = require('express');

// gets and returns eve
function get_eve() {
  // Configure the request
  var options = {
    url: 'http://localhost:5000/data',
    method: 'GET',
  }

  // Start the request
  request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    return(body);
    // callback(body);
  }
  else
    console.log(error);
  })  
}


// at my port
app.listen(9300);

app.get('/', function (req, res) {
  get_eve().res.send()
})