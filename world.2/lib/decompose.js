var decompositionOf = function(number) {
    var decomposition = [];
    while(number > 1) {
        if (number % 2 == 0) {
            decomposition.push(2);
            number /= 2;
        }
    }
    return decomposition;
};

module.exports = decompositionOf;