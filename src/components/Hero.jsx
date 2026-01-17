import "../styles/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";



export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="glow purple"></div>
      <div className="glow blue"></div>

      <div className="hero-inner">

        <div className="hero-left">
          <p className="hello">Hey, there</p>

          <h1>
            I AM <br /> FABIANA
          </h1>

          <p className="desc">
            Software Engineer focused on AI systems, immersive VR research, and
            building scalable, intelligent applications.
          </p>

          <div className="status">
            🟡 Available for software engineering opportunities
          </div>
        </div>

       <div className="hero-right">
        <div className="profile-card">

            <h2>CONNECT WITH ME </h2>

            <div className="card-links">
                <a href="mailto:fabianafazio2910@gmail.com">
                    <FaEnvelope /> fabianafazio2910@gmail.com
                </a>

                <a href="https://www.linkedin.com/in/fabiana-fazio-30344720a/" target="_blank" rel="noreferrer">
                    <FaLinkedin /> Fabiana’s LinkedIn
                </a>

                <a href="https://github.com/fabianafazioo" target="_blank" rel="noreferrer">
                    <FaGithub /> fabianafazioo
                </a>
            </div>

            <div className="card-buttons">
                <a href="/FabianaFazioResume.pdf" target="_blank" rel="noreferrer" className="view-btn">
                    View Resume
                </a>

                <a href="/FabianaFazioResume.pdf" download className="download-btn">
                    Download Resume ↓
                </a>
                </div>


        </div>
        </div>



      </div>
    </section>
  );
}
