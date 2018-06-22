var con = require('./config');
var app = require('./app');

//rutas
app.get('/', function (req, res) {
    res.render('index');
});
//ruta para añadir proyectos

app.post('/practicando/add', function (req, res) {
    //req.body es el cuerpo de la peticion
    let sql = `INSERT INTO practicando (name,email,address,date,dni,letter) VALUES ('${req.body.name}','${req.body.email}','${req.body.address}','${req.body.date}','${req.body.dni}','${req.body.letter}')`;

    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let practicando = {
                id: result.id,
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                date: req.body.date,
                dni: req.body.dni,
                letter:req.body.letter
            }
            res.send(practicando);
        }
    });
 



});

//consultar nuestro proyectoo

app.get('/practicando', function (req, res) {
    let sql = 'SELECT * from practicando';
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
app.post('/practicando/delete', function (req, res) {
    let sql = `DELETE FROM practicando where id = '${req.body.id}'`;
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
app.post('/practicando/update', function (req, res) {
    let sql = `UPDATE practicando set name='${req.body.name}' where id = '${req.body.id}'`;
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