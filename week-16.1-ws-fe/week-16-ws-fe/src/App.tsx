import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [wsocket, setWsocket] = useState();

  const inputRef = useRef();

  function sendMessage() {
    // logic to send message to WebSocket server 
    if(!wsocket) return;

    const message = inputRef.current.value;

    wsocket.send(message);
  }

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setWsocket(socket);

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <input type="text" placeholder="Type a message..." ref={inputRef} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
