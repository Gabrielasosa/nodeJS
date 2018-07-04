$(document).ready(function () {
    var boton = $('#enviarInsert');
    var lista = $('#listaProyectos');
    var registerButton = $('#registerButton');
    var registerForm = $('#registerForm');
    var loginButton = $('#loginButton');
    var loginForm = $('#loginForm');

    $.get('http://localhost:3000/proyectos/', function (proyectos) {
        console.log(proyectos)
        proyectos.forEach(proyecto => {
            lista.append('<li class="proyecto" id="' + proyecto.id + '">' + proyecto.name +
                '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevoNombre">' + '</li>');
        });
    });

    boton.on('click', function () {
        let data = $('#name').val();
        $.post('http://localhost:3000/proyectos/add', { name: data }, function (proyecto) {
            lista.append('<li class="proyecto" id="' + proyecto.id + '">' + proyecto.nombre +
                '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevoNombre">' + '</li>');
        });
    });
    lista.on('click', '.eliminarProyecto', function () {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/proyectos/delete', { id: id }, function (proyecto) {
        });
    });

    lista.on('change', '.nuevoNombre', function () {
        let item = $(this).parent();
        let id = item.attr('id');
        let name = $(this).val();
        $.post('http://localhost:3000/proyectos/update', { id: id, name: name }, function (proyecto) {
            item.html(proyecto.name + '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevoNombre">' + '</li>');
        });
    });
    registerButton.on('click', function () {
        let data = registerForm.serialize();
        $.post('/users/register', data, function (res) {
            alert(res.nombre + ' ha sido registrado correctamente');
        });
    });
    loginButton.on('click', function () {
        let data = loginForm.serialize();
        $.post('/users/login', data, function (res) {
            console.log(res)
        });
    });
});





