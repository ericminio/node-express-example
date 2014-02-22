var nearestWaterIn = require('./lib/go.to.nearest.water');

describe('Find nearest water:', function() {
    
    it('finds the nearest water on the same line', function() {
        expect(nearestWaterIn(["W..PW"])).toEqual([ { dx:1, dy:0 } ]);
    });
    
    it('finds the nearest water on two different lines: "....P","...W.","..W.."', function() {
        expect(nearestWaterIn(["....P","...W.","..W.."])).toEqual([ { dx:-1, dy:0 }, { dx:0, dy:1 } ]);
    });
});