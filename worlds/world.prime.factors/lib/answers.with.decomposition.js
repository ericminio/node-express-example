var primeFactorsOf = require('./decompose');

module.exports = function(parameter) {
    var number = parseInt(parameter);
    
    return {
        number: number,
        decomposition: primeFactorsOf(number)
    };
};