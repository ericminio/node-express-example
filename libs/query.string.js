var url = require('url');

var extractInteger = function(name) {
    return {
        fromQueryStringIn: function(request) {
            var params = url.parse(request.url, true);	
        	return parseInt(params.query[name]);
        }
    };
};

module.exports = extractInteger;
