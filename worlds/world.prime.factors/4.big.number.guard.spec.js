var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the Big number guard level:', function() {

    it('returns an error when number > 1e6', function(done) {
        request('http://localhost:7000/primeFactors?number=1000001', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ number: 1000001, error: "too big number (>1e6)" });
            done(); 
        });
    });
   
});