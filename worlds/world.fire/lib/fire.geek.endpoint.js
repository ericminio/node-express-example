var url = require('url');
var positionOf = require('./objects.position.in.map');
var avoidFire = require('./avoid');
var buildPathBetween = require('./path.builder');
var gotoNearestWater = require('./go.to.nearest.water');

var sendAnswer = function(response, answer) {
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(JSON.stringify(answer));		
	response.end();
};

var extractMap = function(incoming) {
	var params = url.parse(incoming.url, true);	
	
	var mapWidth = params.query.width;
    var regex = new RegExp('.{' + mapWidth + '}', 'g');

    return params.query.map.match(regex);
};

geek = function(incoming, response) {
    var map = extractMap(incoming);    

    var fire = positionOf.fireIn(map);
    var plane = positionOf.planeIn(map);
    var water = positionOf.waterIn(map);
    var moves;
    
    if (fire == undefined) {
        moves = gotoNearestWater(map);
    }
    else {
        var movesToWater = avoidFire(map);
        var movesFromWaterToFire = buildPathBetween(water, fire);
        moves = movesToWater.concat(movesFromWaterToFire);
    }
    
    var answer = {
        map: map,
        moves: moves
    };    
	sendAnswer(response, answer);
}

module.exports = geek;
