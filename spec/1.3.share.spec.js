var describeYoseLevel   = require('./describe.yose.level');
var request             = require('request');
var cheerio             = require('cheerio');
var fs                  = require('fs');

describeYoseLevel('Passing the share level:', function() {

    describe('Repository link', function() {
       
       var page;
       
       beforeEach(function(done) {
           request('http://localhost:7000/', function(error, response, body) {
               page = cheerio.load(body);
               done();
           });
       });
       
       it('exists', function() {
           expect(page).toHaveElement('a#repository-link');
       });

       it('references my github repo', function() {
           expect(page('a#repository-link').attr('href')).toEqual('https://github.com/ericminio/yose-node-express');
       });
    });
    
    describe('repo README', function() {

        var readme;

        beforeEach(function() {
            readme = fs.readFileSync('./README.md').toString();
        });
        
        it('contains reference to the game', function() {
            expect(readme).toContain('YoseTheGame');
        });
        
    });
   
});