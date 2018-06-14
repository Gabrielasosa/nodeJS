var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//configuracion de archivos
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');//es el motor de plantilla, con esto le diecims como vamo a mostrarlas
app.engine('html', require('ejs').renderFile);//estamos importando la dependencia
app.set('view engine', 'html');

//middlelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
app.get('/test', function (req, res) {
    res.status(200).send('<h1>Página de inicio-Gabriela</h1>'+'<br><h1>La mejooo</h1>'
    );

});

// app.get('/test', function (req, res) {
//     res.status(200).send({
//         message: 'conexion exitosa'
//     })
// });

app.get('/test2', function(req,res){
    // res.status(200).send({
    //     message: 'conexion exitosa'
    res.render('index');
    
});

//metodo para exportar modulos o variables
module.exports=app;