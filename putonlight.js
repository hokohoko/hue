var request = require('request');
var url = 'http://192.168.3.5/api/o--YA3rqqwXURPyh7s7TYVSJ8iotoOaWBI9mJRkm/lights/1/state';

var command = { on : false };
command.on = true;
command.bri = 254;
command.hue = 1200;

request.put(
  {url: url,
    headers: {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(command)
  },
  function (error, response, body) {
    console.log(body);
  }
)
