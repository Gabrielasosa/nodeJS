//var con = require('./config');
var app = require('./app');
var ProjectController = require('./controllers/project');

//rutas
app.get('/', function (req, res) {
   res.render('index');
});

//Consultar proyectos

app.post('/proyectos/add', ProjectController.addProject);

app.post('/proyectos/update', ProjectController.updateProject);

app.post('/proyectos/delete', ProjectController.deleteProject);

app.get('/proyectos',ProjectController.consultProject);

//Eliminar proyectos
//app.post('/proyectos/delete', ProjectController.deleteProject);


//Modificar proyectos
//app.post('/proyectos/update', ProjectController.updateProject);




// //ruta para añadir proyectos
// app.post('/proyectos/add', function (req, res) {
//     //req.body es el cuerpo de la peticion

//     let sql = `INSERT INTO proyectos (nombre,categoria,lenguaje) VALUES ('${req.body.nombre}','${req.body.categoria}','${req.body.lenguaje}')`;
//     // para formularios muy largos 
//     //let formulario = $("#insert").serialize()
//     con.query(sql, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             let proyecto = {
//                 id: result.insertId,
//                 nombre: req.body.nombre,
//                 categoria: req.body.categoria,
//                 lenguaje: req.body.lenguaje
//             }
//             res.send(proyecto);
//         }
//     });



// });
// //consultar nuestro proyectoo

// app.get('/proyectos', function (req, res) {
//     let sql = 'SELECT * from proyectos';
//     con.query(sql, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//         }
//     });

// });

// //eliminar proyectos
// app.post('/proyectos/delete', function (req, res) {
//     let sql = `DELETE FROM proyectos where id = '${req.body.id}'`;
//     con.query(sql, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//         }
//     });
// });


// //modificar registros, modifica a la vez el nombre y la categoria
// app.post('/proyectos/update', function (req, res) {
//     let sql = `UPDATE proyectos set nombre='${req.body.nombre}' where id = '${req.body.id}'`;
//     con.query(sql, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//             // let proyecto={
//             //     name: req.body.name
//             // }
//         }
//     });
// });

// //modificar categoria pa luego /intentar crear otro boton y un imput para modificar la categoria
// app.post('/proyectos/update', function (req, res) {
//     let sql = `UPDATE proyectos set categoria='${req.body.categoria}' where id = '${req.body.id}'`;
//     con.query(sql, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//             // let proyecto={
//             //     name: req.body.name
//             // }
//         }
//     });
// });





module.exports= app;