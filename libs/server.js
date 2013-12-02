var express = require('express');

var server = express();

server.get('/', function(request, response) {
   require('./challenge.landing.page/home.page.endpoint')(request, response); 
});

server.get('/ping', function(request, response) {
    require('./challenge.ping/ping.endpoint')(request, response);
});

server.get('/primeFactors', function(request, response) {
    require('./world.prime.factors/prime.factors.endpoint')(request, response);
});

module.exports = server;
