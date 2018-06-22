$(document).ready(function () {

    //acordeon
    var dds = $('dd');
    dds.hide();

    $('dt').on('mouseenter', function () {
        dds.slideUp(200);
        $(this).next().slideDown(200);
    });//fin de acordeon

    //ancla para subir
    // $(function () {
    //     $('a[href*=#]').click(function () {
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    //             && location.hostname == this.hostname) {

    //             var $target = $(this.hash);

    //             $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

    //             if ($target.length) {

    //                 var targetOffset = $target.offset().top;

    //                 $('html,body').animate({ scrollTop: targetOffset }, 1000);

    //                 return false;

    //             }// if

    //         }// if

    //     });//function

    // });//fin de la funcion

    //cambiador de tamas
    //----tema1
    $("#tema1").click(function () {
        $('body').css("background-image", "url(../img/temas/tema1_1920.jpg)");
    });
    //----tema2
    $("#tema2").click(function () {
        $('body').css("background-image", "url(../img/temas/tema2_1920.jpg)");
    });
    //----tema3
    $("#tema3").click(function () {
        $('body').css("background-image", "url(../img/temas/playa1.jpg)");
    });
    
    //validar formulario mediande el plugin
    $.validate({
        lang: 'es'
    });

    //------------insertar los datos en la base de datos
var insertar = $('#insert');

//mostrar resultado de las insersiones
// $.get('http://localhost:3000/practicando', function (practicando) {
//     console.log(practicando)
//     practicando.forEach(practicando => {
//         lista.append('<li id="' + practicando.id + '">' + practicando.name + ', ' + practicando.email + ', ' + practicando.dni + //aqui proyectos lleva S porque estoy llamando los datos desde la base de datos
//         '</li>')
//     });
// });//fin mostrar


//----------insertar datos
insertar.on('click', function () {
    let data = $('#nombre').val();
    let data2 = $('#direccion').val();
    let data3 = $('#email').val();
    let data4 = $('#fecha').val();
    let data5= $('#dni').val();
    let data6 = $('#letter').val();
    //let formulario = $("#insert").serialize() esto es para ordenar un conjunto de datos
    $.post('http://localhost:3000/practicando/add', {name: data, 
    email: data2,
    address: data3,
    date: data4,
    dni: data5,
    letter:data6
}//, function (proyecto) {
        
        //mostrar la lista
        // lista.append('<li id="' + proyecto.id + '">' + proyecto.nombre + ' ,' + proyecto.categoria + ' ,' + proyecto.lenguaje
        //     + '<button class="eliminarProyectos">' + 'Eliminar Proyecto </button>' +
        //     '<input type="text" class="nuevoNombre"' + '</li>'
        // );
  //}     
  );//fin funcion
    
});//fin on click


});//fin document.ready