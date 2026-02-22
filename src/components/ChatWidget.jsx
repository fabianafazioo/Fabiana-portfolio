import { useEffect, useRef, useState } from "react";
import "../styles/chatwidget.css";

const STARTER = {
  role: "assistant",
  content:
    "Hi! I’m Fabiana’s assistant 💜 Ask me anything about her background, projects, skills, or education.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([STARTER]);

  const listRef = useRef(null);

  useEffect(() => {
    // auto-scroll to bottom
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (e) {
        setMessages([
            ...next,
            {
            role: "assistant",
            content:
                `I couldn’t reach the chat service. Error: ${e.message || "unknown"}`,
            },
        ]);
        console.error(e);
        } finally {
        setLoading(false);
        }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="chatfab">
      {open ? (
        <div className="chatfab-panel" role="dialog" aria-label="Chat about Fabiana">
          <div className="chatfab-header">
            <div className="chatfab-title">
              <div className="chatfab-dot" />
              Ask about Fabiana
            </div>

            <button className="chatfab-iconbtn" onClick={() => setOpen(false)} aria-label="Minimize chat">
              —
            </button>
          </div>

          <div className="chatfab-body" ref={listRef}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`chatfab-msg ${m.role === "user" ? "is-user" : "is-bot"}`}
              >
                <div className="chatfab-bubble">{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="chatfab-msg is-bot">
                <div className="chatfab-bubble chatfab-typing">Typing…</div>
              </div>
            )}
          </div>

          <div className="chatfab-inputbar">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about projects, skills, education…"
              rows={1}
            />
            <button className="chatfab-send" onClick={send} disabled={loading || !input.trim()}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button className="chatfab-mini" onClick={() => setOpen(true)} aria-label="Open chat">
          💬
          <span>Ask about Fabiana</span>
        </button>
      )}
    </div>
  );
}