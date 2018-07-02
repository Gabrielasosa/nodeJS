var con = require('../config');


var controller = {
    addProject: function (req, res) {
        let sql = `INSERT INTO proyectos (nombre,categoria,lenguaje) VALUES ('${req.body.nombre}','${req.body.categoria}','${req.body.lenguaje}')`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                let proyecto = {
                    id: result.insertId,
                    nombre: req.body.nombre,
                    categoria: req.body.categoria,
                    lenguaje: req.body.lenguaje,


                }
                return res.send(proyecto);
            }
        });
    },
    updateProject: function (req, res) {
        let sql = `UPDATE proyectos set nombre='${req.body.nombre}' where id = '${req.body.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                let proyecto = {
                    name: req.body.name
                }
                return res.send(proyecto);
            }
        });
    },
    deleteProject: function (req, res) {
        let sql = `DELETE FROM proyectos where id = '${req.body.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                return res.send(result);
            }
        })
    },
    consultProject: function (req, res) {
        let sql = 'SELECT * from proyectos';
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(result);
            }
        });
    }

};




module.exports = controller;