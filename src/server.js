// This file holds the server function that which is basically our whole server.

// Imports
const fs = require("fs");
const path = require("path");

const server = function (request, response) {
    // Setting the content type of our response.
    response.setHeader("Content-Type", "text/html");

    if (request.url === "/") {
        // Setting a success status code for our response.
        response.statusCode = 200;

        // Serving an HTML file.
        const filePath = path.join("public", "index.html");
        const data = fs.readFileSync(filePath, "utf8");

        response.end(data.toString());
    } else if (request.url === "/about") {
        // Setting a success status code for our response.
        response.statusCode = 200;

        // Serving an HTML file.
        const filePath = path.join("public", "about.html");
        const data = fs.readFileSync(filePath, "utf8");

        response.end(data.toString());
    } else {
        // Setting a 404 status code for our response.
        response.statusCode = 404;

        // Serving an HTML file.
        const filePath = path.join("public", "error.html");
        const data = fs.readFileSync(filePath, "utf8");

        response.end(data.toString());
    }
};

module.exports = server;
