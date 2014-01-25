var url = require('url');
var theString = require('./string.is.a.number');
var answersWithErrorNotANumber = require('./answers.with.not.a.number');
var answersWithDecomposition = require('./answers.with.decomposition');

var extractParameter = function(name) {

    return {
        
        fromQueryStringIn: function(request) {
        	var parameter = url.parse(request.url, true).query[name];

            if (theString(parameter).isANumber()) {
                return answersWithDecomposition(parseInt(parameter));
            }
            
            return answersWithErrorNotANumber(parameter)
        }
    }    
};

module.exports = extractParameter;