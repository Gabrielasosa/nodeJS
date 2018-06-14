var mysql = require('mysql');
var app = require('./app');
var port = 3000;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portafolio"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //creacion del servidor
  app.listen(port, () => {
    console.log('Servidor corriendo correctamente');
  });//final app.listen
});