var describeYoseLevel   = require('./describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the ping level:', function() {

    it('answsers with application/json content-type', function(done) {
        request('http://localhost:7000/ping', function(error, response, body) {
            expect(response.headers['content-type']).toContain('application/json');
            done(); 
        });
    });
   
    it('answsers the expected pong', function(done) {
        request('http://localhost:7000/ping', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ alive: true });
            done(); 
        });
    });
    
});