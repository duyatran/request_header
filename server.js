var express = require('express');
var app = express();

app.get('/', (req, res) => {
  var parsed = parseHeader(req.headers); 
  var output = {ipaddress: req.ip,
    language: parsed[0],
    software: parsed[1]
    }
    
  res.json(output);
});
app.listen(process.env.PORT || 3000);

function parseHeader(header) {
  var lang = header['accept-language'].match(/(.+?),/);
  var sw = header['user-agent'].match(/\((.+?)\)/);
  return [lang[1], sw[1]];
}
