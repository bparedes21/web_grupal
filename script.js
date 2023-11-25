
// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ['Dakota del norte', 'Dakota del sur', 'Utah', 'Nebraska', 'Nuevo Hampshire', 'Florida']
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 = {
    label: "Tasa de desempleo %",
    data: [2.1, 2.1, 2.3, 2.3, 2.5, 2.7], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
var bubble_map = new Datamap({
    element: document.getElementById('map'),
    scope: 'usa',
    geographyConfig: {

        highlightOnHover: true,
        popupOnHover: true, // True to show the popup while hovering

        borderColor: '#444',
        borderWidth: 0.5,
        dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/usa.topo.json'
        //dataJson: topoJsonData
    },
    fills: {
        'MAJOR': '#306596',
        'MEDIUM': '#0fa0fa',
        'MINOR': '#bada55',
        defaultFill: '#dddddd'
    },
    data: {
        'FL': { fillKey: 'MINOR' },
        'NE': { fillKey: 'MINOR' }
    }

});


var mostrarContenedor = true;

function mostrarOcultarContenedor() {
  var contenedor = document.getElementById("miContenedor");

  if (mostrarContenedor) {
    contenedor.style.display = "block"; // Muestra el contenedor
  } else {
    contenedor.style.display = "none"; // Oculta el contenedor
  }

  mostrarContenedor = !mostrarContenedor; // Cambia el valor de la variable para la próxima vez
}
var mostrarContenedor1 = true;

function mostrarOcultarContenedor1() {
  var contenedor1 = document.getElementById("miContenedor1");

  if (mostrarContenedor1) {
    contenedor1.style.display = "block"; // Muestra el contenedor
  } else {
    contenedor1.style.display = "none"; // Oculta el contenedor
  }

  mostrarContenedor1 = !mostrarContenedor1; // Cambia el valor de la variable para la próxima vez
}

var mostrarContenedor2 = true;

function mostrarOcultarContenedor2() {
  var contenedor2 = document.getElementById("miContenedor2");

  if (mostrarContenedor2) {
    contenedor2.style.display = "block"; // Muestra el contenedor
  } else {
    contenedor2.style.display = "none"; // Oculta el contenedor
  }

  mostrarContenedor2 = !mostrarContenedor2; // Cambia el valor de la variable para la próxima vez
}

var mostrarContenedor3 = true;

function mostrarOcultarContenedor3() {
  var contenedor3 = document.getElementById("miContenedor3");

  if (mostrarContenedor3) {
    contenedor3.style.display = "block"; // Muestra el contenedor
    window.scrollTo(0, window.scrollY + 200); 
  } else {
    contenedor3.style.display = "none"; // Oculta el contenedor
  }

  mostrarContenedor3 = !mostrarContenedor3; // Cambia el valor de la variable para la próxima vez
}