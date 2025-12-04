import {matrizLlena} from "./tablaNgoro"
import { dibujarMatriz } from "./tablaNgoro";




const inputFilas = document.getElementById('n');
const contenedor = document.getElementById('contenedorMatriz');
const botonCrearMatriz = document.getElementById('btnCrear');

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




