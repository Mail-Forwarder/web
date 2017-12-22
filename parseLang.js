// replace-string
var replaceString = require('replace-string');

// Parse the lang
var parse = function(lang) {
    // Stringify the lang
    var rawLang = JSON.stringify(lang);

    // Replace vars
    rawLang = replaceString(rawLang, '%name%', lang.meta.name);

    // JSONize and return
    var lang = JSON.parse(rawLang);
    return lang;
}

// module exports
module.exports = parse;
