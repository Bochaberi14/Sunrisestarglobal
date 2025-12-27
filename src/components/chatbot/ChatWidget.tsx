import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "👋 Hello! I am your FAQ Assistant. I provide general educational info about Sunrise Star Global Trading LLC. Please note, this is for educational purposes only.",
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);

    // Mock API call (replace with real backend)
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: trimmed }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "bot", content: data.response },
    ]);
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Open FAQ Chat"
      >
        💬
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-6 right-4 sm:bottom-20 sm:right-6 w-full max-w-xs sm:w-80 rounded-2xl border border-slate-200 bg-white shadow-xl flex flex-col z-50">
          <div className="border-b px-4 py-3 font-medium text-primary rounded-t-2xl">
            FAQ Assistant
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[60vh]">
            {messages.map((msg, i) => (
              <ChatMessage key={i} role={msg.role} content={msg.content} />
            ))}
            <div ref={chatEndRef} />
          </div>

          <ChatInput onSend={sendMessage} />
        </div>
      )}
    </>
  );
}

