/*   Lee el archivo "poema.txt" y muestra cuántas líneas contiene. */
const fs = require("fs");
const path = require("path");

const rutaArchivo = path.join('..', 'poema.txt');
try {
  const data = fs.readFileSync(rutaArchivo, "utf8");
  const lines = data.split('\n').length-1; 
  console.log(`El archivo ${rutaArchivo} tiene ${lines} líneas`);
} catch (error) {
  console.log("Error en la lectura del archivo", error);
}


// NOTA: Restamos 1 al número total de líneas para quitar el último salto de línea que tiene el archivo.
