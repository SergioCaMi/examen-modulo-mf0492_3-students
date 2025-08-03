/*  Crea una carpeta llamada "archivos" si no existe.
Si carpeta ya existe, muestra un mensaje de error */

 const fs = require('fs');
 
 const foldName = 'archivos';
 
if (!fs.existsSync(foldName)) {
  fs.mkdirSync(foldName);
  console.log(`Se ha creado la carpeta ${foldName}`)
} else {
  console.log(`La carpeta ${foldName} ya existe`)
}