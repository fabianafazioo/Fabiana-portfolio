import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <h1 className="logo">Fabiana.</h1>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Call to action button */}
        <button
          className="contact-btn"
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
