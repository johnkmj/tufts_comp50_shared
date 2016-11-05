var express = require('express');
var Promise = require('bluebird');

var app = express();
var request = Promise.promisify(require('request'));

var AsciiTable = require('ascii-table')


var table_ify = function(json) {
  var rows = []
  
  items = json._items;
  
  for (var i = items.length - 1; i >= 0; i--) {
    var entry = items[i].map(function (entry) {
      return [entry._updated, entry.temp, entry.long, entry._links, entry.lat, entry._created, entry._id, entry._etag]
    });
    rows += entry;
  }
  var table = new AsciiTable().fromJSON({
    title: 'Get Response'
  , heading: [ 'updated', 'temp', 'long', 'links', 'lat', 'created', 'id', 'etag' ]
  , rows: rows
  })
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