var positionOf = require('./objects.position.in.map');
var buildPathBetween = require('./path.builder');

var pathToNearestWater = function(map) {
    var plane = positionOf.planeIn(map);
    var waterPoints = positionOf.watersIn(map);
    
    var minimumDistance = 10 * map[0].length;
    var target;
    for (var i=0; i<waterPoints.length; i++) {
        var water = waterPoints[i];        
        var distance = buildPathBetween(plane, water).length;
        if (distance < minimumDistance) {
            target = water;
            minimumDistance = distance;
        }
    }

    return buildPathBetween(plane, target);
};

module.exports = pathToNearestWater;