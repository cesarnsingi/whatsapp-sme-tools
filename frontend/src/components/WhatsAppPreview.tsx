import { useEffect, useRef, useState } from "react";

type Message = { from: "bot" | "user"; text: string };

// Multiple chat flows
const chatFlows: Message[][] = [
  [
    { from: "bot", text: "Hi! Welcome to Cerins. What would you like to do today?" },
    { from: "user", text: "Show my invoices" },
    { from: "bot", text: "Sure! Here are your last 5 invoices." },
  ],
  [
    { from: "bot", text: "Hello! Cerins here, ready to help you." },
    { from: "user", text: "Check my payments" },
    { from: "bot", text: "Here’s your latest payment summary." },
  ],
  [
    { from: "bot", text: "Hey there! Need help managing your inventory?" },
    { from: "user", text: "Yes, show stock levels" },
    { from: "bot", text: "Your current stock is 120 items in total." },
  ],
];

export default function WhatsAppPreview() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const playFlow = (flow: Message[], index = 0) => {
      if (!isMounted) return;

      if (index >= flow.length) {
        setTimeout(() => {
          if (!isMounted) return;
          setVisibleMessages([]);
          // pick a new flow randomly
          const nextFlow = chatFlows[Math.floor(Math.random() * chatFlows.length)];
          playFlow(nextFlow, 0);
        }, 1500);
        return;
      }

      const msg = flow[index];

      if (msg.from === "bot") {
        setShowTyping(true);
        setTimeout(() => {
          if (!isMounted) return;
          setVisibleMessages((prev) => [...prev, msg]);
          setShowTyping(false);
          scrollToBottom();
          playFlow(flow, index + 1);
        }, 1000);
      } else {
        setVisibleMessages((prev) => [...prev, msg]);
        scrollToBottom();
        setTimeout(() => playFlow(flow, index + 1), 500);
      }
    };

    // start with a random flow
    playFlow(chatFlows[Math.floor(Math.random() * chatFlows.length)], 0);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-green-500 px-4 py-2 text-white font-semibold">
        WhatsApp Chat Preview
      </div>

      {/* Chat Body */}
      <div
        ref={chatContainerRef}
        className="p-4 space-y-3 bg-gray-50 min-h-[300px] max-h-[300px] overflow-y-auto"
      >
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-2 rounded-lg shadow-sm border max-w-xs wrap-break-word ${
                msg.from === "bot"
                  ? "bg-white border-gray-200"
                  : "bg-green-100 border-green-300"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {showTyping && (
          <div className="flex justify-start">
            <div className="p-2 rounded-lg shadow-sm border bg-white border-gray-200 text-gray-400 italic">
              ...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
