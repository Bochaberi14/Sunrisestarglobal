export default function ChatMessage({
  role,
  content,
}: {
  role: "user" | "bot";
  content: string;
}) {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[85%] rounded-xl px-4 py-2 text-sm ${
        isUser
          ? "ml-auto bg-accent text-white"
          : "bg-slate-100 text-primary"
      }`}
    >
      {content}
    </div>
  );
}