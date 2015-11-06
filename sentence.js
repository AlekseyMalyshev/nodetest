
'use strict';

module.exports = function(res, uri) {
  let text = decodeURI(uri);
  let stat = {};
  stat.words = text.match(/[a-z]{1,}/gi).length;
  stat.spaces = text.split('').reduce((spaces, x) => x === ' ' ? ++spaces : spaces, 0);
  stat.letters = text.length - stat.spaces;

  res.write(JSON.stringify(stat));
  res.end();
}
