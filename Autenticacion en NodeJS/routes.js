var app = require('./app');
var ProjectController = require('./controllers/project');
var UsersController = require('./controllers/users');
//Rutas
app.get('/', function (req, res) {
    res.render('index');
});
var auth = function (req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.sendStatus(404);
};
app.get('/home', auth, function (req, res) {
    res.render('home', {
        email: req.session.user.email
    });
});
//Consultar proyectos
app.get('/proyectos', ProjectController.getProjects);

//Añadir proyectos 
app.post('/proyectos/add', ProjectController.addProject);

//Eliminar proyectos
app.post('/proyectos/delete', ProjectController.deleteProjects);

//Modificar proyectos
app.post('/proyectos/update', ProjectController.updateProject);

//Registro
app.post('/users/register', UsersController.registerUser);
//Login
app.post('/users/login', UsersController.loginUser);
//Logout
app.get('/logout', UsersController.logoutUser);
module.exports = app;