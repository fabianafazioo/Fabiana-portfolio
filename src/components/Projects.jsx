import "../styles/projects.css";
import goalImg from "../assets/Goaltracker.png"; // your project image

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">

        {/* SECTION HEADER */}
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">Web Applications</p>
        </div>

        {/* PROJECT CARD */}
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
            <p className="project-role">
              Collaborative Goal Management Web App
            </p>

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
      </div>
    </section>
  );
}