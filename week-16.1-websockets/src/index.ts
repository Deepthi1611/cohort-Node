import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port: 8080});

// event handler for new connections - similar to root request in HTTP server
// for a user this socket connection is long lived and is called multiple times
wss.on('connection', function connection(socket) {
//   send a welcome message to the client on connection
    console.log('New client connected');
    socket.send('Welcome to the WebSocket server!');

    setInterval(() => {
        const message = `Server time: ${new Date().toLocaleTimeString()}`;
        socket.send(message);
    }, 500);
    
    // when a message is received from the client
    socket.on('message', function message(data) {
        if(data.toString() === 'ping') socket.send('pong');
    });
});