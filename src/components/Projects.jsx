import "../styles/projects.css";
import fluidVid1 from "../assets/fluid-demo.mp4";
import fluidVid2 from "../assets/fluid-demo-2.mov";
import { useMemo, useState } from "react";

function FluidVideoSlider() {
  const videos = useMemo(() => [fluidVid1, fluidVid2], []);
  const [idx, setIdx] = useState(0);

  function prev() {
    setIdx((i) => (i - 1 + videos.length) % videos.length);
  }

  function next() {
    setIdx((i) => (i + 1) % videos.length);
  }

  return (
    <div className="project-image-wrap fluid-slider" aria-label="Fluid simulation videos">
      <video
        key={videos[idx]}              // forces reload when switching
        className="project-video"
        src={videos[idx]}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <button className="fluid-nav fluid-prev" onClick={prev} aria-label="Previous video">
        ‹
      </button>

      <button className="fluid-nav fluid-next" onClick={next} aria-label="Next video">
        ›
      </button>

      <div className="fluid-dots" aria-label="Video position">
        {videos.map((_, i) => (
          <button
            key={i}
            className={`fluid-dot ${i === idx ? "is-active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        {/* SECTION HEADER */}
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">Web Applications & Simulation Studies</p>
        </div>

        {/* =======================
            PROJECT 1: GOAL TRACKER
           ======================= */}
        <div className="project-showcase">
          {/* LEFT INFO */}
          <div className="project-info">
            <h4>DESCRIPTION</h4>
            <p>
              Goal Tracker is a collaborative web application designed to help
              individuals and teams set, track, and achieve personal and group
              goals. The platform allows users to create structured goals,
              visualize progress, and stay accountable through shared spaces
              and real-time updates.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Firebase</span>
              <span>JavaScript</span>
              <span>GitHub</span>
            </div>
          </div>

         {/* CENTER: iPhone frame with interactive demo */}
          <div className="project-media">
            <div className="iphone-frame">
              <div className="iphone-inner">
                {/* notch */}
                <div className="iphone-notch">
                  <div className="iphone-speaker" />
                  <div className="iphone-camera" />
                </div>

                {/* screen */}
                <div className="iphone-screen">
                  <iframe
                    title="Goal Tracker Embedded Demo"
                    src="https://goaltracker-web.vercel.app/login"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* home indicator */}
                <div className="iphone-home-indicator" />
              </div>

              {/* side buttons (decorative) */}
              <span className="iphone-btn iphone-btn-top" />
              <span className="iphone-btn iphone-btn-mid" />
              <span className="iphone-btn iphone-btn-bot" />
              <span className="iphone-power" />
            </div>
          </div>

          {/* RIGHT ACTIONS (keep your buttons) */}
          <div className="project-actions">
            <h3>Goal Tracker</h3>
            <p className="project-role">Collaborative Goal Management Web App</p>

            <a
              href="https://goaltracker-web.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="live-btn"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/fabianafazioo/GoalTracker.git"
              target="_blank"
              rel="noreferrer"
              className="git-btn"
            >
              Git Repository ↗
            </a>
          </div>
        </div>

        {/* ===========================
            PROJECT 2: FLUID STUDY VIDEO
           =========================== */}
        <div className="project-showcase">
          {/* LEFT INFO */}
          <div className="project-info">
            <h4>DESCRIPTION</h4>
            <p>
              Fluid Simulation Recreation Study created in Blender (then tested in a
              real-time pipeline). This was an experimental demo to practice water
              dynamics, surface shading, and simulation parameter tuning. Recreation and results are my
              own technical study.
            </p>

            <div className="tech-stack">
              <span>Blender</span>
              <span>Fluid Simulation</span>
              <span>Material/Shading</span>
              <span>Rendering</span>
            </div>

            <p className="project-note">
              <strong>Credit:</strong> Inspired by a YouTube demo.
            </p>
          </div>

          {/* CENTER VIDEO */}
          {/* CENTER VIDEO (2-video slider) */}
          <div className="project-media">
            <FluidVideoSlider />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="project-actions">
            <h3>Fluid Simulation Study</h3>
            <p className="project-role">Blender Water Dynamics</p>

            <a
              href="#projects"
              className="live-btn"
              onClick={(e) => e.preventDefault()}
              style={{ opacity: 0.85, cursor: "default" }}
            >
              Embedded Video ✓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}