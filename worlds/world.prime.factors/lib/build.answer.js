var cases = [ 
        [ require('./parameter.is.too.big'), require('./answers.with.error.too.big.number') ],
        [ require('./parameter.is.a.number'),  require('./answers.with.decomposition') ],
        [ require('./parameter.is.a.string'),  require('./answers.with.not.a.number') ]
    ];

var buildAnswerFor = function(parameter) {

    for (var i = 0; i<cases.length; i++) {
        if (cases[i][0](parameter)) {
            return cases[i][1](parameter);
        }
    }
};

module.exports = buildAnswerFor;