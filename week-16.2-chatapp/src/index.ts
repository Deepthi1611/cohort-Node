import { WebSocketServer, WebSocket } from "ws";

const sockets = new WebSocketServer({ port: 8080 });

// whenever a client connects, this connection gets called with a websocket object 
// which lets us communicate with that specific client
// web sockets don't have methods like get and post, instead they have events like message, open, close, error

interface User {
    socket: WebSocket;
    room: string
}
let userCount = 0;
let allSockets: User[] = [];

// when a client connects
sockets.on("connection", (socket: WebSocket) => {
    userCount++;
    // for broadcasting messages to all connected clients instead of people in same room
    // allSockets.push(socket);
    console.log('user connected, total users:', userCount); 

    // when we receive a message from a client
    socket.on("message", (message) => {
        // when we receive a message from a client, we want to broadcast it to all connected clients
        // console.log("received:", message.toString());
        // sending message back to the same client
        // socket.send(`Sent from the server: ${message.toString()}`);

        // send the message to all connected clients in this case allsockets is an array of all the connected sockets
        // allSockets.forEach((s) => {
        //     s.send(`User says: ${message.toString()}`);
        // });

        // broadcast the message to all connected clients in the same room
        // parsing the message to get room info - converting json into js object
        const parsedMessage = JSON.parse(message as unknown as string);
        console.log('parsed message:', parsedMessage);
        if(parsedMessage.type === "join") {
            console.log(`User joined room: ${parsedMessage.payload.roomId}`);
            allSockets.push({socket, room: parsedMessage.payload.roomId});
            console.log('all sockets:', allSockets);
        } else if(parsedMessage.type === "chat") {
            console.log(`User sent message: ${parsedMessage.payload.message}`);
            // find the room of the sender socket
            const currentRoom = allSockets.find(s => s.socket === socket)?.room;
            console.log('current room:', currentRoom);
            // filter all sockets in the same room
            const socketsInRoom = allSockets.filter(s => s.room === currentRoom);
            // send the message to all sockets in the same room
            socketsInRoom.forEach((s) => {
                s.socket.send(`User says: ${parsedMessage.payload.message}`);
            });
         }
    });

    // when a client disconnects
    // socket.on("disconnect", () => {
    //     userCount--;
    //     allSockets = allSockets.filter(s => s !== socket);
    //     console.log('user disconnected, total users:', userCount); 
    // });

});

console.log("WebSocket server is running on socket://localhost:8080");