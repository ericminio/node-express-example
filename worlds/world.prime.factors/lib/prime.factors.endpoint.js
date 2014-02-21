var url             = require('url');
var buildAnswerFor  = require('./build.answer');

var endpoint = function(request, response) {
    response.setHeader('Content-Type', 'application/json');

    var parameter = url.parse(request.url, true).query['number'];
    
	if (typeof parameter == 'object') {
		var answer = [];
		for(var i=0; i<parameter.length; i++) {
			answer.push(buildAnswerFor(parameter[i]));
		}
		response.send(answer);
	} 
	else {
		response.send(buildAnswerFor(parameter));
	}
};

module.exports = endpoint;