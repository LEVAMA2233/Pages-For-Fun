// goma.js
export const activarGoma = (ctx) => {
    // Cambiamos el modo de mezcla para que "recorte" (borre)
    ctx.globalCompositeOperation = 'destination-out';
    // Opcional: Cambiar el cursor, investigar como hacer que parezca goma 
    ctx.canvas.style.cursor = 'cell';
};

export const desactivarGoma = (ctx) => {
    // Regresa al modo normal de "pintar encima"
    ctx.globalCompositeOperation = 'source-over';
    // Regresa el cursor normal
    ctx.canvas.style.cursor = 'crosshair';
};
