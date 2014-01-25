var primeFactorsOf  = require('./decompose');
var url             = require('url');
var the             = require('./is.a.number')

var extractParameter = function(name) {

    return {
        
        fromQueryStringIn: function(request) {
            var params = url.parse(request.url, true);	
        	var parameter = params.query[name];

            if (the(parameter).isANumber()) {
                var number = parseInt(parameter);
                return {
                    decomposition: function() {
                        return {
                            number: number,
                            decomposition: primeFactorsOf(number)
                        }
                    }
                }
            }
            
            return {
                decomposition: function() {
                    return {
                        number: parameter,
                        error: 'not a number'
                    }
                }
            }
        }
    }
    
}

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

    var parameter = extractParameter('number').fromQueryStringIn(request);
    response.send(parameter.decomposition());
    
};

module.exports = endpoint;