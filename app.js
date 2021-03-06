// Load env variables (dotenv)
require('dotenv').config();
// ENV vars
const PORT = process.env.MF_PORT || 9068;

// Logger
var logger = require('./logger.js');

// Languages
// Parse lang
var parseLang = require('./parseLang.js');
// Filesystem var
var fs = require('fs');
// German language
var lang_de = parseLang(require('./lang/de.json'));

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
// body-parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Page: Home
app.get('/', function(req, res) {
    // TODO: Add lang check / Add multiple languages
    res.render('pages/home.ejs', {
        lang: lang_de
    });
});

// Page: Sitemap
app.get('/sitemap', function(req, res) {
    // TODO: Add lang check / Add multiple languages
    res.render('pages/sitemap.ejs', {
        lang: lang_de
    });
});

// Page: Credits
app.get('/credits', function(req, res) {
    // TODO: Add lang check / Add multiple languages
    res.render('pages/credits.ejs', {
        lang: lang_de
    });
});

// Page: Panel/Login
app.get('/panel/login', function(req, res) {
    // TODO: Add lang check / Add multiple languages
    res.render('pages/panel/login.ejs', {
        lang: lang_de
    });
});

// Page: Panel/Register
app.get('/panel/register', function(req, res) {
    // TODO: Add lang check / Add multiple languages
    res.render('pages/panel/register.ejs', {
        lang: lang_de
    });
});

// Service redirects
app.get('/redirect/:service', function(req,res) {
    switch(req.params.service) {
        case 'discord':
            res.redirect('https://discord.gg/YaRKuak');
            break;
        case 'github':
            res.redirect('https://github.com/mail-forwarder');
            break;
        case 'twitter':
            res.redirect('https://twitter.com/mail_forwarder');
            break;
        default:
            res.redirect('/');
            break;
    }
});

// Start web server
app.listen(PORT, function() {
    logger.success('Now listening on port ' + PORT);
});
