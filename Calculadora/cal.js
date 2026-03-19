let resultadoMostrado = false;

function calcular(){
 let expresion = document.Calculadora.ans.value
     .replace(/x/g,"*")
     .replace(/÷/g,"/");
     
 document.Calculadora.ans.value = eval(expresion);
    resultadoMostrado = true;
}           

function borrarUno() {

    if (resultadoMostrado) {
        document.Calculadora.ans.value = document.Calculadora.ans.value.slice(0,0);
        resultadoMostrado = false;
    } else {
        document.Calculadora.ans.value =
        document.Calculadora.ans.value.slice(0,-1);
    }

}

function cambiarSigno(){

let valor = document.Calculadora.ans.value;

if(valor === "") return;

let i = valor.length - 1;

// retroceder mientras sea número o punto
while(i >= 0 && (!isNaN(valor[i]) || valor[i] === ".")){
    i--;
}

// si solo hay un número
if(i === -1){

    if(valor.startsWith("(-") && valor.endsWith(")")){
        document.Calculadora.ans.value = valor.slice(2,-1);
    }
    else{
        document.Calculadora.ans.value = "(-" + valor + ")";
    }

    return;
}

let izquierda = valor.slice(0,i+1);
let numero = valor.slice(i+1);

// si ya está negativo
if(numero.startsWith("(-") && numero.endsWith(")")){
    numero = numero.slice(2,-1);
}
else{
    numero = "(-" + numero + ")";
}

document.Calculadora.ans.value = izquierda + numero;

}