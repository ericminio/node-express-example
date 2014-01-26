var url             = require('url');
var buildAnswerFor  = require('./build.answer');

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

    var parameter = url.parse(request.url, true).query['number'];
    
    response.send(buildAnswerFor(parameter));
    
};

module.exports = endpoint;