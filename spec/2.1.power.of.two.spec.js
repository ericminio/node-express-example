var describeYoseLevel   = require('./describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the power of two level:', function() {

    it('answsers with application/json header', function(done) {
        request('http://localhost:7000/primeFactors', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('application/json');
            done(); 
        });
    });
   
    it('can decompose 2', function(done) {
        request('http://localhost:7000/primeFactors?number=2', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ number: 2, decomposition: [2] });
            done(); 
        });
    });
   
    it('can decompose 8', function(done) {
        request('http://localhost:7000/primeFactors?number=8', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ number: 8, decomposition: [2, 2, 2] });
            done(); 
        });
    });
   
});