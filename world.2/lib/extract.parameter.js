var url       = require('url');
var theString = require('./string.is.a.number');

var cases = [
    {
        isMatching: function(parameter) {
            return theString(parameter).isANumber();
        },
        answer: function(parameter) {
            return require('./answers.with.decomposition')(parameter);
        }
    },
    {
        isMatching: function(parameter) {
            return !theString(parameter).isANumber();
        },
        answer: function(parameter) {
            return require('./answers.with.not.a.number')(parameter);
        }
    },
];

var extractParameter = function(name) {

    return {
        
        fromQueryStringIn: function(request) {
        	var parameter = url.parse(request.url, true).query[name];
            
            for (var i = 0; i<cases.length; i++) {
                if (cases[i].isMatching(parameter)) {
                    return cases[i].answer(parameter);
                }
            }
        }
    }    
};

module.exports = extractParameter;