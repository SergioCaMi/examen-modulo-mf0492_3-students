/*   Añade la siguiente línea al final del fichero "log.txt":
 
  "Nuevo acceso detectado."
 
  Si el fichero no existe, debe crearse. 

  */
const fs = require('fs');


const datosStr = "\nNuevo acceso detectado."
try {
  fs.appendFileSync("log.txt", datosStr, "utf8");
  console.log('Línea añadida a log.txt')
} catch (error) {
  console.log("Error al añadir datos al archivo.");
}


