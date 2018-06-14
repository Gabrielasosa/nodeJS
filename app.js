var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//middlelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
app.get('/test', function (req, res) {
    res.status(200).send('<h1>Página de inicio-Gabriela</h1>'+'<br><h1>La mejooo</h1>'+'<img src="/prueba/image.png" alt="Smiley face" height="42" width="42">'
    );

});

app.get('/test', function (req, res) {
    res.status(200).send({
        message: 'conexion exitosa'
    })
});

//metodo para exportar modulos o variables
module.exports=app;