import "../styles/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  useReveal(".reveal");

  return (
    <section className="hero" id="home">
      <div className="glow purple"></div>
      <div className="glow blue"></div>

      <div className="hero-inner">
        <div className="hero-left">
          <p className="hello reveal" data-reveal="left" style={{"--reveal-delay":"0ms"}}>Hey, there</p>

          <h1 className="reveal" data-reveal="left" style={{"--reveal-delay":"600ms"}}>
            I AM <br /> FABIANA
          </h1>

          <p className="desc reveal" data-reveal="left" style={{"--reveal-delay":"620ms"}}>
            Software Engineer focused on AI systems, immersive VR research, and
            building scalable, intelligent applications.
          </p>

          <div className="status reveal" data-reveal="left" style={{"--reveal-delay":"660ms"}}>
            🟡 Available for software engineering opportunities
          </div>

          <div className="hero-cta reveal" data-reveal="left">
            <a className="btn-3d btn-3d--grad" href="#projects">Explore Projects ↓</a>
            <a className="btn-3d btn-3d--dark" href="#contact">Contact</a>
          </div>
        </div>

        <div className="hero-right reveal" data-reveal="right">
          <div className="profile-card">
            <h2>CONNECT WITH ME</h2>

            <div className="card-links">
              <a href="mailto:fabianafazio2910@gmail.com">
                <FaEnvelope /> fabianafazio2910@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/fabiana-fazioo"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> Fabiana’s LinkedIn
              </a>

              <a href="https://github.com/fabianafazioo" target="_blank" rel="noreferrer">
                <FaGithub /> fabianafazioo
              </a>
            </div>

            <div className="card-buttons">
              <a
                href="/FabianaFazioResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-3d btn-3d--dark"
              >
                View Resume
              </a>

              <a
                href="/FabianaFazioResume.pdf"
                download
                className="btn-3d"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}