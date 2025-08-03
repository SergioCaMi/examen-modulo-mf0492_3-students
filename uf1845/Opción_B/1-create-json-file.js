/* 
  Crea un fichero llamado "user.json" que contenga el siguiente objeto convertido en JSON:
 
  {
    "name": "Ana",
    "age": 30,
    "email": "ana@mail.com"
  }
 */

const fs = require('fs');

const datos = {
  name: "Ana",
  age: 30,
  email: "ana@mail.com",
};
const datosStr = JSON.stringify(datos, null, 2);
try {
  fs.writeFileSync("user.json", datosStr, "utf8");
} catch (error) {
  console.log("Error al crear o modificar el archivo.");
}




