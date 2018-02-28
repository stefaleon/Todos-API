var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
  res.send("Express says \"Ohai from the ROOT!\"");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
  console.log(`App running on port ${port}.`);
});
