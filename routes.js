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