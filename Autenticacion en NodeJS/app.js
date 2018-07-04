var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3000;
var app = express();

//Configuracion de archivos
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
//Middleware
//Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Express-session
app.use(session({
    secret:'cadena aleatoria',
    resave:true,
    saveUninitialized:true
}));
//Creacion del servidor
app.listen(port, () => {
    console.log('Servidor corriendo correctamente');
});
module.exports = app;   