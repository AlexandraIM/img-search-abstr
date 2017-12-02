
var express = require('express');
var app = express();
var imageSearch = require('./api/googlesearchapi');
var parser = require('./api/toObject');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/imagesearch/:search", function (req, res) {
  var searchTerm = req.params.search;
  imageSearch.searchFor(searchTerm, sendResult, 0, 10);
  function sendResult(results){
        var jsonResult = [];
        results.forEach( function(result) {
          jsonResult.push(parser.parse(result));
        });
        res.render('searchResult',{results : jsonResult});
  }
});

app.get("/api/latest/imagesearch/", function (req, res) {
  res.send("json");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
