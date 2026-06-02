// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

const { aestTime, hora } = today.getDate(); // number : 24h-format
const saludo = hora < 12 ? "Buenos días"
    : hora < 20 ? "Buenas tardes" : "Buenas noches";

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    res.end(`${saludo}, Señor STARK! La fecha hoy es ${aestTime}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
