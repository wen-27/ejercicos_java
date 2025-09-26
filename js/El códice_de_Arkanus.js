"use strict";

const valores = {
  "☽": 1,
  "☾": 5,
  "♁": 10,
  "⚕": 50,
  "⚡": 100
};


const simbolos = [
  { valor: 100, simbolo: "⚡" },
  { valor: 50,  simbolo: "⚕" },
  { valor: 10,  simbolo: "♁" },
  { valor: 5,   simbolo: "☾" },
  { valor: 1,   simbolo: "☽" }
];


function decodeSpell(cadena) {
  let total = 0;

  for (let i = 0; i < cadena.length; i++) {
    let actual = valores[cadena[i]];
    let siguiente = valores[cadena[i + 1]];

    if (actual === undefined) {
      return NaN; 
    }

    if (siguiente !== undefined && actual < siguiente) {
      total -= actual;
    } else {
      total += actual;
    }
  }

  return total;
}


function encodeSpell(numero) {
  let resultado = "";

  for (let i = 0; i < simbolos.length; i++) {
    while (numero >= simbolos[i].valor) {
      resultado += simbolos[i].simbolo;
      numero -= simbolos[i].valor;
    }
  }

  return resultado;
}


console.log(decodeSpell("☽☽☽"));   // 3
console.log(decodeSpell("☽☾"));     // 4
console.log(decodeSpell("☾☽"));     // 6
console.log(decodeSpell("☽☽☽⚡")); // 101
console.log(decodeSpell("☽⚕"));     // 49
console.log(decodeSpell("⚕.♒"));   // NaN


let numero = parseInt(prompt("Ingresa un número mágico:"));
let simbolo = encodeSpell(numero);
alert("Tu número en símbolos mágicos es: " + simbolo);

