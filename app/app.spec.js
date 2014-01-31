describe('app', function() {
   
   var app;
   
   beforeEach(function() {
       app = require('./lib/app.js');
   });
   
   afterEach(function() {
       app.close();
   });
   
   it('can be instantiated', function() {
       expect(app).toBeDefined();
   });
    
});