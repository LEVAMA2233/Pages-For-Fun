const canvas = document.getElementById('pizarra');
        const ctx = canvas.getContext('2d'); // Obtenemos el contexto de dibujo 2D
        
        const colorPicker = document.getElementById('color');
        const grosorInput = document.getElementById('grosor');
        const btnLimpiar = document.getElementById('limpiar');

        // Variables de estado
        let dibujando = false;
        let x = 0;
        let y = 0;

        // B. Ajustar el canvas al tamaño de la pantalla
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        // Llamamos a la función al inicio y cuando se cambia el tamaño de ventana
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // C. Funciones del Mouse (Event Listeners)
        
        // 1. Cuando presionas el click (Empieza el trazo)
        canvas.addEventListener('mousedown', (e) => {
            x = e.offsetX;
            y = e.offsetY;
            dibujando = true;
        });

        // 2. Cuando mueves el mouse (Dibuja si el click está presionado)
        canvas.addEventListener('mousemove', (e) => {
            if (dibujando === true) {
                dibujar(x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

        // 3. Cuando sueltas el click (Deja de dibujar)
        window.addEventListener('mouseup', (e) => {
            if (dibujando === true) {
                dibujar(x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                dibujando = false;
            }
        });

        // D. La lógica mágica del dibujo
        function dibujar(x1, y1, x2, y2) {
            ctx.beginPath();       // Inicia un camino nuevo
            ctx.strokeStyle = colorPicker.value; // Color actual
            ctx.lineWidth = grosorInput.value;   // Grosor actual
            ctx.lineCap = 'round'; // Bordes redondeados para que se vea suave
            ctx.moveTo(x1, y1);    // Mueve el lápiz al punto inicial
            ctx.lineTo(x2, y2);    // Traza una línea al punto final
            ctx.stroke();          // Dibuja la línea
            ctx.closePath();       // Cierra el camino
        }

        // E. Botón de Limpiar
        btnLimpiar.addEventListener('click', () => {
            // Borra un rectángulo del tamaño de todo el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });