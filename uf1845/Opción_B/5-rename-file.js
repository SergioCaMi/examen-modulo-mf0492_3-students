/*  Renombra el archivo "user.json" a "usuario.json". */
const fs = require('fs');

const oldName = 'user.json';
const newName = 'usuario.json';

if (fs.existsSync(oldName)) {
  fs.renameSync(oldName, newName);
  console.log(`Archivo renombrado de ${oldName} a ${newName}`);
} else {
  console.log(`El archivo ${oldName} no existe`);
}