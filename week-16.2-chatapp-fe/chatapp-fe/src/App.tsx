import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  // something that does not trigger a re-render when it changes, we store it in a ref
  const wsRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState(['hi there', 'hello']);

  useEffect(() => {
    // WebSocket connection logic will go here
    const wsocket = new WebSocket('ws://localhost:8080');
    wsRef.current = wsocket;

    // when connection is open
    wsocket.onopen = () => {
      console.log('Connected to WebSocket server');
      wsocket.send(JSON.stringify({ type: 'join', payload: { roomId: 'red' } }));
    };

    // when we get message from the server
    wsocket.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setMessages(prev => [...prev, event.data]);
    };

    // cleanup on unmount
    return () => {
      wsocket.close();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100">

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-red-200 to-red-300 rounded-b-2xl shadow-inner">
        {/* messages will go here */}
        {
          messages.map((msg, index) => (
            <div key={index} className="mb-2 p-3 bg-white rounded-lg shadow">
              {msg}
            </div>
          ))
        }
      </div>

      {/* Input area */}
      <div className="flex items-center gap-3 p-4 bg-white shadow-md">

        <input
          type="text"
          id='message'
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button className="px-5 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
        onClick={() => {
          const message = document.getElementById("message")?.value
          wsRef.current?.send(JSON.stringify({
            type: "chat",
            payload: {
              message
            }
          }));
        }}
        >
          Send
        </button>

      </div>
    </div>
  )
}

export default App