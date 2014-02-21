module.exports = function(parameter) {
    
    return {
        number: parseInt(parameter),
        error: 'too big number (>1e6)'
    };
};