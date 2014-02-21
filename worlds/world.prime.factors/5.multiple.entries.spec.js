var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the Multiple entries level:', function() {

    it('returns an array of decomposition', function(done) {
		request("http://localhost:7000/primeFactors?number=8&number=21", function(error, response, body) {
			expect(response.statusCode).toEqual(200);
			expect(JSON.parse(body)).toEqual(
				[
					{ 
						number : 8,
						decomposition : [2, 2, 2]
					},
					{ 
						number : 21,
						decomposition : [3, 7]
					},
				]
 			);
			done();
		});		
    });
   
});