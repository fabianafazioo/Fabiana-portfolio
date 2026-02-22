import { fabianaProfile } from "./fabianaProfile.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  if (!process.env.OPENAI_API_KEY) {
    return res
      .status(500)
      .json({ error: "Missing OPENAI_API_KEY on server (set it in Vercel env vars + redeploy)." });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Request body must include messages[] array" });
    }

    const system = `
You are Fabiana Fazio's AI portfolio assistant.

CORE PURPOSE
- Answer questions about Fabiana’s background, education, skills, projects, research, and experience.
- If a question is vague or missing key details, ask 1–3 short follow-up questions (like a recruiter would).

STYLE (MANDATORY)
- Output MUST be valid Markdown.
- Use short paragraphs and scannable formatting:
  - **Bold** key facts
  - Bullet lists for lists
  - Numbered steps for instructions
- Keep tone: professional, warm, and confident.
- Avoid huge blocks of text.

TRUTH + SAFETY
- Use ONLY the knowledge base below.
- Do NOT invent details (no fake metrics, companies, dates, tools, or links).
- If something is unknown or not listed, say: "I don’t have that detail yet" and suggest contacting Fabiana.
- Follow privacy rules in the knowledge base.

RECRUITER MODE (when relevant)
If user asks:
- "Tell me about her" / "summary" → Give a recruiter-style summary (6–10 bullets) + ask what role they’re hiring for.
- "projects" → List 2–5 projects/areas + stack + what she did + ask which they want to dive into.
- "skills" → Group by category + ask what stack the team uses.
- "availability/location" → Answer with dates + preferences + ask timeline.

FOLLOW-UP QUESTIONS RULE
Ask follow-ups ONLY when it would materially improve accuracy (e.g., role type, which project, desired detail level).
Max 3 questions at a time.

KNOWLEDGE BASE
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
      temperature: 0.35,
      max_tokens: 650,
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