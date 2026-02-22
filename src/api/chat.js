export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Missing messages[] in request body" });
    }

    // ✅ Your portfolio knowledge base (edit anytime)
    const system = `
You are a helpful assistant embedded on Fabiana Fazio’s portfolio website.
Your job is to answer questions ABOUT Fabiana based ONLY on the profile below.
If the user asks something not covered, say you’re not sure and suggest emailing Fabiana.

Fabiana profile:
- Name: Fabiana Fazio
- Age: 22
- Role goal: Software Engineer (especially building systems / scalable apps)
- Education:
  - B.S. Computational Science & Engineering, Minor in Mathematics, Kean University — Expected May 2026
  - M.S.E. Software Engineering, Arizona State University — Starting Fall 2026 (Expected May 2028)
- Location plan: Moving to Utah
- Interests/Focus: building systems, full-stack development, AI systems, simulation, Unity/Blender work
- Hobbies: cooking, hiking, going to the gym, occasional modeling
- Fun: loves trying new restaurants, cooking new recipes, “food addict”
- Portfolio: she built this website from scratch (major project) and is proud of it
- Contact: fabianafazio2910@gmail.com
- GitHub: fabianafazioo
- LinkedIn: Fabiana Fazio
`.trim();

    const input = [
      { role: "system", content: system },
      ...messages.map((m) => ({
        role: m.role,
        content: String(m.content || ""),
      })),
    ];

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        input,
        max_output_tokens: 280,
      }),
    });

    const data = await r.json();

    if (!r.ok) {
      // ✅ return useful error to the client (helps debugging)
      return res.status(r.status).json({
        error: data?.error?.message || "OpenAI request failed",
        details: data?.error || data,
      });
    }

    const reply =
      data.output_text?.trim() ||
      "Sorry — I couldn’t generate a reply right now.";

    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({
      error: e?.message || "Server error",
    });
  }
}