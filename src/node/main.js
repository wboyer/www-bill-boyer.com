var facts = require('facts-db');

var express = require('express');
var app = express();

facts.addRoutes(app);

app.listen(3000);

