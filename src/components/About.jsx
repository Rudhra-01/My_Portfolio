import "./About.css";
import profile from "../assets/linkedin_prf.png";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaArrowRight } from "react-icons/fa";
<section id="about" className="about-section"></section>
const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-image">

          <div className="about-img-box">
            <img src={profile} alt="Rudhra Roopini P" />
          </div>

        </div>

        {/* Right Side */}

        <div className="about-content">

          <span className="about-tag">
            ABOUT ME
          </span>


          <p>
            Hello! I'm <strong>Rudhra Roopini P</strong>, an aspiring
            <strong> Data Analyst</strong> and
            <strong> Business Analyst</strong> currently pursuing
            <strong> Master's in  Data Science</strong>.
          </p>

          <p>
            Exploring data, uncovering patterns, and building practical solutions with analytics and machine learning.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <FaGraduationCap />
              <div>
                <h4>Education</h4>
                <p>M.Sc Data Science</p>
              </div>
            </div>

            <div className="about-card">
              <FaBriefcase />
              <div>
                <h4>Internship</h4>
                <p>AI / ML Intern</p>
                <p>Python With AI Intern</p>
              </div>
            </div>

            <div className="about-card">
              <FaLaptopCode />
              <div>
                <h4>Specialization</h4>
                <p>Data Analyst & Business Analyst</p>
              </div>
            </div>

          </div>

          <div className="about-buttons">

            <a href="#projects" className="about-btn">
              View Projects
              <FaArrowRight />
            </a>

            <a href="#contact" className="about-btn-outline">
              Contact Me
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;