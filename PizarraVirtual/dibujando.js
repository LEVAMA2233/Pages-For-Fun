    
    
    
// lógica mágica del dibujo
export default function dibujar(x1, y1, x2, y2,ctx,colorPicker,grosorInput) {

    ctx.beginPath();       // Inicia un camino nuevo
    ctx.strokeStyle = colorPicker; // Color actual
    ctx.lineWidth = grosorInput;   // Grosor actual
    ctx.lineCap = 'round'; // Bordes redondeados para que se vea suave
    ctx.moveTo(x1, y1);    // Mueve el lápiz al punto inicial
    ctx.lineTo(x2, y2);    // Traza una línea al punto final
    ctx.stroke();          // Dibuja la línea
    ctx.closePath();       // Cierra el camino
    }

