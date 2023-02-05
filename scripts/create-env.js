const fs = require(`fs`);

try {
  if (!process.env.API) {
    throw new Error('La variable de entorno "API" no está definida.');
  }

  const data = `API=${process.env.API}\n`;
  if (fs.existsSync('./.env')) {
    console.warn('.env ya existe, se sobreescribirá el archivo.');
  }
  fs.writeFileSync('./.env', data);
  console.log('Se ha escrito en .env correctamente.');
} catch (error) {
  console.error(error);
}