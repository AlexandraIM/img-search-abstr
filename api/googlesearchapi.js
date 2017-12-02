let search = require('node-google-image-search');

exports.searchFor = function (request, callback, numberOffset, numberOfResults) {
  console.log(request);
  return search(request, callback, numberOffset, numberOfResults);
};