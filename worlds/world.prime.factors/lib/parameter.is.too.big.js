var theString = require('./string.is.a.number');

module.exports = function(parameter) {
    return theString(parameter).isANumber() && parseInt(parameter) > 1e6;
};