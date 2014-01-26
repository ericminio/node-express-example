var theString = require('./string.is.a.number');

module.exports = {
    
    isMatching: function(parameter) {
        return !theString(parameter).isANumber();
    },
    
    answer: require('./answers.with.not.a.number')
};