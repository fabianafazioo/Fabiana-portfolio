import "../styles/about.css";
import aboutPic from "../assets/me.png";
import { useState } from "react";


export default function About() {
  const [tiltStyle, setTiltStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({});

  function handleTilt(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    // rotate strength (lower = more subtle)
    const rotateY = ((x / r.width) - 0.5) * 14; // left/right
    const rotateX = ((y / r.height) - 0.5) * -14; // up/down

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`,
    });

    // glow follows cursor
    setGlowStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(124,58,237,0.35), transparent 55%)`,
      opacity: 1,
    });
  }

  function resetTilt() {
    setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg) translateY(0px)" });
    setGlowStyle({ opacity: 0 });
  }

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

          <div className="education-card">
            <h3>Education</h3>
            <ul className="edu-list">
              <li>
                <strong>Bachelor of Science — Computational Science & Engineering</strong>
                <br />
                Minor in Mathematics
                <br />
                Kean University — Expected Graduation: May 2026
              </li>

              <li>
                <strong>Master’s Degree (Planned)</strong>
                <br />
                Artificial Intelligence / Engineering Focus
                <br />
                Starting Fall 2026
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h2>About Me</h2>

          <p className="about-text">
            I’m a software engineer and researcher passionate about building intelligent,
            immersive, and scalable systems. My work sits at the intersection of software
            engineering, artificial intelligence, and computational modeling — from VR
            simulation environments to data-driven and AI-powered applications.
          </p>

          <p className="about-text">
            I have hands-on experience developing full software systems, conducting technical
            research, and working in interdisciplinary environments where engineering, data,
            and design meet. I’m driven by solving complex problems, learning rapidly, and
            building technology that has real-world impact.
          </p>

          {/* KEEP your skills grid for now (Part 7 will upgrade it more) */}
          <div className="skills-grid">
            <div className="skill-box">
              <h4>Programming Languages</h4>
              <ul>
                <li>Java, JavaScript</li>
                <li>Python, R, SQL, Bash</li>
                <li>C#, C++, C</li>
              </ul>
            </div>

            <div className="skill-box">
              <h4>Frameworks & Tools</h4>
              <ul>
                <li>Unity, React, Node.js</li>
                <li>NumPy, Firebase, Blender</li>
                <li>GitHub, Linux, LaTeX</li>
              </ul>
            </div>

            <div className="skill-box">
              <h4>Concepts & Technical Areas</h4>
              <ul>
                <li>Object-Oriented Programming</li>
                <li>Machine Learning & Deep Learning</li>
                <li>3D Modeling & Simulation Systems</li>
                <li>Data Augmentation & Visualization</li>
                <li>Automation, Algorithms, RESTful APIs</li>
                <li>Computational Modeling & Debugging</li>
              </ul>
            </div>

            <div className="skill-box">
              <h4>Professional Strengths</h4>
              <ul>
                <li>Team Collaboration</li>
                <li>Analytical Thinker</li>
                <li>Detail-Oriented</li>
                <li>Rapid Learner</li>
                <li>Bilingual: English & Spanish</li>
              </ul>
            </div>

            <div className="skill-box">
              <h4>Certifications</h4>
              <ul>
                <li>CITI Program</li>
                <li>Responsible Conduct of Research</li>
                <li>ID: 12114301</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}