const http = require('http');
const home = require('./home');
const about = require('./about');
const contact = require('./contact');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (req.url === '/home') {
        res.end(home());
    } else if (req.url === '/about') {
        res.end(about());
    } else if (req.url === '/contact') {
        res.end(contact());
    } else if (req.url === '/') {
        res.writeHead(302, { 'Location': '/home' });
        res.end();
    } else {
        res.end('<h1>404</h1><p>Nie znaleziono strony.</p>');
    }
});

server.listen(3000, () => console.log('Serwer działa na http://localhost:3000'));
