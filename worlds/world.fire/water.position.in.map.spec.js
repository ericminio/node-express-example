var positionOf = require('./lib/objects.position.in.map');

describe('Water position', function() {
    
    var water;
    
    beforeEach(function() {
        water = positionOf.waterIn([
                ".....",
                "..W..",
                "....."
            ]);
    });
    
    it('is known in a map (x)', function() {
        expect(water.x).toEqual(2);
    });

    it('is known in a map (y)', function() {
        expect(water.y).toEqual(1);
    });
});