var extractParameter = require('./extract.parameter');

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

    var parameter = extractParameter('number').fromQueryStringIn(request);
    response.send(parameter.decomposition());
    
};

module.exports = endpoint;