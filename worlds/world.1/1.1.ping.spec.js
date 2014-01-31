var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the ping level:', function() {

    it('answers with application/json content-type', function(done) {
        request('http://localhost:7000/ping', function(error, response, body) {
            expect(response.headers['content-type']).toContain('application/json');
            done(); 
        });
    });
   
    it('answers the expected pong', function(done) {
        request('http://localhost:7000/ping', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ alive: true });
            done(); 
        });
    });
    
});