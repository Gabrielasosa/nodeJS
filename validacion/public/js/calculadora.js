var borrar = false;
function deletecarac() {
	var caja2 = document.f1.txtcaja2.value;
	if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel != true) {
		document.f1.txtcaja2.value = "0";
	}
	else if (blocdel != true) {
		var res = caja2.substring(0, caja2.length - 1);
		document.f1.txtcaja2.value = res;
	}
}
function escribir(n) {
	var caja2 = document.f1.txtcaja2.value;
	if (borrar) {
		//alert("se borro");
		document.f1.txtcaja2.value = "";
		borrar = false;
		document.f1.txtcaja2.value = n;
	}
	else if (caja2 == "0" && n != ".") {
		cajao = caja2.replace("0", "")
		document.f1.txtcaja2.value = cajao + n;
	}
	else {
		document.f1.txtcaja2.value = caja2 + n;
	}
}
function raiz() {
	var caja1 = document.f1.txtcaja1.value;
	var caja2 = document.f1.txtcaja2.value;
	document.f1.txtcaja1.value = "Math.sqrt(" + caja2 + caja1 + ")";
	document.f1.txtcaja2.value = "";
}
function arit(o) {
	var caja1 = document.f1.txtcaja1.value;
	var caja2 = document.f1.txtcaja2.value;
	var unum = caja1.substring(caja1.length - 1);
	calcular()
	if (unum == "+" || unum == "-" || unum == "*" || unum == "/") {
		unum = unum.replace(unum, o);
		var res = caja1.substring(0, caja1.length - 1);
		document.f1.txtcaja1.value = res + unum;
	}
	if (caja1 == "" && caja2 != "") {
		document.f1.txtcaja1.value = caja2 + o;
	}
	else {
		document.f1.txtcaja1.value = caja1 + caja2 + o;
	}
	borrar = true;
}
function calcular() {
	var caja1 = document.f1.txtcaja1.value;
	var caja2 = document.f1.txtcaja2.value;
	document.f1.txtcaja2.value = eval(caja1 + caja2);
	document.f1.txtcaja1.value = "";
	borrar = true;
	blocdel = true;
}
function masmenos() {
	var caja2 = document.f1.txtcaja2.value;
	if (caja2 > 0) {
		document.f1.txtcaja2.value = "(-" + caja2 + ")";
	}
	else {
		cajaplus = caja2.replace(/[-|(|)]/, "");
		document.f1.txtcaja2.value = cajaplus;
	}
}
function potencia(n) {
	var caja2 = document.f1.txtcaja2.value;
	// 	var caja1 = document.f1.txtcaja1.value;
	// 	var caja2 = document.f1.txtcaja2.value;
	// 	document.f1.txtcaja2.value = Math.pow(caja1, caja2);
	// 	//var result = Math.pow(x,y);
	// 	//document.form.visor.value = result;
	// 	//document.f1.txtcaja2.value=Math.pow(x,y);

	// var potencia = document.f1.txtcaja2.value;
	// 	document.f1.txtcaja2.value = Math.pow(caja1,caja2);
	// 	// if(!euro){
	// 	// 	alert("No es un numero")
	// 	// }
	caja2.value = Math.pow(caja1, caja2)
}

//cambio de divisas

//EUROS

function euro() {
	var euro = document.f1.txtcaja2.value;
	document.f1.txtcaja2.value = parseFloat(document.f1.txtcaja2.value) * 0.857573;
	if (!euro) {
		alert("No es un numero")
	}
}

//Fin EUROS

//USD

function dollar() {
	var dollar = document.f1.txtcaja2.value;
	document.f1.txtcaja2.value = parseFloat(document.f1.txtcaja2.value) / 0.857573;
}

//Fin USD

/*function convertir_a_dollares(euro)
{
numero = /[0-9\.]$/

if (!numero.exec(euro))
{
alert("Esto no es un número");
}
else
{
dollar = parseFloat(1.3086);
resultado = dollar*parseFloat(euro);
document.getElementById("total").innerHTML = euro + " euros son... " + resultado.toFixed(2) + " dollares";
}
}

function convertir_a_euros(dollar)
{
numero = /[0-9\.]$/

if (!numero.exec(dollar))
{
alert("Esto no es un número");
}
{
euro = parseFloat(0.7641);
resultado = euro*parseFloat(dollar);
document.getElementById("total").innerHTML = dollar + " dollares son ... " + resultado.toFixed(2) + " euros";
}
}*/
//---------------------
function sumar() {
	var result = 0;
	try {
		if (arguments.length > 10) {
			throw console.error('Demasiados datos');
			console.log("Hola");
		}
	}
	catch (err) {
		console.error('algo')
	}
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}

	return result;
}

console.log(sumar(3, 4, 34, 5, 7, 8, 1, 32)); // 94
console.log(sumar(3, 4, 34, 5, 7, 8, 1, 32, 3, 5, 8)); // Error: Demasiados datos
// El resto del código, será ignorado tras lanzar la excepción...

function comprobarPass(euro) {
	var msg = {};
	try {
		if (euro.length > 6) throw 'corto';
		if (euro.length < 10) throw 'largo';
		msg.status = 'el euro es corto';
	} catch (err) {
		if (err == 'corto') msg.status = 'el euro es muy corto';
		if (err == 'largo') msg.status = 'el euro es muy largo'
	} finally {
		console.log('nose que coño pasa')
	}
}