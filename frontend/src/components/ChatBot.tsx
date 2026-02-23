import { useState } from "react";
import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";

interface Message {
  from: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { from: "user", text: input.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post("/api/chat", { messages: updatedMessages });
      const botMessage: Message = { from: "bot", text: data.reply };
      setMessages([...updatedMessages, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 font-semibold flex justify-between items-center">
            <span>Ask Wabot</span>
            <button onClick={() => setOpen(false)} className="text-white text-sm opacity-80 hover:opacity-100">✕</button>
          </div>

          {/* Messages */}
          <ScrollToBottom className="flex-1 p-4 overflow-auto bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 ${msg.from === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                  msg.from === "user" ? "bg-green-600 text-white" : "bg-gray-200 text-black"
                }`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left my-2">
                <span className="inline-block px-3 py-2 rounded-xl text-sm bg-gray-200">Wabot is typing...</span>
              </div>
            )}
          </ScrollToBottom>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button with Pulsing Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-4 rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 transition animate-bounce"
      >
        <span className="text-2xl">💬</span>
        <span className="font-medium text-lg">Ask Wabot</span>
      </button>
    </div>
  );
}
