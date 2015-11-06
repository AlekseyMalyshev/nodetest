
'use strict';

let md5 = require('md5');

module.exports = function(res, email) {
  res.write('http://www.gravatar.com/avatar/' + md5(email));
}
