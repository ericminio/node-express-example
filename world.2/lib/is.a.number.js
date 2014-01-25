var the = function(parameter) {
    return {
        isANumber: function() {
            return ! isNaN(parameter);
        }
    }
};

module.exports = the;