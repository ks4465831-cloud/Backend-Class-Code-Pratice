const WebSocket = require("ws")

const wsServer= new WebSocket.Server({port:3000})

wsServer.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
        socket.send("Message:"+msg)
        wsServer.clients.forEach((client)=>{
            client.send("message" + msg)
        })

    })

    socket.on("error",(err)=>{
        console.log(err)
    })
    socket.on("close",()=>{
        console.log("Socket disconnected")
    })
    
})