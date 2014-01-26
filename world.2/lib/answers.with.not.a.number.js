var answer = function(parameter) {
    
    return {
        build: function() {
            return {
                number: parameter,
                error: 'not a number'
            }
        }        
    };
};

module.exports = answer;