
const generaMatriz = (n) => {
    // Inicializamos la matriz vacía pero con las filas ya creadas
    let tabla = [];
    for(let k = 0; k < n; k++) {
        tabla[k] = new Array(n + 1).fill(0); 
    }

    let f = 0; // Fila (equivale a tu 'f' en C)
    let c = 0; // Columna (equivale a tu 'c' en C)
    let contador = 1; // El valor a escribir (equivale a tu 'i' en C)

    while (contador <=  n * (n + 1)) {
        // Asignación del valor
        tabla[f][c] = contador;
        
        contador++;
        
        f = (f + 1) % n;           
        c = (c + 1) % (n + 1);   
    }

    console.table(tabla); // Para verla en consola
    return tabla;
}   

const dibujarMatriz = (matriz) => {
    
    const contenedor = document.getElementById('contenedorMatriz');
    contenedor.innerHTML = ''; // Limpia cualquier tabla generada previamente
    const tablaNgoro = document.createElement('table');
    
    // Agregamos estilos básicos por código (Tarea: ¿Cómo mejoro esto en CSS?)
    tablaNgoro.className="Tabla-N-Goro";

    // Recorremos la matriz NORMAL (fila por fila) para crear el HTML
    for (let i = 0; i < matriz.length; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < matriz[i].length; j++) {
            const td = document.createElement('td');
            td.textContent = matriz[i][j];
            
            tr.appendChild(td);
        }
        
        tablaNgoro.appendChild(tr);
    }

    contenedor.appendChild(tablaNgoro);
}


//Exportaciones
export{generaMatriz}
export{dibujarMatriz}