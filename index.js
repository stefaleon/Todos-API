var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
  res.send("Express says \"Ohai!\"");
});

app.listen(port, function() {
  console.log(`App running on port ${port}.`);
});
