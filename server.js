
var express = require('express');
var app = express();
var imageSearch = require('./api/googlesearchapi');
var parser = require('./api/toObject');
var db = require('./api/DB');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/imagesearch/:search", function (req, res) {
  var searchTerm = req.params.search;
  db.save(searchTerm);
  var offset = parseInt(req.query.offset);
  imageSearch.searchFor(searchTerm, sendResult, offset, 10);
  function sendResult(results){
        var jsonResult = [];
        results.forEach( function(result) {
          jsonResult.push(parser.parse(result));
        });
        res.render('searchResult',{results : jsonResult});
  }
});

app.get("/api/latest/", function (req, res) {
  db.get(function(result) {
    res.send(result);
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
