var express = require('express');
var Promise = require('bluebird');

var app = express();
var request = Promise.promisify(require('request'));

var AsciiTable = require('ascii-table')


var html_table_ify = function(json) {
  var rows = []
  
  items = json._items;
  var entries = items.map(function (entry) {
    return ('<tr><td>' + entry.lat + '</td><td>' + entry.long + '</td><td>' +entry.temp + '</td></tr>');
  });  

  var body = '<html><body><table border=1><tr><th>latitude</th><th>longitude</th><th>temperature</th></tr>' 
  // quick hack, bad code
  for (var i = entries.length - 1; i >= 0; i--) {
    body += entries[i];
  }

  body += '</table></body></html>'

  return(table)
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
  .then(html_table_ify)
  .then(function(data) {
    res.send(data);
  })
  .catch(next) //good old habits
})



// error handling just in case
app.use(function (err, req, res, next) {
  console.log("Ooops something went wrong");
})