const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("./public"));

io.on("connection", (socket) => {
    console.log("New user connected :: ", socket.id);
});

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

server.listen(5000, () => {
    console.log("server is listening");
});
