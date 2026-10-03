 "use client";

import { useState } from "react";

const suggestions = [
  "Explain automotive cybersecurity for a beginner",
  "Write a professional LinkedIn post about AI",
  "Give me 10 YouTube video ideas",
];

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I’m AITechWithSandeep AI. What would you like to work on today?" },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function send(text = input) {
    const content = text.trim();
    if (!content || busy) return;

    setMessages(m => [...m, { role: "user", content }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setMessages(m => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(m => [...m, { role: "assistant", content: `Sorry, I couldn't complete that request. ${err.message}` }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="chatBox">
      <div className="messages">
        {messages.map((m, i) => (
          <div className={`chatMessage ${m.role}`} key={i}>
            <div className="avatar">{m.role === "user" ? "YOU" : "AI"}</div>
            <div><strong>{m.role === "user" ? "You" : "AITechWithSandeep AI"}</strong><p>{m.content}</p></div>
          </div>
        ))}
        {busy && <div className="chatMessage assistant"><div className="avatar">AI</div><div><strong>AITechWithSandeep AI</strong><p className="typing">Thinking…</p></div></div>}
      </div>

      <div className="quick">
        {suggestions.map(s => <button key={s} onClick={() => send(s)}>{s}</button>)}
      </div>

      <div className="composer">
        <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); send(); } }} placeholder="Ask anything..." rows={2}/>
        <button className="send" disabled={busy || !input.trim()} onClick={() => send()}>↑</button>
      </div>
      <small className="disclaimer">AI responses can contain mistakes. Verify important information before relying on it.</small>
    </div>
  );
}
