
"use strict";

function getCompromisedFiles(lastSafeDownload, droneLogs) {

  const comprometidos = new Set();

  for (let [id, timestamp] of droneLogs) {

    if (timestamp > lastSafeDownload) {
      comprometidos.add(id); 
    }
  }


  return Array.from(comprometidos).sort((a, b) => a - b);
}


const lastSafeDownload = 1670000000;
const droneLogs = [
  [42, 1670000500],  
  [13, 1670000000],  
  [8, 1670000700],   
  [8, 1670000001],   
  [99, 1669999999],   
];

console.log(getCompromisedFiles(lastSafeDownload, droneLogs));



const lastSafeDownload2 = 2000;
const droneLogs2 = [
  [5, 1999],  
  [10, 2001], 
  [7, 3000],  
  [10, 2500], 
  [1, 2000],   
];

console.log(getCompromisedFiles(lastSafeDownload2, droneLogs2));

const lastSafeDownload3 = 5000;
const droneLogs3 = [
  [2, 4000],
  [3, 5000],
  [4, 4500],
];

console.log(getCompromisedFiles(lastSafeDownload3, droneLogs3));
