var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.write(data);
            console.log(data);
        });
        response.end();
    } else {
        fs.readFile('./images/404.jpg', function (err, data) {
            response.write('<img src="./images/404.jpg" alt="Wrong address!">');
        });
        response.end();
    }
});

server.listen(8080);