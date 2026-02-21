import "../styles/projects.css";
import goalImg from "../assets/Goaltracker.png";
import fluidVid from "../assets/fluid-demo.mp4"; // <-- add your mp4 here

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

          {/* CENTER IMAGE */}
          <div className="project-image-wrap">
            <img src={goalImg} alt="Goal Tracker Project" />
          </div>

          {/* RIGHT ACTIONS */}
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
          <div className="project-image-wrap">
            <video
              className="project-video"
              src={fluidVid}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="project-actions">
            <h3>Fluid Simulation Study</h3>
            <p className="project-role">Blender Water Dynamics</p>

            {/* Optional: still include a link for details instead of "Live Demo" */}
            {/* If you have a YouTube upload of YOUR render, link it here */}
            <a
              href="#projects"
              className="live-btn"
              onClick={(e) => e.preventDefault()}
              style={{ opacity: 0.85, cursor: "default" }}
            >
              Embedded Video ✓
            </a>

            {/* Optional: link to a short write-up page if you have it */}
            {/* <a href="/fluid-study" className="git-btn">Project Notes ↗</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}