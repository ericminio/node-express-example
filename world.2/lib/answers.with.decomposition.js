var primeFactorsOf = require('./decompose');

var answer = function(parameter) {
    var number = parseInt(parameter);
    
    return {
        decomposition: function() {
            return {
                number: number,
                decomposition: primeFactorsOf(number)
            }
        }
    }
};

module.exports = answer;