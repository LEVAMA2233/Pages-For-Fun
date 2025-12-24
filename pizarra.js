import dibujar from "./dibujando.js";

const canvas = document.getElementById('pizarra');
const ctx = canvas.getContext('2d'); 
        
const colorPicker = document.getElementById('color');
const grosorInput = document.getElementById('grosor');
const btnLimpiar = document.getElementById('limpiar');
const btnGoma = document.getElementById(`Goma`);

        // Variables de estado
        let dibujando = false;
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
        
        // Cuando clickeas (Empieza el trazo)
        canvas.addEventListener('mousedown', (e) => {
            x = e.offsetX;
            y = e.offsetY;
            dibujando = true;
        });

        // Cuando mueves el mouse (Dibuja si el click está presionado)
        canvas.addEventListener('mousemove', (e) => {
            if (dibujando === true) {
                dibujar(x, y, e.offsetX, e.offsetY,ctx,colorPicker.value,grosorInput.value);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

        // Cuando sueltas el click (Deja de dibujar)
        window.addEventListener('mouseup', (e) => {
            if (dibujando === true) {
                dibujar(x, y, e.offsetX, e.offsetY,ctx,colorPicker.value,grosorInput.value);
                x = 0;
                y = 0;
                dibujando = false;
            }
        });

        // Botón de Limpiar
        btnLimpiar.addEventListener('click', () => {
            // Borra un rectángulo del tamaño de todo el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });


        /*
        //Botón de Goma
        btnGoma.addEventListener(`click`, () => {
            ctx.
        });*/