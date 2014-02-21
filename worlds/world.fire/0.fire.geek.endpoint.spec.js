var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the First fire level:', function() {

    it('answers', function(done) {
        request('http://localhost:7000/fire/geek?width=3&map=...P...WF', function(error, response, body) {
            expect(response.statusCode).toEqual(200);
            done(); 
        });
    });
   
    it('answers with application/json header', function(done) {
        request('http://localhost:7000/fire/geek?width=3&map=...P...WF', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('application/json');
            done(); 
        });
    });
    
});