var server  = require('./server');

var app = server.listen(process.env.PORT ||7000);

module.exports = app;
