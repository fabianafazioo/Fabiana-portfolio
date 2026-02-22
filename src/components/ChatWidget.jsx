import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/chatwidget.css";

const STARTER = {
  role: "assistant",
  content:
    "Hi! I’m Fabiana’s assistant 💜\n\nAsk me anything about her **skills**, **projects**, **research**, or **availability**.",
};

function MarkdownMessage({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => <a {...props} target="_blank" rel="noreferrer" />,
        code: ({ inline, className, children, ...props }) => {
          if (inline) return <code className="md-inlinecode" {...props}>{children}</code>;
          return (
            <pre className="md-pre">
              <code className={className} {...props}>{children}</code>
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([STARTER]);

  const listRef = useRef(null);

  useEffect(() => {
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
          content: `I couldn’t reach the chat service.\n\n**Error:** ${e.message || "unknown"}`,
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

            <button
              className="chatfab-iconbtn"
              onClick={() => setOpen(false)}
              aria-label="Minimize chat"
            >
              —
            </button>
          </div>

          <div className="chatfab-body" ref={listRef}>
            {messages.map((m, idx) => (
              <div key={idx} className={`chatfab-msg ${m.role === "user" ? "is-user" : "is-bot"}`}>
                <div className="chatfab-bubble">
                  {m.role === "assistant" ? (
                    <MarkdownMessage content={m.content} />
                  ) : (
                    m.content
                  )}
                </div>
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
          💬 <span>Ask about Fabiana</span>
        </button>
      )}
    </div>
  );
}