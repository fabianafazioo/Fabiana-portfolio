import "../styles/about.css";
import aboutPic from "../assets/me.png";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import keanLogo from "../assets/kean-logo.png";
import asuLogo from "../assets/asu-logo.png";
import Footer from "./components/Footer";

export default function About() {
  useReveal(".reveal");

  const [tiltStyle, setTiltStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({});

  function handleTilt(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rotateY = ((x / r.width) - 0.5) * 14;
    const rotateX = ((y / r.height) - 0.5) * -14;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`,
    });

    setGlowStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(124,58,237,0.38), transparent 55%)`,
      opacity: 1,
    });
  }

  function resetTilt() {
    setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg) translateY(0px)" });
    setGlowStyle({ opacity: 0 });
  }

  const skillGroups = [
    {
      title: "Languages",
      items: ["Java", "JavaScript", "Python", "SQL", "R", "Bash", "C#", "C++", "C"],
    },
    {
      title: "Frameworks & Tools",
      items: ["React", "Node.js", "Firebase", "Unity", "Blender", "NumPy", "Git", "Linux", "LaTeX"],
    },
    {
      title: "Focus Areas",
      items: [
        "AI Systems",
        "VR / Immersive Research",
        "Simulation",
        "Data Visualization",
        "Automation",
        "APIs",
        "Algorithms",
        "OOP",
      ],
    },
    {
      title: "Strengths",
      items: ["Team Collaboration", "Analytical Thinking", "Detail-Oriented", "Rapid Learner", "Bilingual (EN/ES)"],
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* LEFT SIDE */}
        <div className="about-left">
          {/* Interactive Persona Card */}
          <div
            className="persona-card"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            style={tiltStyle}
          >
            <img src={aboutPic} alt="Fabiana Fazio" className="about-img" />
            <div className="persona-glow" style={glowStyle} />
            <div className="persona-shine" />
          </div>

          {/* EDUCATION */}
          <div className="education-card reveal" data-reveal="left" style={{ "--reveal-delay": "120ms" }}>
            <div className="edu-header">
              <h3>Education</h3>
              <span className="edu-badge">Academic Timeline</span>
            </div>

            <div className="edu-timeline">
              {/* Kean */}
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-school-card">
                  <div className="edu-top">
                    <img src={keanLogo} alt="Kean University" className="edu-logo" />
                    <div className="edu-top-text">
                      <div className="edu-school">Kean University</div>
                      <div className="edu-date">Expected May 2026</div>
                    </div>
                  </div>

                  <div className="edu-degree">
                    <strong>B.S. — Computational Science & Engineering</strong>
                  </div>
                  <div className="edu-sub">Minor: Mathematical Science</div>
                </div>
              </div>

              {/* ASU */}
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-school-card">
                  <div className="edu-top">
                    <img src={asuLogo} alt="Arizona State University" className="edu-logo" />
                    <div className="edu-top-text">
                      <div className="edu-school">Arizona State University</div>
                      <div className="edu-date">Starting Fall 2026 • Expected May 2028</div>
                    </div>
                  </div>

                  <div className="edu-degree">
                    <strong>M.S.E. — Software Engineering (Planned)</strong>
                  </div>
                  <div className="edu-sub">
                    Focus: advanced software systems, scalable development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h2 className="reveal" data-reveal="right" style={{ "--reveal-delay": "0ms" }}>
            About Me
          </h2>

          <p className="about-text reveal" data-reveal="right" style={{ "--reveal-delay": "140ms" }}>
            I am an aspiring software engineer driven by a passion for building intelligent, scalable,
            and visually engaging systems. My experience ranges from full-stack web applications to AI-focused
            and simulation-based projects, where I focus on writing clean, reliable code and delivering solutions
            that create real value. I thrive in environments that challenge me to learn quickly, think critically,
            and turn complex ideas into working software.
          </p>

          <p className="about-text reveal" data-reveal="right" style={{ "--reveal-delay": "280ms" }}>
            With my upcoming Master’s studies in Software Engineering at Arizona State University, I am excited to expand
            my knowledge in advanced software development, machine learning, and high-performance systems. I am currently
            seeking software engineering opportunities where I can contribute to impactful projects, continue growing as
            an engineer, and collaborate with teams that value innovation, ownership, and technical excellence.
          </p>

          <div className="about-highlights reveal" data-reveal="right" style={{ "--reveal-delay": "360ms" }}>
            <div className="highlight">🚀 Seeking: Software Engineering roles</div>
            <div className="highlight">🧠 Focus: AI systems + scalable apps</div>
            <div className="highlight">🎓 Next: M.S.E. at ASU (Fall 2026)</div>
          </div>

          {/* SKILLS */}
          <div className="skills-section reveal" data-reveal="right" style={{ "--reveal-delay": "420ms" }}>
            <h3 className="skills-title">Skills Snapshot</h3>

            <div className="skills-groups">
              {skillGroups.map((g) => (
                <div className="skills-group" key={g.title}>
                  <div className="skills-group-title">{g.title}</div>
                  <div className="skills-pills">
                    {g.items.map((s) => (
                      <span className="skill-pill" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-footnote">Tip: hover a skill ✨</div>
          </div>
        </div>
      </div>
    </section>
  );
}