var express = require('express');
var Promise = require('bluebird');

var app = express();
var request = Promise.promisify(require('request'));


var table_ify = function(json) {
  items = json._items;
  var entry = []
  for (var i = items.length - 1; i >= 0; i--) {
    entry[i] = JSON.stringify(items[i], null, 3) + '\n'
  }
  return(entry)
}

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
  .then(table_ify)
  .then(function(data) {
    res.send(data);
  })
  .catch(next) //good old habits
})



// error handling just in case
app.use(function (err, req, res, next) {
  console.log("Ooops something went wrong");
})