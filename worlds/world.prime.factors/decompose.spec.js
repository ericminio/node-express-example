var gotoRoot = '../../';
var decompositionOf = require(gotoRoot + 'worlds/world.prime.factors/lib/decompose');

describe('decomposition algorythm', function() {
   
   it('can decompose 4', function() {
       expect(decompositionOf(4)).toEqual([2, 2]);
   });

   it('can decompose 9', function() {
       expect(decompositionOf(9)).toEqual([3, 3]);
   });
});