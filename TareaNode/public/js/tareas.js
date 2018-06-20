$(document).ready(function () {
    //Zona de variables
    var añadirTarea = $('#anadirTarea');
    var tareaText = $('#tareaText');
    var tareasPendientes = $('#tareasPendientes');
    var tareasParaProbar = $('#tareasParaProbar');
    var tareasRealizadas = $('#tareasRealizadas');
    tareasPendientes.sortable();
    tareasParaProbar.sortable();
    tareasRealizadas.sortable();

    añadirTarea.on('click', function () {
        let tarea = tareaText.val();
        if (tarea != "") {
            tareasPendientes.append('<li class="tareas" data-estado="pendiente">' + tarea  + '<button class="eliminarProyecto btn btn-primary">' + 'Eliminar </button>' + '</li>');
        }
    });

    $('ul').on('click', '.tareas', function () {
        let tarea = $(this);
        if (tarea.attr('data-estado') === 'pendiente') {
            tarea.attr('data-estado', 'paraProbar');
            tareasParaProbar.append(tarea);
        }
        else if (tarea.attr('data-estado') === 'paraProbar') {
            tarea.attr('data-estado', 'realizada');
            tareasRealizadas.append(tarea);
        }
        else if (tarea.attr('data-estado') === 'realizada') {
            tarea.attr('data-estado', 'pendiente');
            tareasPendientes.append(tarea);
        }
    })
//eliminar una "tarea"
lista.on('click', '.eliminarProyectos', function () {
    let id = $(this).parent().attr('id');
    $(this).parent().remove();
    $.post('http://localhost:3000/proyectos/delete', { id: ididTareas }, function (mistareas) {
    });
});

});

