import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { createServer } from 'node:http';

const port = Number(process.env.PORT) || 4173;
const root = process.cwd();
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
};

createServer(async (request, response) => {
  const requestedPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const relativePath = normalize(requestedPath).replace(/^(\.\.(\/|\\|$))+/, '');
  let filePath = join(root, relativePath === '/' ? 'index.html' : relativePath);

  try {
    if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html');
    response.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream' });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Arquivo não encontrado');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`ANIMAE+ disponível em http://localhost:${port}`);
  console.log('Pressione Ctrl+C para encerrar.');
});
