const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Si la solicitud es para la raíz de la aplicación, servir el archivo HTML principal
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, './.', 'build', 'index.html');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error interno del servidor: ${err}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf8');
      }
    });
  } else {
    // De lo contrario, servir archivos estáticos desde la carpeta 'build' de la aplicación React
    const filePath = path.join(__dirname, './.', 'build', req.url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // Página no encontrada
          fs.readFile(path.join(__dirname, './.', 'build', '404.html'), (err, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          });
        } else {
          // Error interno del servidor
          res.writeHead(500);
          res.end(`Error interno del servidor: ${err.code}`);
        }
      } else {
        // Éxito al cargar el archivo
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf8');
      }
    });
  }
});

server.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
