"use strict";

function frutaEmpacadaCorrectamente(entrada, salida) {
  const pila = [];
  let i = 0;

  for (let fruta of entrada) {
    pila.push(fruta);

    while (pila.length > 0 && pila[pila.length - 1] === salida[i]) {
      pila.pop();
      i++;
    }
  }

  return pila.length === 0;
}

let entradaInput = prompt("Ingresa las frutas en el orden de entrada (separadas por , ):");
let entrada = entradaInput.split(",").map(f => f.trim());

let salidaInput = prompt("Ingresa las frutas en el orden de salida (separadas por , ):");
let salida = salidaInput.split(",").map(f => f.trim());

let resultado = frutaEmpacadaCorrectamente(entrada, salida);

if (resultado) {
  alert("La secuencia de salida es posible con una pila.");
} else {
  alert("La secuencia de salida NO es posible con una pila.");
}
