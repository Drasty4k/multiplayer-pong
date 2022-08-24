const http = require("http");
const io = require("socket.io");

const apiServer = require("./api");
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const socket = require("./sockets");

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

socket.listen(socketServer);
