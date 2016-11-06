var http = require('http');

var options = {
  host: 'localhost:5000',
  path: '/data'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

// http request is quite ugly tbh.
http.request(options, callback).end();