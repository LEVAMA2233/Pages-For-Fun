import {generaMatriz} from "./tablaNgoro.js"
import { dibujarMatriz } from "./tablaNgoro.js";

const botonCrearMatriz = document.getElementById('btnCrear');
const inputFilas = document.getElementById('n');
const contenedor = document.getElementById('contenedorMatriz');



botonCrearMatriz.addEventListener('click', function() {
    const n = Number(inputFilas.value);

    if (n <= 0||n>100) {
        alert("Por favor ingresa un número válido mayor a 0 o menor a 100");
        return;
    }

    // 1. Primero generamos la matriz lógica (los datos)
    const matrizLlena = generaMatriz(n);
    
    // 2. Después dibujamos esa matriz en el HTML
    dibujarMatriz(matrizLlena);
});




