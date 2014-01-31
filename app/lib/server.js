var gotoRoot = '../../';
var express = require('express');

var server = express();

server.get('/', function(request, response) {
   require(gotoRoot + 'worlds/world.1/lib/home.page.endpoint')(request, response); 
});

server.get('/ping', function(request, response) {
    require(gotoRoot + 'worlds/world.1/lib/ping.endpoint')(request, response);
});

server.get('/primeFactors', function(request, response) {
    require(gotoRoot + 'worlds/world.2/lib/prime.factors.endpoint')(request, response);
});

module.exports = server;
