var cases = [ require('./parameter.is.a.number'), require('./parameter.is.a.string') ];

var selectAnswerFor = function(parameter) {

    for (var i = 0; i<cases.length; i++) {
        if (cases[i].isMatching(parameter)) {
            return cases[i].answer(parameter);
        }
    }
};

module.exports = selectAnswerFor;