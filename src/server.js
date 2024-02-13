// This file holds the server function that which is basically our whole server.

const server = function (request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Success</h1>");
};

module.exports = server;
