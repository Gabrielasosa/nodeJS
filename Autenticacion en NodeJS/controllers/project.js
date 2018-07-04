var con = require('../config');

var controller = {
    addProject: function (req, res) {
        let sql = `INSERT INTO proyectos (name) VALUES ('${req.body.name}')`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                let proyecto = {
                    id: result.insertId,
                    nombre: req.body.name
                }
                return res.send(proyecto);
            }
        });
    },
    getProjects: function (req, res) {
        let sql = 'SELECT * from proyectos';
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                return res.send(result);
            }
        });
    },
    deleteProjects: function (req, res) {
        let sql = `DELETE FROM proyectos where id = '${req.body.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                return res.send(result);
            }
        });
    },
    updateProject: function (req, res) {
        let sql = `UPDATE proyectos set name='${req.body.name}' where id = '${req.body.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
              return  res.send(err);
            }
            else {
                let proyecto = {
                    name: req.body.name
                }
               return res.send(proyecto);
            }
        });
    }
};

module.exports = controller;