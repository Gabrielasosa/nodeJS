var con = require('./config');
var app = require('./app');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './public/img' })

var fs = require('fs');
//rutas
app.get('/', function (req, res) {
    res.render('index');
});
//ruta para añadir archivos en nuestro servidor
app.post('/proyectos/add', multipartMiddleware, function (req, res) {


    let oldPath = req.files.foto.path;
    let newPath = './public/img/' + req.files.foto.originalFilename;
    fs.rename(oldPath, newPath, function (err) {
    });
    let sql = `INSERT INTO tareas (nombre) VALUES ('${req.body.nombre}')`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let proyecto = {
                id: result.id,
                nombre: req.body.nombre,
                estado: req.body.estado
            }
            res.send(proyecto);
        }
    });
});

//ruta para añadir proyectos

app.post('/proyectos/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO tareas (nombre,estado) VALUES ('${req.body.nombre}','${req.body.estado}')`;

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let proyecto = {
                id: result.id,
                nombre: req.body.nombre,
                estado: req.body.estado
            }
            res.send(proyecto);
        }
    });



});

//consultar nuestro proyectoo

app.get('/proyectos', function (req, res) {
    let sql = 'SELECT * from tareas';
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

});

//eliminar proyectos
app.post('/proyectos/delete', function (req, res) {
    let sql = `DELETE FROM tareas where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

//modificar registros, modifica a la vez el nombre y la categoria
app.post('/proyectos/update', function (req, res) {
    let sql = `UPDATE tareas set estado='${req.body.estado}' where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {

        if (err) {
            console.log(err)
            res.send(err);

        }
        else {
            res.send(result);
            // let proyecto={
            //     name: req.body.name
            // }
        }
    });
});