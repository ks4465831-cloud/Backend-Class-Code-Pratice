const express = require("express")
const app = express()
const http = require("http")
const WebSocket = require("socket.io")
const port = 3000

const server = http.createServer(app)

const io = new WebSocket.Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection",(socket)=>{
    console.log("Socket connected: ",socket.io)

    socket.on("message",(msg)=>{
        socket.emit("message",msg)
    })

    socket.on("disconnect",()=>{
        console.log("Socket disconnected: ",socket.io)
    })
})

server.listen(port,()=>{
    console.log("Server Connected")
})
