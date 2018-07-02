$(document).ready(function () {
    var boton = $('#enviarInsert');
    var lista = $('#listaProyectos');

    //mostrar resultado de las insersiones
    $.get('http://localhost:3000/proyectos/', function (proyectos) {
        console.log(proyectos)
        proyectos.forEach(proyectos => {
            lista.append('<li id="' + proyectos.id + '">' + proyectos.nombre + ', ' + proyectos.categoria + ', ' + proyectos.lenguaje + //aqui proyectos lleva S porque estoy llamando los datos desde la base de datos
                '<button class="eliminarProyectos">' + 'Eliminar Proyectos </button>' +
                '<input type="text" class="nuevoNombre"' + '</li>') 
        });
    });//fin mostrar

    //insertar datos
    boton.on('click', function () {
        let data = $('#name').val();
        let data2 = $('#cat').val();
        let data3 = $('#leng').val();
        //let formulario = $("#insert").serialize() esto es para ordenar un conjunto de datos
        $.post('http://localhost:3000/proyectos/add', { nombre: data, categoria: data2, lenguaje: data3 }, function (proyecto) {//mostrar la lista
            lista.append('<li id="' + proyecto.id + '">' + proyecto.nombre + ' ,' + proyecto.categoria + ' ,' + proyecto.lenguaje
                + '<button class="eliminarProyectos">' + 'Eliminar Proyecto </button>' +
                '<input type="text" class="nuevoNombre"' + '</li>'

            );
        });//fin funcion


    });//fin on click

    //eliminar una "linea"
    lista.on('click', '.eliminarProyectos', function () {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/proyectos/delete', { id: id }, function (proyecto) {
        });
    });
    //editar datos
    lista.on('change', '.nuevoNombre', function () {
        let item = $(this).parent();
        let id = item.attr('id');
        let name = $(this).val();
        
        $.post('http://localhost:3000/proyectos/update', { id: id, nombre: name,}, function (proyecto) {
            item.html(name + '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
            '<input type="text" class="nuevoNombre">' + '</li>'); 
        });
    });
   
});//fin document

