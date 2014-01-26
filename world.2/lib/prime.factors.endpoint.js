var url             = require('url');
var selectAnswerFor = require('./select.answer');

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

    var parameter = url.parse(request.url, true).query['number'];
    
    response.send(selectAnswerFor(parameter));
    
};

module.exports = endpoint;