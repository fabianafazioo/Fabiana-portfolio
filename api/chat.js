import { fabianaProfile } from "./fabianaProfile.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY on server (set it in Vercel env vars + redeploy)." });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Request body must include messages[] array" });
    }

      const system = `
      You are Fabiana Fazio's AI portfolio assistant.

      Your job:
      - Answer questions about Fabiana
      - Be friendly, confident, and professional
      - If something is unknown, say you are not sure and suggest contacting her

      Tone guidelines:
      - Professional but warm
      - Slightly enthusiastic about technology
      - Speak clearly and concisely
      - When appropriate, highlight Fabiana’s strengths for recruiters

      Knowledge base:
      ${fabianaProfile}
      `.trim();

    const payload = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        ...messages.map((m) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: String(m.content || ""),
        })),
      ],
      temperature: 0.4,
      max_tokens: 250,
    };

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({
        error: data?.error?.message || "OpenAI request failed",
        details: data?.error || data,
      });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    return res.status(200).json({ reply: reply || "No reply generated." });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}