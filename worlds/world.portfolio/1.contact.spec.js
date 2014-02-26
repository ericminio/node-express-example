var gotoRoot = '../../';
var describeYoseLevel   = require(gotoRoot + 'worlds/describe.yose.level');
var request             = require('request');
var cheerio             = require('cheerio');

describeYoseLevel('Passing the contact information level:', function() {

    describe('home page', function() {
       
       var page;
       
       beforeEach(function(done) {
           request('http://localhost:7000/', function(error, response, body) {
               page = cheerio.load(body);
               done();
           });
       });
       
       it('has a a#contact-me-link element', function() {
           expect(page).toHaveElement('a#contact-me-link');
       });
       
       describe('contact-me element', function() {
           
           it('targets my LinkedIn account', function() {
               expect(page('a#contact-me-link').attr('href')).toEqual('http://www.linkedin.com/in/ericmignot');
           });  
           
           it('has a text', function() {
               expect(page('a#contact-me-link').text().length).toBeGreaterThan(0);
           });       
       });
    });   
});