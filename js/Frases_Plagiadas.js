"use strict";

function detectarPlagio(base, frasesEstudiante) {
  function normalizar(frase) {
    return frase
      .trim()
      .toLowerCase()
      .replace(/[.!?]$/, "");
  }

  const baseNormalizada = base.map(normalizar);
  const plagiadas = [];

  for (let frase of frasesEstudiante) {
    if (baseNormalizada.includes(normalizar(frase))) {
      plagiadas.push(frase);
    }
  }

  return plagiadas;
}

let baseInput = prompt("Ingresa las frases de la base sospechosa (separadas por | ):");
let base = baseInput.split("|");

let estudianteInput = prompt("Ingresa las frases del estudiante (separadas por | ):");
let frasesEstudiante = estudianteInput.split("|");

let resultado = detectarPlagio(base, frasesEstudiante);

if (resultado.length > 0) {
  alert("Frases plagiadas:\n" + resultado.join("\n"));
} else {
  alert("No se encontraron frases plagiadas ");
}
