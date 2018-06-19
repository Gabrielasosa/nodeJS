var express = require('express');
var bodyParser = require('body-parser');
var port =3000;
var app = express();
//configuracion de archivos
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');//es el motor de plantilla, con esto le diecims como vamo a mostrarlas
app.engine('html', require('ejs').renderFile);//estamos importando la dependencia
app.set('view engine', 'html');

//middlelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 //creacion del servidor
 app.listen(port, () => {
  console.log('Servidor corriendo correctamente');
});//final app.listen


//rutas
app.get('/test', function (req, res) {
  res.status(200).send({
   message: 'conexion exitosa en test'
   });

});

app.get('/test1', function (req, res) {
 // res.status(200).send({
 // message: 'conexion exitosa'
 // });
   res.render('index');
});

app.get('/test2', function(req,res){
  res.send({
      message: 'conexion exitosa texst2'
  })
});

//metodo para exportar modulos o variables
module.exports=app;