const archivo = './db/themes.json'
const fs = require('fs')

const readDatabase = (path) => {
  // Revisa si hay un archivo existente
  if (!fs.existsSync(archivo)) {
    return null;
  }

  // Si hay un archivo lo lee y transforma
  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};

module.exports = {
    readDatabase
}