var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the string guard challenge:', function() {

    it('answers with the expected error', function(done) {
        request('http://localhost:7000/primeFactors?number=hello', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ number: "hello", error: "not a number" });
            done(); 
        });
    });
   
});