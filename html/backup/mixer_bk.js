





/*var slider = document.getElementById('ch1');//asigna a la variable slider el valor del id "ch1"
slider.addEventListener('input', sliderChange);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.

//funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
function sliderChange() {
  
  var valor= this.value //asignamos a una variable el valor del slider
  console.log(valor);//imprimimos por consola el valor
  document.getElementById('ch1Value').innerHTML=document.getElementById('ch1').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
  }*/


webiopi().ready(function() {
    /*    var parts;
        // red
        parts = webiopi().createRatioSlider(22);
        $("#red").append(parts);
        // green
        parts = webiopi().createRatioSlider(17);
        $("#green").append(parts);
        // blue
        parts = webiopi().createRatioSlider(27);
        $("#blue").append(parts);
        
        //parts = webiopi().createRatioSlider(18);
        //$("#uno").append(parts);
        
        parts = webiopi().createRatioSlider(23);
        $("#dos").append(parts);
        
        
        parts = webiopi().createRatioSlider(24);
        $("#tres").append(parts);
        
        parts = webiopi().createRatioSlider(25);
        $("#cuatro").append(parts);      
        
      */  
        
        //specify initial value
       /* $("#ratio22").val(0);
        $("#ratio17").val(0);
        $("#ratio27").val(0);
        $("#ratio18").val(0);
        $("#ratio23").val(0);
        $("#ratio24").val(0);
        $("#ratio25").val(0);
*/

/*Canal 1-------------------*/


        w().pulseRatio(18, 0.50);//especificamos el valor inicial, esta funcion setea el pwm, los argumentos son (GPIO,ratio)
        var slider = document.getElementById('ch1');//asigna a la variable slider el valor del id "ch1"
        slider.addEventListener('input', sliderChange);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.

        //funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
        function sliderChange() {
  
        var valor= this.value //asignamos a una variable el valor del slider
        //console.log(valor);//imprimimos por consola el valor
        document.getElementById('ch1Value').innerHTML=document.getElementById('ch1').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
        var RATIO= valor/100;//creamos una variable para transformar el valor del slider en ratio, dividiendolo en 100, el ratio es un numero que va de 0 a 1 (0.1,0.2,0.3....)
        w().pulseRatio(18, RATIO);//Le enviamos al PWM el ratio del slider
        console.log(RATIO);//printeamos el ratio para saber el valor.
        }
        
/*Canal 2-------------------*/


        w().pulseRatio(21, 0.50);//especificamos el valor inicial, esta funcion setea el pwm, los argumentos son (GPIO,ratio)
        var slider = document.getElementById('ch2');//asigna a la variable slider el valor del id "ch1"
        slider.addEventListener('input', sliderChange1);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.

        //funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
        function sliderChange1() {
  
        var valor1= this.value //asignamos a una variable el valor del slider
        //console.log(valor);//imprimimos por consola el valor
        document.getElementById('ch2Value').innerHTML=document.getElementById('ch2').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
        var RATIO= valor1/100;//creamos una variable para transformar el valor del slider en ratio, dividiendolo en 100, el ratio es un numero que va de 0 a 1 (0.1,0.2,0.3....)
        w().pulseRatio(21, RATIO);//Le enviamos al PWM el ratio del slider
        console.log(RATIO);//printeamos el ratio para saber el valor.
        }
        
        
    });





