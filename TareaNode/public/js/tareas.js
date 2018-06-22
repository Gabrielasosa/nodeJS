$(document).ready(function () {
    //Zona de variables
    var añadirTarea = $('#anadirTarea');
    var tareaText = $('#tareaText');
    var tareasPendientes = $('#tareasPendientes');
    var tareasParaProbar = $('#tareasParaProbar');
    var tareasRealizadas = $('#tareasRealizadas');

//llamada para que me lo pinte si o si 
$.get('http://localhost:3000/proyectos/', function(tarea){
    console.log(tarea);
    tarea.forEach(tarea => {
        tareasPendientes.append('<li class="tareas" data-estado = "pendiente" id="' + tarea.id + '">' + tarea.nombre + " "  + " " + '<button class="eliminarProyectos btn btn-primary">' + 'Eliminar </button>' +  '</li>' )
    });
});

    tareasPendientes.sortable();
    tareasParaProbar.sortable();
    tareasRealizadas.sortable();

    añadirTarea.on('click', function () {
        //let data = $('#tareaText').val();
        let tarea = tareaText.val();
        if (tarea != "") {
        //tareasPendientes.append('<li class="tareas" data-estado="pendiente">' + tarea  + '<button class="eliminarProyecto ">' + 'Eliminar </button>' + '</li>');
        
        $.post('http://localhost:3000/proyectos/add', { nombre: tarea, estado:"pendiente" }, function (tarea) {//mostrar la lista
        tareasPendientes.append('<li class="tareas" data-estado="pendiente" id="' + tarea.id + '">' + tarea.nombre + '  '
            + '</li>'

        );
      
    });
        }//fin if
    });//fin funcion


    
    $('ul').on('click', '.tareas', function () {
        let tarea = $(this);
        let id = tarea.attr('id');
        if (tarea.attr('data-estado') === 'pendiente') {
            tarea.attr('data-estado', 'paraProbar');
            
            $.post('http://localhost:3000/proyectos/update', { id:id, estado: "paraProbar"}, function (tarea) {
             
            })
             tareasParaProbar.append(tarea);
        }
        else if (tarea.attr('data-estado') === 'paraProbar') {
            tarea.attr('data-estado', 'realizada');
            
            $.post('http://localhost:3000/proyectos/update', { id:id ,estado: 'realizado'}, function(tarea){
               
            })
            tareasRealizadas.append(tarea);
        }
  
    else if (tarea.attr('data-estado') === 'realizada') {
        let id = tarea.attr('id');
        console.log(id);
        // tarea.attr('data-estado', 'pendiente');
        
    //    $.post('http://localhost:3000/proyectos/delete', { id: id }, function (tarea) {
    //         console.log(tarea);
    // });
    tarea.on('click', '.eliminarProyectos', function () {
            let id = $(this).parent().attr('id');
         
            $.post('http://localhost:3000/proyectos/delete', { id: id }, function (tareas) {
          
        });
        $(this).parent().remove();
        });
        tareasRealizadas.append(tarea);
    }
})


});



