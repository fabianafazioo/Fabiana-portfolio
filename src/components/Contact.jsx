import "../styles/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaFileAlt } from "react-icons/fa";

export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:fabianafazio2910@gmail.com
?subject=${encodeURIComponent("New Inquiry: " + subject)}
&body=${encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
)}`;

    window.location.href = mailtoLink;
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let’s Build Something Together</h2>

          <p className="contact-sub">
            I’m always open to new opportunities, collaborations, and innovative
            projects. Whether you’re a recruiter, founder, or engineer — feel free
            to reach out. I’d love to connect.
          </p>

          <div className="contact-actions">
            <a href="mailto:fabianafazio2910@gmail.com">
              <FaEnvelope /> Email Me
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <FaFileAlt /> View Resume
            </a>

            <a href="/resume.pdf" download>
              <FaFileDownload /> Download Resume
            </a>

            <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Start a Project</h3>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
