var positionOf = require('./lib/objects.position.in.map');

describe('Waters position,', function() {
    
    var waters;
    
    describe('when there is just one water point,', function() {
        
        beforeEach(function() {
            waters = positionOf.watersIn([
                    "....W",
                    "....."
                ]);
        });

        it('returns one water point', function() {
            expect(waters.length).toEqual(1);
        });
    });

    describe('when there is two water points,', function() {
        
        var first, second;
        
        beforeEach(function() {
            waters = positionOf.watersIn([
                    "...PW",
                    ".....",
                    ".W..."
                ]);
            first = waters[0];
            second = waters[1];
        });

        it('returns two water points', function() {
            expect(waters.length).toEqual(2);
        });
        
        describe('the first found water point', function() {
         
            it('has the correct x', function() {
                expect(first.x).toEqual(4);
            });

            it('has the correct y', function() {
                expect(first.y).toEqual(0);
            });
        });
        
        describe('the second found water point', function() {
         
            it('has the correct x', function() {
                expect(second.x).toEqual(1);
            });

            it('has the correct y', function() {
                expect(second.y).toEqual(2);
            });
        });
    });
});