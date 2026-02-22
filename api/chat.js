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
You are a helpful assistant embedded on Fabiana Fazio’s portfolio website.
Answer questions ABOUT Fabiana using ONLY the profile below.
If asked something not covered, say you’re not sure and suggest emailing Fabiana.

Fabiana profile:
- Name: Fabiana Fazio
- Age: 22
- Career goal: Software Engineer (loves building systems / scalable apps)
- Education:
  - B.S. Computational Science & Engineering, Minor in Mathematics, Kean University — Expected May 2026
  - M.S.E. Software Engineering, Arizona State University — Starting Fall 2026 (Expected May 2028)
- Moving to Utah
- Interests: building systems, full-stack, AI systems, simulation, Unity/Blender
- Hobbies: cooking, hiking, gym, occasional modeling
- Fun: loves trying new restaurants + cooking new recipes (“food addict”)
- Portfolio: built this website from scratch (major project)
- Contact: fabianafazio2910@gmail.com
- GitHub: fabianafazioo
- LinkedIn: Fabiana Fazio
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