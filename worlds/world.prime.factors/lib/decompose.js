var decompositionOfGivenNumberStartingWithPrime = function(factor, number) {
    if (number === 1) return [];
    if (number % factor ===0) return [factor].concat(decompositionOf(number / factor));
};

var decompositionOf = function(number) {
    return decompositionOfGivenNumberStartingWithPrime(2, number);
};

module.exports = decompositionOf;