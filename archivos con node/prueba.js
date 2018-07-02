$(document).ready(function () {
    //Zona de variables
    var añadirTarea = $('#anadirTarea');
    var tareaText = $('#tareaText');
    var tareasPendientes = $('#tareasPendientes');
    var tareasParaProbar = $('#tareasParaProbar');
    var tareasRealizadas = $('#tareasRealizadas');
    var estado = "pendiente";
 
    tareasPendientes.sortable();
    tareasParaProbar.sortable();
    tareasRealizadas.sortable();
 
    $.get('http://localhost:3000/proyectos/', function(tarea){
        console.log(tarea);
        tarea.forEach(tarea => {
            tareasPendientes.append('<li class="tareas" data-estado = "pendiente" id="' + tarea.id + '">' + tarea.Nombre + " " + tarea.Estado + " " +  '</li>' )
        });
    });
 
    añadirTarea.on('click', function () {
        let tarea = tareaText.val();
        if (tarea != "") {
            $.post('http://localhost:3000/proyectos/add', {Nombre: tarea, Estado: "pendiente"}, function(tarea){
                tareasPendientes.append('<li class="tareas" data-estado = "pendiente" id="' + tarea.id + '">' + tarea.Nombre + " " + tarea.Estado + " " +  '</li>' )
            });
            
            
        }
    });
 
    $('ul').on('click', '.tareas', function () {
        let tarea = $(this);
        let id = tarea.attr('id');
        if (tarea.attr('data-estado') === 'pendiente') {
            tarea.attr('data-estado', 'paraProbar');
            // estado = "paraProbar";
 
            $.post('http://localhost:3000/proyectos/mod', {id: id, Estado: "paraProbar"}, function(tarea){
                console.log(tarea);
            })
            tareasParaProbar.append(tarea);
        }
        else if (tarea.attr('data-estado') === 'paraProbar') {
            tarea.attr('data-estado', 'realizada');
            // estado = "realizada";
 
            $.post('http://localhost:3000/proyectos/mod', {id: id, Estado: "realizada"}, function(tarea){
                console.log(tarea);
            });
            tareasRealizadas.append(tarea);
        }
        else if (tarea.attr('data-estado') === 'realizada') {
            let id = tarea.attr('id');
            console.log(id);
            // tarea.attr('data-estado', 'pendiente');
            
            $.post('http://localhost:3000/proyectos/delete', { id: id }, function (tarea) {
                // console.log(tarea);
        });
        tarea.remove();
            // tareasPendientes.append(tarea);
        }
    })
 });