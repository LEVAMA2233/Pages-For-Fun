import dibujar from "./dibujando.js";
import { activarGoma, desactivarGoma } from "./goma.js";

const canvas = document.getElementById('pizarra');
const ctx = canvas.getContext('2d');

const colorPicker = document.getElementById('color');
const grosorInput = document.getElementById('grosor');
const btnLimpiar = document.getElementById('limpiar');
const btnGoma = document.getElementById(`Goma`);

// Variables de estado
let dibujando = false;
let borrando = false;
let x = 0;
let y = 0;

// Ajustar el canvas al tamaño de la pantalla
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Llamamos a la función al inicio y cuando se cambia el tamaño de ventana
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Funciones del Mouse (Event Listeners)

btnGoma.addEventListener('click', () => {
    borrando = !borrando; // Cambiamos el estado (true <-> false)

    if (borrando) {
        activarGoma(ctx);
        borrando.textContent = "Usar Lápiz"; // Feedback visual en el botón
        btnGoma.classList.add("active");    // Si usas bootstrap, esto lo marca visualmente
    } else {
        desactivarGoma(ctx);
        btnGoma.textContent = "Goma";
        btnGoma.classList.remove("active");
    }
});

// Si cambiamos el color se asume que se quiere seguir dibujando, no borrando
colorPicker.addEventListener('input', () => {
    if (borrando) {
        borrando = false;
        desactivarGoma(ctx);
        btnGoma.textContent = "Goma";
        btnGoma.classList.remove("active");
    }
});

// Cuando clickeas (Empieza el trazo)
canvas.addEventListener('mousedown', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    dibujando = true;
});

// Cuando mueves el mouse (Dibuja si el click está presionado)
canvas.addEventListener('mousemove', (e) => {
    if (dibujando === true) {
        // Si es borrando, usamos un grosor fijo (20) o el doble del input. 
        // Si es lápiz, usamos lo que diga el input.
        const grosorActual = borrando ? 30 : grosorInput.value;
        dibujar(x, y, e.offsetX, e.offsetY, ctx, colorPicker.value, grosorInput.value);
        x = e.offsetX;
        y = e.offsetY;
    }
});

// Cuando sueltas el click (Deja de dibujar)
window.addEventListener('mouseup', (e) => {
    if (dibujando === true) {
        const grosorActual = borrando ? 30 : grosorInput.value;
        dibujar(x, y, e.offsetX, e.offsetY, ctx, colorPicker.value, grosorInput.value);
        x = 0;
        y = 0;
        dibujando = false;
    }
});

// Botón de Limpiar todo
btnLimpiar.addEventListener('click', () => {
    // Borra un rectángulo del tamaño de todo el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


