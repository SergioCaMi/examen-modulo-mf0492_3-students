/*  Borra el fichero "temp.txt" solo si existe en el directorio actual.
 Si fichero no existe, muestra un mensaje de error */

 const fs = require('fs');
 
 const fileName = 'temp.txt';
 
 if (fs.existsSync(fileName)) {
   fs.unlinkSync(fileName);
   console.log(`archivo ${fileName} borrado`);
 } else {
   console.log(`El archivo ${fileName} no existe`);
 }