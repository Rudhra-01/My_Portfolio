import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">

        <span>Get In Touch</span>

        <h2>Let's Work Together</h2>

        <p>
          I'm always interested in Data Analytics, Business Analytics,
          Machine Learning, and AI opportunities. Feel free to reach out!
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-card">

          <h3>Contact Information</h3>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>rudhra.roopini.p.22ds27@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 90808 01733</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-card">

          <h3>Connect With Me</h3>

          <div className="social-buttons">

            <a
              href="https://github.com/Rudhra-01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rudhra-roopini-p-b4b7032b3/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href="/Resume.pdf" download>
              <FaDownload />
              Download Resume
            </a>

          </div>

          <div className="contact-message">

            <h4>Open to Opportunities</h4>

            <p>
              I'm currently seeking internships and full-time opportunities in
              Data Analytics, Business Analytics, Machine Learning, and AI.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;