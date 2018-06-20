var con = require('./config');
var app = require('./app');

//rutas
app.get('/', function (req, res) {
    res.render('index');
});