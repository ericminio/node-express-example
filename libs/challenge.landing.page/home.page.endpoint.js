var fs = require('fs');

var home = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    var html = fs.readFileSync('./libs/challenge.landing.page/home.html').toString();
    
    response.write(html);
    response.end();
};

module.exports = home;