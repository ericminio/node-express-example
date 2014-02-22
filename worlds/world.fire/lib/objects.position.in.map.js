var objectIn = function(map, code) {
    var x;
    var y = -1;
    var found = false;
    for (var i=0; i< map.length; i++) {
        var line = map[i];
        y = y + 1;
        var planeIndex = line.indexOf(code);
        if (planeIndex !== -1) {
            x = planeIndex;
            return { x: planeIndex, y:y };
        }
    }
}

var planeIn = function(map) {
    return objectIn(map, 'P');
}

var waterIn = function(map) {
    return objectIn(map, 'W');
}

var fireIn = function(map) {
    return objectIn(map, 'F');
}

var watersIn = function(map) {
    var waters = [];
    for (var y=0; y< map.length; y++) {
        var line = map[y];
        for (var x=0; x<line.length; x++){
            var land = line[x];
            if (land == 'W') {
                waters.push({ x:x, y:y });
            }
        }
    }
    return waters;
}

module.exports.planeIn = planeIn;
module.exports.waterIn = waterIn;
module.exports.fireIn  = fireIn;
module.exports.watersIn = watersIn;
