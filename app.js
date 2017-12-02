// ENV vars
const PORT = process.env.MF_PORT || 9068;

// Logger
var logger = require('./logger.js');

// Express basic stuff
var express = require('express');
var app = express();
// Set view engine to ejs
app.set('view engine', 'ejs');
// Static files
app.use('/static', express.static('public'));
// Request logger
var fileMorgan = require('file-morgan');
app.use(fileMorgan('combined', {
    useStreamRotator: true,
    dateFormat: 'DD-MM-YY'
}));

// Start web server
app.listen(PORT, function() {
    logger.success('Now listening on port ' + PORT);
});