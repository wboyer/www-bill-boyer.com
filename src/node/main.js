var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

require('airports-db').addRoutes(app);

require('facts-db').addRoutes(app);

var pq = require('prioritized-queue');

var scheduler = pq.newScheduler(4, 100, 2, 3, 10, true, io);

pq.addRoutes(app, scheduler);
pq.listenOnSocket(io, scheduler);

http.listen(3000);
