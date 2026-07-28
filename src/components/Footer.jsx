import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <p>
        © 2026 <b>Rudhra Roopini P</b> | Data Analyst • Business Analyst
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/Rudhra-01"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rudhra-roopini-p-b4b7032b3/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;