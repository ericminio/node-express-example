var buildPathBetween = require('./lib/path.builder');
var equal = require('deep-equal');
var buildDetour = require('./lib/detour.builder');
var positionOf = require('./lib/objects.position.in.map');
var avoidFire = require('./lib/avoid');
var avoid = avoidFire.avoid;
var buildPositionsFromMovesStartingFrom = avoidFire.buildPositionsFromMovesStartingFrom;
var indexOfPosition = avoidFire.indexOfPosition;
var convertDetourIntoMoves = avoidFire.convertDetourIntoMoves;
var replaceMovesAtIndex = avoidFire.replaceMovesAtIndex;

describe('Path', function() {
    
    var map;
    var plane, water, fire, moves, positions;
    var indexBeforeFire, indexOfFire, indexAfterFire;
    var detour, movesOfDetour;
    
    beforeEach(function() {
        map = [
            "P...W....F",
            "..........",
        ];
        plane = { x:0, y:0 };
        
        moves = avoidFire(map);
        positions = buildPositionsFromMovesStartingFrom(plane, moves);
    });
    
    it('passes first over the water', function() {        
        expect(positions[3]).toEqual({ x:3, y:0 });
    }); 

    it('ends over the fire', function() {        
        expect(positions[positions.length-1]).toEqual({ x:9, y:0 });
    }); 
});