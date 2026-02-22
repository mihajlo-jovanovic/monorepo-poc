import http from 'node:http';

const host = process.env.HOST ?? '0.0.0.0';
const port = Number(process.env.PORT ?? 3000);

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UI App</title>
  </head>
  <body>
    <main>
      <h1>UI App</h1>
      <p>Basic Node.js UI scaffold is running.</p>
    </main>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', app: 'ui' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(port, host, () => {
  console.log(`UI server listening on http://${host}:${port}`);
});
