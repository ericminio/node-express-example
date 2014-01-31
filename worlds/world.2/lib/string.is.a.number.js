var theString = function(parameter) {
    return {
        isANumber: function() {
            return ! isNaN(parameter);
        }
    }
};

module.exports = theString;