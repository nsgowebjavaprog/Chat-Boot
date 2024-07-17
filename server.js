// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin : "*",
        // methods: ["GET", "POST"],
        // allowedHeaders: ["my-custom-header"],
        // credentials: true
    }
});


io.on("connection", (socket) =>{
    console.log("what is socket:", socket);
    console.log("socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("what is payload", payload);
        io.emit("chat",payload)
    }); 
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, ()=>{
    console.log("server is listening at port 3000...")
});