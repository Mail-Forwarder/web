// replace-string
var replaceString = require('replace-string');

// Parse the lang
var parse = function(lang) {
    // Stringify the lang
    var rawLang = JSON.stringify(lang);

    // Replace vars
    rawLang = replaceString(rawLang, '%name%', lang.meta.name);
    // TODO: Replace with correct onion address
    rawLang = replaceString(rawLang, '%onionaddr%', 'sampleadress.onion');

    // JSONize and return
    var lang = JSON.parse(rawLang);
    return lang;
}

// module exports
module.exports = parse;
