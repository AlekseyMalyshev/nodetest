
'use strict';

let http = require('http');

let gravatar = require('./gravatar');
let math = require('./math');
let sentence = require('./sentence');

let server = http.createServer(processor);

function processor(req, res) {
  let params = req.url.split('/');

  switch (params[1]) {
    case 'gravatar':
      if (params.length === 3) {
        gravatar(res, params[2]);
      }
      else {
        res.statusCode = 400;
      }
      break;

    case 'math':
      math(res, params[2], params.slice(3));
      break;

    case 'sentence':
      if (params.length === 3) {
        sentence(res, params[2]);
      }
      else {
        res.statusCode = 400;
      }
      break;

    default:
      res.statusCode = 400;
  }
  res.end();
}

server.listen(3000);
