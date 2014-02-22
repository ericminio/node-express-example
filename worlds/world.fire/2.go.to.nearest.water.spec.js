var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');

describeYoseLevel('Passing the Get water fast level:', function() {

    it('answers', function(done) {
        request('http://localhost:7000/fire/geek?width=10&map=W.....P..W', function(error, response, body) {
            expect(response.statusCode).toEqual(200);
            done(); 
        });
    });
   
    it('answers with application/json header', function(done) {
        request('http://localhost:7000/fire/geek?width=10&map=W.....P..W', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('application/json');
            done(); 
        });
    });
    
    it('answers with application/json header', function(done) {
        request('http://localhost:7000/fire/geek?width=10&map=W.....P..W', function(error, response, body) {
            expect(JSON.parse(body).moves).toEqual([
                    { dx:1, dy:0 }, { dx:1, dy:0 }, { dx:1, dy:0 }
                ]);
            done(); 
        });
    });
});