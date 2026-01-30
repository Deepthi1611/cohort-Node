import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// whenever a client connects, this connection gets called with a websocket object 
// which lets us communicate with that specific client
// web sockets don't have methods like get and post, instead they have events like message, open, close, error

let userCount = 0;

wss.on("connection", (ws) => {
    userCount++;
    console.log('user connected, total users:', userCount); 
});

console.log("WebSocket server is running on ws://localhost:8080");