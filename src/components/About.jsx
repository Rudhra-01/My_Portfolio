import "./About.css";
import profile from "../assets/profile rudhra.png";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaArrowRight } from "react-icons/fa";

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
            I enjoy turning data into meaningful insights that help solve real-world business problems. Whether it's analysing data, building dashboards, or developing machine learning solutions using Python, SQL, Power BI, and Business Intelligence, I enjoy creating practical solutions while continuously learning and improving my skills.
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