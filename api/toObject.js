'use strict';
exports.parse = function(result) {
  let object = {
    url : result.link,
    snippet : result.snippet,
    thumbnail : result.image.thumbnailLink,
    context : result.image.contextLink,
  };
  return object;
  
}