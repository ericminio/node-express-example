var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');
var cheerio             = require('cheerio');

describeYoseLevel('Passing the landing page level:', function() {

    it('answers with text/html content-type', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('text/html');
            done(); 
        });
    });
   
    it('answers without error', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.statusCode).toEqual(200);
            done(); 
        });
    });
    
    describe('home page', function() {
       
       var page;
       
       beforeEach(function(done) {
           request('http://localhost:7000/', function(error, response, body) {
               page = cheerio.load(body);
               done();
           });
       });
       
       it('has a #welcome element', function() {
           expect(page).toHaveElement('#welcome');
       });

       it('has a link to the ping challenge has expected by yose', function() {
           expect(page).toHaveElement('a#ping-challenge-link[href="ping"]');
       });
    });
   
});