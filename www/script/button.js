//En caso de que queramos añadir nuevas ciudades

import { temperaturas, temp, addRow, generateTable } from "./script.js";

//Creamos un objeto ciudad
function City() {
  this.city = prompt("Que ciudad?");
  this.min = +prompt("Temperatura mínima");
  this.max = +prompt("Temperatura máxima");
}

//Añadimos la linea correspondiente al nuevo objeto ciudad a la tabla al pulsar el boton 'Añadir'
const add = document.querySelector(".add");
add.addEventListener("click", function () {
  const location = new City();
  temperaturas.push(location);
  addRow(location);
});

//Añadimos evento para el boton de borrar entrada de la tabla
const eraser = document.querySelector(".delete");
eraser.addEventListener("click", function () {
  const location = prompt("Que ciudad quieres eliminar?");
  for (let i = 0; i <= temperaturas.length; i++) {
    if (temperaturas[i].city === location) {
      temp.deleteRow(i + 1);
    }
  }
});
