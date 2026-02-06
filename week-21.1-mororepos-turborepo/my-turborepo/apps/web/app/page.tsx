"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "Hey there 👋", mine: false },
    { text: "Hi! How are you?", mine: true },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">

      {/* Header */}
      <div className="bg-white px-4 py-3 shadow font-semibold text-lg">
        💬 Chat Room
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
              msg.mine
                ? "ml-auto bg-purple-600 text-white rounded-br-sm"
                : "bg-white text-gray-800 rounded-bl-sm"
            }`}
          >
            {msg.text}
          </div>
        ))}

      </div>

      {/* Input bar */}
      <div className="bg-white p-3 flex items-center gap-3 shadow-lg">

        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={() => {
            if (!input.trim()) return;
            setMessages(prev => [...prev, { text: input, mine: true }]);
            setInput("");
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition"
        >
          Send
        </button>

      </div>
    </div>
  );
}