const http = require('http');
const url = require('url');

const port = 3000;

const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.setHeader('Content-Type', 'application/json');

    if (pathname === '/api/greet') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Hello, world!' }));
    } else if (pathname === '/api/echo') {
        const message = query.message || 'No message provided';
        res.writeHead(200);
        res.end(JSON.stringify({ echo: message }));
    } else if (pathname === '/api/update') {
        const id = query.id || 'No ID provided';
        const newData = query.newData || 'No data provided';
        res.writeHead(200);
        res.end(JSON.stringify({ id, updatedData: newData }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
