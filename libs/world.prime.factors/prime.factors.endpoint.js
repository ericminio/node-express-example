var url             = require('url');
var decompositionOf = require('./decompose');

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

    var params = url.parse(request.url, true);	
	var number = parseInt(params.query['number']);
	
    var output = {
        number: number,
        decomposition: decompositionOf(number)
    }
    response.send(output);
};

module.exports = endpoint;