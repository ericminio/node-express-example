var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the decomposition level:', function() {

    it('can decompose 3', function(done) {
        request('http://localhost:7000/primeFactors?number=300', function(error, response, body) {
            expect(JSON.parse(body)).toEqual({ number: 300, decomposition: [2, 2, 3, 5, 5] });
            done(); 
        });
    });
   
});