'use strict';//es opcional y lo hace mas estricto


//probando
console.log('Hola mundo con NodeJS');
console.log("------------")
//recoger los párametros que le introduzcamos por la consola y mostrándolos posteriormente.
var params = process.argv.slice(2);
//console.log(params)

console.log(" ")
console.log("------------")
//Lo que estamos haciendo es recoger los dos primeros números y parseandolos a tipo float, ya que el tipo recogido por consola es string.
var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);


// creando una plantilla de texto, y mostrándola por consola, con lo cual, nos mostrará la suma de los dos primeros números que metamos por consola.
var suma= `La suma es: ${numero1 + numero2}`;

console.log(suma)
console.log(" ")
console.log("------------")
//con la multiplicacion
var multiplicacion = `La Multiplicacion  es: ${numero1 * numero2}`;
console.log(multiplicacion)
console.log(" ")
console.log("------------")
//con la division
var division = `La Division  es: ${numero1 / numero2}`;
console.log(division)
console.log(" ")
console.log("------------")
//con la resta
var resta = `La resta  es: ${numero1 - numero2}`;
console.log(resta)

