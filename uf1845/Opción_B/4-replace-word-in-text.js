/*   Lee el fichero "poema.txt" y reemplaza todas las apariciones de la palabra "noche" por "día".
  Guarda el resultado en un nuevo archivo llamado "poema-editado.txt".
  */
const fs = require('fs');


let poema;
try {
  poema = fs.readFileSync("poema.txt", "utf8");
  poema = poema.replace(/la noche/gi, 'el día');
  fs.writeFileSync("poema-editado.txt", poema, "utf8");
  console.log('Archivo poema-editado.txt creado con palabra cambiada ')
} catch (error) {
  console.log("Error en la operación", error);
}


// NOTA: He añadido el artículo (la/el) para dar algo más de sentido al resultado final.