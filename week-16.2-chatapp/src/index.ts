import { WebSocketServer, WebSocket } from "ws";

const sockets = new WebSocketServer({ port: 8080 });

// whenever a client connects, this connection gets called with a websocket object 
// which lets us communicate with that specific client
// web sockets don't have methods like get and post, instead they have events like message, open, close, error

let userCount = 0;
let allSockets: WebSocket[] = [];

// when a client connects
sockets.on("connection", (socket: WebSocket) => {
    userCount++;
    allSockets.push(socket);
    console.log('user connected, total users:', userCount); 

    // when we receive a message from a client
    socket.on("message", (message) => {
        // when we receive a message from a client, we want to broadcast it to all connected clients
        console.log("received:", message.toString());
        // sending message back to the same client
        // socket.send(`Sent from the server: ${message.toString()}`);

        // send the message to all connected clients
        allSockets.forEach((s) => {
            s.send(`User says: ${message.toString()}`);
        });
    });

    // when a client disconnects
    socket.on("disconnect", () => {
        userCount--;
        allSockets = allSockets.filter(s => s !== socket);
        console.log('user disconnected, total users:', userCount); 
    });

});

console.log("WebSocket server is running on socket://localhost:8080");