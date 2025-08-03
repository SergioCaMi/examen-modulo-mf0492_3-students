/*   Lee el fichero "user.json" y muestra por consola el nombre del usuario.
 */

const fs = require("fs");

try {
  const data = fs.readFileSync("user.json", "utf8");
  const users = JSON.parse(data);
  console.log(`Nombre del usuario: ${users.name}`);
} catch (error) {
  console.log("Error en la lectura del archivo", error);
}
