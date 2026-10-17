import "./Hero.css";
import resume from "../assets/Rudhra-Resume().pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-image-layer" aria-hidden="true" />
      <div className="hero-grid-layer" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <span className="hero-tag">
          <span className="status-dot" /> Welcome to my portfolio
        </span>

        <p className="hero-eyebrow">M.Sc. DATA SCIENCE · ANALYTICS · AI</p>

        <h1>
          Hi, I’m <span>Rudhra Roopini P</span>
        </h1>

        <TypeAnimation
          sequence={["Data Analyst", 1800, "Business Analyst", 1800, "Power BI Analyst", 1800]}
          wrapper="h2"
          repeat={Infinity}
          className="typing-text"
        />

        <p className="hero-description">
          I turn data into meaningful insights through analytics, visualization,
          and practical machine learning solutions. I enjoy exploring data,
          understanding business problems, and building projects that make
          information easier to act on.
        </p>

        <blockquote className="hero-quote">
          <span className="quote"></span>
          <p>Turning data into insights, and insights into impact.</p>
          <span className="quote">A thought that guides my journey</span>
        </blockquote>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore my work <FaArrowRight />
          </a>
          <a href={resume} download className="btn-secondary">
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="hero-social" aria-label="Social links">
          <a href="https://github.com/Rudhra-01" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rudhra-roopini-p-b4b7032b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:rudhra.roopini.p.22ds27@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <a className="hero-scroll" href="#about">
          <span /> Scroll to explore
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
