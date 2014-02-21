var gotoRoot = '../../';
var express = require('express');

var server = express();

server.get('/', function(request, response) {
   require(gotoRoot + 'worlds/world.start/lib/home.page.endpoint')(request, response); 
});

server.get('/ping', function(request, response) {
    require(gotoRoot + 'worlds/world.start/lib/ping.endpoint')(request, response);
});

server.get('/primeFactors', function(request, response) {
    require(gotoRoot + 'worlds/world.prime.factors/lib/prime.factors.endpoint')(request, response);
});

server.get('/fire/geek', function(request, response) {
    require(gotoRoot + 'worlds/world.fire/lib/fire.geek.endpoint')(request, response);
});

module.exports = server;
