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

      <div className="hero-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.div
        className="hero-content full-width"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="hero-tag">
          👋 Welcome to My Portfolio
        </span>

        <h1>
          Hi, I'm <br />
           Rudhra Roopini P
        </h1>

        <TypeAnimation
          sequence={[
            "Data Analyst",
            2000,
            "Business Analyst",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Aspiring <strong>Data Analyst</strong> and
          <strong> Business Analyst</strong> passionate about transforming
          raw data into meaningful business insights. Skilled in
          <strong> Python</strong>,
          <strong> SQL</strong>,
          <strong> Power BI</strong>,
          <strong> Machine Learning</strong>, and
          <strong> Business Intelligence</strong>.
        </p>

        <div className="hero-buttons">

          <a
            href={resume}
            download
            className="btn-primary"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="#projects"
            className="btn-secondary"
          >
            View Projects
            <FaArrowRight />
          </a>

        </div>

        <div className="hero-social">

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

          <a href="mailto:rudhra.roopini.p.22ds27@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

    </section>
  );
};
export default Hero;