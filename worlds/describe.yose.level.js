var gotoRoot = '../';
var http    = require('http');
var server  = require(gotoRoot + 'app/lib/server');

var describeYoseLevel = function(title, tests) {
    
    describe(title, function() {
        
        var testServer;

        beforeEach(function(done) {
            testServer = http.createServer(server).listen(7000, done);
        });
        
        beforeEach(function() {
            this.addMatchers({
                toHaveElement: function(selector) {
                    this.message = function () {
                        return "Element " + selector + " not found in given page";
                    }
                    return this.actual(selector).length > 0;
                }
            });
        });

        afterEach(function() {
            testServer.close(); 
        });

        tests();

    });
};

module.exports = describeYoseLevel;