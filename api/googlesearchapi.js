'use strict';
let search = require('node-google-image-search');

exports.searchFor = function (request, callback, numberOffset, numberOfResults) {
  return search(request, callback, numberOffset, numberOfResults);
};