var theString = require('./string.is.a.number');

module.exports = {
    isMatching: function(parameter) {
        return theString(parameter).isANumber();
    },
    answer: function(parameter) {
        return require('./answers.with.decomposition')(parameter);
    }
};