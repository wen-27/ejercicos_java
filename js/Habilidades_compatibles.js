
"use strict";

  function candidatosCompatibles(oferta, candidatos) {
  const minimo = Math.floor(oferta.length * 0.7);
  const ofertaNormalizada = oferta.map(skill => skill.toLowerCase());
  const compatibles = [];

  for (let candidato of candidatos) {
    const skillsNormalizadas = candidato.skills.map(skill => skill.toLowerCase());

    let coincidencias = 0;
    for (let skill of skillsNormalizadas) {
      if (ofertaNormalizada.includes(skill)) {
        coincidencias++;
      }
    }

    if (coincidencias >= minimo) {
      compatibles.push(candidato.id);
    }
  }

  return compatibles.sort();
}

let ofertaInput = prompt("Ingresa las habilidades de la oferta (separadas por , ):");
let oferta = ofertaInput.split(",").map(s => s.trim());

let numCandidatos = Number(prompt("¿Cuántos candidatos quieres ingresar?"));
let candidatos = [];

for (let i = 0; i < numCandidatos; i++) {
  let id = prompt(`ID del candidato #${i + 1}:`);
  let skillsInput = prompt(`Habilidades de ${id} (separadas por , ):`);
  let skills = skillsInput.split(",").map(s => s.trim());

  candidatos.push({ id, skills });
}

let resultado = candidatosCompatibles(oferta, candidatos);

if (resultado.length > 0) {
  alert("Candidatos compatibles:\n" + resultado.join("\n"));
} else {
  alert("Ningún candidato cumple con el 70% de habilidades.");
}
