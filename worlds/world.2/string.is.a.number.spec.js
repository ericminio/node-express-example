var gotoRoot = '../../';
var theString = require(gotoRoot + 'worlds/world.2/lib/string.is.a.number');

describe('isANumber', function() {
   
   it('can detect that 2 is a number', function() {
       expect(theString('2').isANumber()).toBe(true);
   });

   it('can detect that hello is a number', function() {
       expect(theString('hello').isANumber()).toBe(false);
   });
});