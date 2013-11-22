var http    = require('http');
var server  = require('../libs/server');

var describeYoseLevel = function(title, tests) {
    
    describe(title, function() {
        
        var testServer;

        beforeEach(function(done) {
            testServer = http.createServer(server).listen(7000, done);
        });

        afterEach(function() {
            testServer.close(); 
        });

        tests();

    });
};

module.exports = describeYoseLevel;