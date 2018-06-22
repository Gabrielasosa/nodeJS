// Esperamos a la carga de la página para empezar...
$(document).ready(function() { 

    // declaramos slider como objeto javascript...
    var slider = {};
    
    // Declarando el id para buscar el elemento "ul": 
    slider.initQuery = '#slider';
    
    // declarando variables iniciales...
    slider.slider = $( slider.initQuery + " ul,ul"+slider.initQuery); // seleccionamos el "ul" con jquery
    slider.slides = slider.slider.find('li'); // seleccionamos cada uno de sus "li"
    slider.number = slider.slides.length; // Contamos el numero de "li" y por tanto slides que tenemos
    slider.actual = 0; // marcado para saber que slide estamos viendo, actualmente la primera, o sea la 0
    slider.height = 0; // altura del slider... luego la calcularemos
    slider.width = 0; // anchura del slider... luego la calcularemos
    
    // buscando ancho y alto de <li> máximos para calcular altura y anchura del slider...
    for(i=0;i<slider.number;i++)
    {
      var w = $(slider.slides[i]).width();
      var h = $(slider.slides[i]).height();
      slider.height = ( h > slider.height  ) ?  h : slider.height;	
      slider.width = ( w > slider.width  ) ? w : slider.width;	
    }
    
    // formateando el css del <ul> contenedor, la caja del slider...
    slider.slider.css({
      overflow: "hidden",
      width: slider.width,  
      height: slider.height,
      position: 'relative'
    });
    
    // colocando en posicion absoluta todos los <li> del slider, para poder ir haciendo las transiciones...
    for (var i=0;i<slider.number;i++)
    {
      var sl = $(slider.slides[i]);
      sl.attr('class',sl.attr('class') + " slider-slide-"+i);
      sl.css({
        position : 'absolute',
        left : slider.width * i
      });
    }
    
    // funcion para moverse a un slide concreto...
    slider.go = function (where) {
      if (where == 'next')
      {
        slider.actual = ( slider.actual < slider.number-1) ? slider.actual*1 + 1 : 0;
      }
      else if (where == 'prev')
      {
        slider.actual = ( slider.actual > 0) ? slider.actual - 1 : slider.number-1;
      }
      else
      {
        slider.actual = where;
      }
    
      for (var i=0;i<slider.number;i++)
      {
        var sl = $(slider.slides[i]);
        sl.animate({
           left : slider.width * (i - slider.actual)
        },2000);
      }
    };
    
    // creando botones de siguiente y anterior...
    $(slider.initQuery).append("<a href='#next' class='slider-prev'><i class='fas fa-arrow-circle-left fa-5x'style='color:#28a745;'></i></a><a href='#next' class='slider-next'><i class= 'fas fa-arrow-circle-right fa-5x' style='color:#28a745;'></i></a>");
    
    // asignando el evento a los botones de siguiente y anterior...
    $(slider.initQuery + " .slider-next").click(function () {
      slider.go('next');
      return false;	
    });
    $(slider.initQuery + " .slider-prev").click(function () {
      slider.go('prev');
      return false;	
    });
    
    // evento para el link que nos lleva al elemento 6 del slider...
    $('a.ir-al-elemento-6').click(function() { 
      slider.go( 6 );
    });
    //rotar automaticamente
    var autoSlider = setInterval(function () {
        slider.go('next');
    },40*1000); // cambia el numero desees.
    //crear botoneras------no me funciona como quiero
    // var autoSlider = setInterval(function () {
    //     slider.go("next");
    //     $("a.slider-button-"+slider.actual).click();
    // },10000);
    
    // slider.pages = '<ul class="slider-pages">';
    // for (var i=0;i<slider.number;i++)
    // {
    //   var sclass = (i==0) ? ' class="selected" ' : '';
    //   slider.pages = slider.pages + '<li' + sclass + '><a href="#slider-slide-'+i+'" class="slider-button-'+i+'">'+ (i+1) +'</a></li>'
    // }
    // slider.pages = slider.pages + '</ul>';
    
    // slider.slider.after( slider.pages );
    // $('ul.slider-pages li a').click(function () {
    //     clearInterval(autoSlider);
    //     slider.go( $(this).attr('href').substring(14) );
    //     $(this).parent().parent().find("li").attr("class","");
    //     $(this).parent().attr("class","selected");
    //     return false;
    // });   
                 
    });