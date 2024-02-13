// Imports
const http = require("http");
const serverConfig = require("./src/server");

// Configuring an http server.
const port = process.env.PORT || 8000;
const server = http.createServer(serverConfig);

// Listening for any requests on port 8000.
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
