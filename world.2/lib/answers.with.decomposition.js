var primeFactorsOf = require('./decompose');

var answer = function(number) {
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