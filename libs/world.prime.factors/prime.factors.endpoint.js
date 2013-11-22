var extractInteger  = require('../query.string');
var primeFactorsOf  = require('./decompose');

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

	var number = extractInteger('number').fromQueryStringIn(request);	
    response.send({
        number: number,
        decomposition: primeFactorsOf(number)
    });
};

module.exports = endpoint;