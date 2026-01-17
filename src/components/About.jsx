import "../styles/about.css";
import aboutPic from "../assets/me.png"; // put your image here

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        {/* LEFT SIDE */}
        <div className="about-left">
          <img src={aboutPic} alt="Fabiana Fazio" className="about-img" />

          <div className="education-card">
            <h3>Education</h3>
            <p>
              <strong>Bachelor of Science</strong><br />
              Computational Science & Engineering
            </p>

            <p className="edu-sub">
              Kean University
            /
              Expected Graduation May 2026.
            </p>

            <p>
              <strong>Master’s Degree (Planned)</strong><br />
              Starting Fall 2026 – Artificial Intelligence / Engineering focus
            </p>
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

          {/* SKILLS GRID */}
          <div className="skills-grid">

            <div className="skill-box">
              <h4>Programming Languages</h4>
                <ul>
                    <li>‣Java, JavaScript</li>
                    <li>‣Python, R, SQL, Bash</li>
                    <li>‣C#, C++, C</li>
                </ul>

                
            </div>

            <div className="skill-box">
              <h4>Frameworks & Tools</h4>
                <ul>
                    <li>‣Unity, React, Node.js</li>
                    <li>‣NumPy, Firebase, Blender</li>
                    <li>‣GitHub, Linux, LaTeX</li>
                </ul>

            </div>

            <div className="skill-box">
              <h4>Concepts & Technical Areas</h4>
              <ul>
                <li>‣Object-Oriented Programming</li>
                <li>‣Machine Learning & Deep Learning</li>
                <li>‣3D Modeling & Simulation Systems</li>
                <li>‣Data Augmentation & Visualization</li>
                <li>‣Automation, Algorithms, RESTful APIs</li>
                <li>‣Computational Modeling & Debugging</li>
              </ul>
            </div>

            <div className="skill-box">
              <h4>Professional Strengths</h4>
              <ul>
                <li>‣Team Collaboration</li>
                <li>‣Analytical Thinker</li>
                <li>‣Detail-Oriented</li>
                <li>‣Rapid Learner</li>
                <li>‣Bilingual: English & Spanish</li>
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
