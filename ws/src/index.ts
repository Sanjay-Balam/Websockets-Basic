import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });


// wss.on("connection", function (socket) {
//     console.log("User connected")

//     setInterval(()=>{
//         socket.send("The current price of solana is "+ Math.random()*10);
//     },2000);

//     socket.on("message", function (e) {
//         console.log(e.toString());
//     })
// });


wss.on("connection", function (socket) {
    console.log("User connected")

    socket.on("message", function (e) {
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
})