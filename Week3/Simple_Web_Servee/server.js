const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 3000;

// Simple logging utility
const log = {
    info: (msg) => console.log(`[INFO] ${new Date().toISOString()} - ${msg}`),
    error: (msg, err) => console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, err),
    warn: (msg) => console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`)
};

const requestListener = async function (req, res) {
    try {
        log.info(`${req.method} ${req.url} - ${req.headers['user-agent'] || 'Unknown'}`);
        if (req.url === '/') {
            try {
                const data = await fs.readFile(__dirname + '/home.html');
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(data);
            } catch (error) {
                log.error('Failed to read index.html', error);
                res.writeHead(500);
                res.end('<h1>Internal Server Error</h1><p>Unable to load page.</p>');
            }
        } else if (req.url === '/about') {
            try {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(`<html><body><h1>Assignment: Building a Simple Web Server in Node.js</h1><td>In this assignment, I created a simple web server using Node.js. This server serves a basic HTML page and handles different routes including a homepage and an about page. This server is be able to:</td>
<p> 1. Serve an HTML file for the home page.</p>
<p> 2. Display a simple text response for an about page.</p>
<p> 3. Handle invalid routes with a 404 response.</p>
</body></html>`);
            } catch (error) {
                log.error('Failed to read index.html', error);
                res.writeHead(500);
                res.end('<h1>Internal Server Error</h1><p>Unable to load page.</p>');
            }
        } else if (req.url === '/error') {
            throw new Error('Simulated error for testing');
        } else {
            res.writeHead(404);
            res.end('<h1>Error 404 (Not Found)</h1><p>The requested resource was not found.</p>');
        }
        
    } catch (error) {
        log.error('Unhandled error in request handler', error);
        const errorMessage = process.env.NODE_ENV !== 'production'
            ? error.message
            : 'An unexpected error occurred';
        res.writeHead(500);
        res.end(`<h1>Internal Server Error</h1><p>${errorMessage}</p>`);
    }
};

const server = http.createServer(requestListener);

// Handle server-level errors
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        log.error(`Port ${port} is already in use`);
    } else {
        log.error('Server error', error);
    }
    process.exit(1);
});

// Handle client connection errors
server.on('clientError', (err, socket) => {
    log.warn('Client error: ' + err.message);
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(port, host, () => {
    log.info(`Server is running on http://${host}:${port}`);
});
