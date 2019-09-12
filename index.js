function adicao(){
	var a = document.getElementById("v1").value;
	var b = document.getElementById("v2").value;
	var c = (parseInt(a) + parseInt(b));
	document.getElementById("resultado").innerHTML = c
	
}
function subitracao(){
	var a = document.getElementById("v1").value;
	var b = document.getElementById("v2").value;
	var c = (parseInt(a) - parseInt(b));
	document.getElementById("resultado").innerHTML = c
}
function multiplicacao(){
	var a = document.getElementById("v1").value;
	var b = document.getElementById("v2").value;
	var c = (parseInt(a) * parseInt(b));
	document.getElementById("resultado").innerHTML = c
}
function divisao(){
	var a = document.getElementById("v1").value;
	var b = document.getElementById("v2").value;
	var c = (parseInt(a) / parseInt(b))
	document.getElementById("resultado").innerHTML = c
}
function elevar(){
	var a = document.getElementById("v1").value;
	var b = document.getElementById("v2").value;
	var c = (parseInt(a) ** parseInt(b));
	document.getElementById("resultado").innerHTML = c
}