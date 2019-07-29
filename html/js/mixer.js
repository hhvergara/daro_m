webiopi().ready(function() {

/*GT Mixer 1-------------------*/
/* Python side details:
GPIOs
GT_Ch1 = GPIO 4
GT_Ch2 = GPIO 17
GT_Ch3 = GPIO 27
GT_Ch4 = GPIO 22

El primer canal tiene todos los comentarios, el resto son copias.

*/
//Canal 1
        
        w().pulseRatio(4, 0.35);//especificamos el valor inicial, esta funcion setea el pwm, los argumentos son (GPIO,ratio)
        var slider = document.getElementById('GT1');//asigna a la variable slider el valor del id "ch1"
        slider.addEventListener('input', GTF1);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.
        //funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
        function GTF1() {
        var valor= this.value //asignamos a una variable el valor del slider
        //console.log(valor);//imprimimos por consola el valor
        document.getElementById('GT1Value').innerHTML=document.getElementById('GT1').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
        var RATIO= valor/100;//creamos una variable para transformar el valor del slider en ratio, dividiendolo en 100, el ratio es un numero que va de 0 a 1 (0.1,0.2,0.3....)
        w().pulseRatio(4, RATIO);//Le enviamos al PWM el ratio del slider
        console.log(RATIO);//printeamos el ratio para saber el valor.
        }
//Canal 2
        w().pulseRatio(17, 0.35);
        var slider1 = document.getElementById('GT2');
        slider1.addEventListener('input', GTF2);
        function GTF2() {
        var valor= this.value
        document.getElementById('GT2Value').innerHTML=document.getElementById('GT2').value;
        var RATIO= valor/100;
        w().pulseRatio(17, RATIO);
        }
//Canal 3
        w().pulseRatio(27, 0.35);
        var slider = document.getElementById('GT3');
        slider.addEventListener('input', GTF3);
        function GTF3() {
        var valor= this.value
        document.getElementById('GT3Value').innerHTML=document.getElementById('GT3').value;
        var RATIO= valor/100;
        w().pulseRatio(27, RATIO);
        }
//Canal 4
        w().pulseRatio(22, 0.35);
        var slider = document.getElementById('GT4');
        slider.addEventListener('input', GTF4);
        function GTF4() {
        var valor= this.value
        document.getElementById('GT4Value').innerHTML=document.getElementById('GT4').value;
        var RATIO= valor/100;
        w().pulseRatio(22, RATIO);        
        }
        


/*BS Mixer 1-------------------*/
/* Python side details:
GPIOs
BS_Ch1 =  10
BS_Ch2 =  9
BS_Ch3 =  11
BS_Ch4 =  5

El primer canal tiene todos los comentarios, el resto son copias.

*/
//Canal 1

        w().pulseRatio(10, 0.35);//especificamos el valor inicial, esta funcion setea el pwm, los argumentos son (GPIO,ratio)
        var slider = document.getElementById('BS1');//asigna a la variable slider el valor del id "ch1"
        slider.addEventListener('input', BSF1);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.
        //funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
        function BSF1() {
        var valor= this.value //asignamos a una variable el valor del slider
        //console.log(valor);//imprimimos por consola el valor
        document.getElementById('BS1Value').innerHTML=document.getElementById('BS1').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
        var RATIO= valor/100;//creamos una variable para transformar el valor del slider en ratio, dividiendolo en 100, el ratio es un numero que va de 0 a 1 (0.1,0.2,0.3....)
        w().pulseRatio(10, RATIO);//Le enviamos al PWM el ratio del slider
        console.log(RATIO);//printeamos el ratio para saber el valor.
        }
//Canal 2
        w().pulseRatio(9, 0.35);
        var slider = document.getElementById('BS2');
        slider.addEventListener('input', BSF2);
        function BSF2() {
        var valor= this.value
        document.getElementById('BS2Value').innerHTML=document.getElementById('BS2').value;
        var RATIO= valor/100;
        w().pulseRatio(9, RATIO);
        }
//Canal 3
        w().pulseRatio(11, 0.35);
        var slider = document.getElementById('BS3');
        slider.addEventListener('input', BSF3);
        function BSF3() {
        var valor= this.value
        document.getElementById('BS3Value').innerHTML=document.getElementById('BS3').value;
        var RATIO= valor/100;
        w().pulseRatio(11, RATIO);
        }
//Canal 4
        w().pulseRatio(5, 0.35);
        var slider = document.getElementById('BS4');
        slider.addEventListener('input', BSF4);
        function BSF4() {
        var valor= this.value
        document.getElementById('BS4Value').innerHTML=document.getElementById('BS4').value;
        var RATIO= valor/100;
        w().pulseRatio(5, RATIO);        
        }


/*DR Mixer 1-------------------*/
/* Python side details:
GPIOs
DR_Ch1 =  6
DR_Ch2 =  13
DR_Ch3 =  19
DR_Ch4 =  26

El primer canal tiene todos los comentarios, el resto son copias.

*/
//Canal 1

        w().pulseRatio(6, 0.35);//especificamos el valor inicial, esta funcion setea el pwm, los argumentos son (GPIO,ratio)
        var slider = document.getElementById('DR1');//asigna a la variable slider el valor del id "ch1"
        slider.addEventListener('input', DRF1);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.
        //funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
        function DRF1() {
        var valor= this.value //asignamos a una variable el valor del slider
        //console.log(valor);//imprimimos por consola el valor
        document.getElementById('DR1Value').innerHTML=document.getElementById('DR1').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
        var RATIO= valor/100;//creamos una variable para transformar el valor del slider en ratio, dividiendolo en 100, el ratio es un numero que va de 0 a 1 (0.1,0.2,0.3....)
        w().pulseRatio(6, RATIO);//Le enviamos al PWM el ratio del slider
        console.log(RATIO);//printeamos el ratio para saber el valor.
        }
//Canal 2
        w().pulseRatio(13, 0.35);
        var slider = document.getElementById('DR2');
        slider.addEventListener('input', DRF2);
        function DRF2() {
        var valor= this.value
        document.getElementById('DR2Value').innerHTML=document.getElementById('DR2').value;
        var RATIO= valor/100;
        w().pulseRatio(13, RATIO);
        }
//Canal 3
        w().pulseRatio(19, 0.35);
        var slider = document.getElementById('DR3');
        slider.addEventListener('input', DRF3);
        function DRF3() {
        var valor= this.value
        document.getElementById('DR3Value').innerHTML=document.getElementById('DR3').value;
        var RATIO= valor/100;
        w().pulseRatio(19, RATIO);
        }
//Canal 4
        w().pulseRatio(26, 0.35);
        var slider = document.getElementById('DR4');
        slider.addEventListener('input', DRF4);
        function DRF4() {
        var valor= this.value
        document.getElementById('DR4Value').innerHTML=document.getElementById('DR4').value;
        var RATIO= valor/100;
        w().pulseRatio(26, RATIO);        
        }


/*VC Mixer 1-------------------*/
/* Python side details:
GPIOs
VC_Ch1 =  21
VC_Ch2 =  20
VC_Ch3 =  16
VC_Ch4 =  12

El primer canal tiene todos los comentarios, el resto son copias.

*/
//Canal 1

        w().pulseRatio(21, 0.35);//especificamos el valor inicial, esta funcion setea el pwm, los argumentos son (GPIO,ratio)
        var slider = document.getElementById('VC1');//asigna a la variable slider el valor del id "ch1"
        slider.addEventListener('input', VCF1);//escucha el cambio en la variable y ejecuta la funcion "sliderchange" creada por nosotros. input es el tipo de envento que produce el disparo de la funcion.
        //funcion creada por nosotros, actua cada vez que se dispara "slider.addEventListener('input', sliderChange);"
        function VCF1() {
        var valor= this.value //asignamos a una variable el valor del slider
        //console.log(valor);//imprimimos por consola el valor
        document.getElementById('VC1Value').innerHTML=document.getElementById('VC1').value;//remplazamos el valor de la etiqueta spam por el valor obtenido con innerHTML, buscar mas data de como funciona.
        var RATIO= valor/100;//creamos una variable para transformar el valor del slider en ratio, dividiendolo en 100, el ratio es un numero que va de 0 a 1 (0.1,0.2,0.3....)
        w().pulseRatio(21, RATIO);//Le enviamos al PWM el ratio del slider
        console.log(RATIO);//printeamos el ratio para saber el valor.
        }
//Canal 2
        w().pulseRatio(20, 0.35);
        var slider = document.getElementById('VC2');
        slider.addEventListener('input', VCF2);
        function VCF2() {
        var valor= this.value
        document.getElementById('VC2Value').innerHTML=document.getElementById('VC2').value;
        var RATIO= valor/100;
        w().pulseRatio(20, RATIO);
        }
//Canal 3
        w().pulseRatio(16, 0.35);
        var slider = document.getElementById('VC3');
        slider.addEventListener('input', VCF3);
        function VCF3() {
        var valor= this.value
        document.getElementById('VC3Value').innerHTML=document.getElementById('VC3').value;
        var RATIO= valor/100;
        w().pulseRatio(16, RATIO);
        }
//Canal 4
        w().pulseRatio(12, 0.35);
        var slider = document.getElementById('VC4');
        slider.addEventListener('input', VCF4);
        function VCF4() {
        var valor= this.value
        document.getElementById('VC4Value').innerHTML=document.getElementById('VC4').value;
        var RATIO= valor/100;
        w().pulseRatio(12, RATIO);        
        }
        
});


