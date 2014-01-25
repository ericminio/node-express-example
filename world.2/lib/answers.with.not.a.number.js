var answer = function(parameter) {
    return {
        decomposition: function() {
            return {
                number: parameter,
                error: 'not a number'
            }
        }        
    };
};

module.exports = answer;