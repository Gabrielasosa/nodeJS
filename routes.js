var con = require('./config');
var app = require('./app');

//rutas
app.get('/', function (req, res) {
    res.render('index');
});


//ruta para añadir proyectos
app.post('/proyectos/add', function (req, res) {
    //req.body es el cuerpo de la peticion

    let sql = `INSERT INTO proyectos (nombre,categoria,lenguaje) VALUES ('${req.body.nombre}','${req.body.categoria}','${req.body.lenguaje}')`;
    // para formularios muy largos 
    //let formulario = $("#insert").serialize()
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let proyecto = {
                id: result.insertId,
                nombre: req.body.nombre,
                categoria: req.body.categoria,
                lenguaje: req.body.lenguaje
            }
            res.send(proyecto);
        }
    });



});
//consultar nuestro proyectoo

app.get('/proyectos', function (req, res) {
    let sql = 'SELECT * from proyectos';
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
    let sql = `DELETE FROM proyectos where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});


//modificar registros
app.post('/proyectos/update', function (req, res) {
    let sql = `UPDATE proyectos set name='${req.body.name}' where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});