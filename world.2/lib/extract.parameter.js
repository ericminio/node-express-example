var url = require('url');
var theString = require('./string.is.a.number');
var answersWithErrorNotANumber = require('./answers.with.not.a.number');
var answersWithDecomposition = require('./answers.with.decomposition');

var extractParameter = function(name) {

    return {
        
        fromQueryStringIn: function(request) {
        	var parameter = url.parse(request.url, true).query[name];

            var cases = [
                {
                    isMatching: function(parameter) {
                        return theString(parameter).isANumber();
                    },
                    answer: function(parameter) {
                        return answersWithDecomposition(parameter);
                    }
                },
                {
                    isMatching: function(parameter) {
                        return !theString(parameter).isANumber();
                    },
                    answer: function(parameter) {
                        return answersWithErrorNotANumber(parameter);
                    }
                },
            ];
            if (cases[0].isMatching(parameter)) {
                return cases[0].answer(parameter);
            }
            
            if (cases[1].isMatching(parameter)) {
                return cases[1].answer(parameter);
            }
        }
    }    
};

module.exports = extractParameter;