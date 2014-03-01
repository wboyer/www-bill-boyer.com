var facts = require('./facts-db.min');

var express = require('express');
var app = express();
 
app.configure(function () {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

facts.addRoutes(app);
 
app.listen(3000);

