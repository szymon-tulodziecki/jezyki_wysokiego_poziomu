/*import http from 'http';
import fs from 'fs';

http.createServer(function(req, res) {
	if (req.url == '/') {
		fs.readFile('./titles.json', function(err, data) {
			if (err) {
				console.error(err);
				res.end('titles.json error');
			}
			else {
				const titles = JSON.parse(data.toString());
				fs.readFile('./template.html', function(err, data) {
					if (err) {
						console.error(err);
						res.end('template.html error');
					}
					else {
						const tmpl = data.toString();
						const html = tmpl.replace('%', titles.join('</li><li>'));
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.end(html);
					}
				});
			}
		});
	}
}).listen(8000, "127.0.0.1");
*/
import http from 'http';
import fs from 'fs';

const server = http.createServer(function (req, res) {
	getTitles(res);
}).listen(8000, "127.0.0.1");
function getTitles(res) {
	fs.readFile('./titles.json', function (err, data) {
		if (err) {
			hadError(err, res);np
		}
		else {
			getTemplate(JSON.parse(data.toString()), res);
		}
	});
}
function getTemplate(titles, res) {
	fs.readFile('./template.html', function (err, data) {
		if (err) {
			hadError(err, res);
		}
		else {
			formatHtml(titles, data.toString(), res);
		}
	});
}
function formatHtml(titles, tmpl, res) {
	let html = tmpl.replace('%', titles.join('</li><li>'));
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(html);
}
function hadError(err, res) {
	console.error(err);
	res.end('Error');
}