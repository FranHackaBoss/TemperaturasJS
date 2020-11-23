const temperaturas = [
  {
    city: "A coruña",
    min: 17,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 32,
  },
  {
    city: "Lugo",
    min: -20,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
  {
    city: "Antártida",
    min: -50,
    max: -10,
  },
];

const temp = document.querySelector("#temperaturas");
console.log(temp);

//Creamos diferentes nombres de las clases en funcion de las temperaturas para poder añadir los colores
function getClass(temperature) {
  return temperature < 20
    ? "low"
    : temperature >= 20 && temperature < 30
    ? "medium"
    : "high";
}

//Tomamos un objeto y generamos una línea de una tabla añadiendole clases a algunas de sus propiedades
function addRow(obj) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <tr>
          <td>${obj.city}</td>
          <td class="${getClass(obj.min)}">${obj.min}</td>
          <td class="${getClass(obj.max)}">${obj.max}</td>
        </tr>`;
  temp.appendChild(tr);
}

//Creamos una tabla con los objetos del array temperaturas
function generateTable(arr) {
  for (let element of arr) {
    addRow(element);
  }
}

generateTable(temperaturas);

export { temperaturas, temp, addRow, generateTable };
