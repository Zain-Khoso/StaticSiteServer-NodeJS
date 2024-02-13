// This file holds the server function that which is basically our whole server.

// Imports
const fs = require("fs");
const path = require("path");

const server = function (request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // Serving an HTML file.
    const filePath = path.join("public", "index.html");
    const data = fs.readFileSync(filePath, "utf8");

    response.end(data.toString());
};

module.exports = server;
