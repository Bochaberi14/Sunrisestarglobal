/*import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="flex border-t p-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask a question..."
        className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="ml-2 rounded-md bg-accent px-4 text-sm text-white"
      >
        Send
      </button>
    </div>
  );
}*/
import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");

  function handleSend() {
    const trimmed = text.trim();
    if (!trimmed) return;

    onSend(trimmed);
    setText("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex border-t p-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a question..."
        className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="ml-2 rounded-md bg-blue-900 px-4 text-sm text-white"
      >
        Send
      </button>
    </div>
  );
}

