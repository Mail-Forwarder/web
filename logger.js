// Console colors
var colors = require('colors');

// [INFO] console out
var info = function(message) {
    console.log(colors.cyan('[INFO]'), message)
}

// Module exports
module.exports.info = info;