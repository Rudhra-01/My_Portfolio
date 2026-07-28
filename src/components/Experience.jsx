import "./Experience.css";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaPython,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";
import { SiFastapi, SiStreamlit, SiPandas, SiNumpy } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <span className="experience-small">Career Journey</span>

        <h2>Professional Experience</h2>

        <p>
          My internship experience where I gained hands-on knowledge in
          Artificial Intelligence, Machine Learning, Backend Development and
          Business Intelligence.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-line"></div>

        <motion.div
          className="timeline-icon"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: .5 }}
        >
          <FaBriefcase />
        </motion.div>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >

          <div className="card-top">

            <span className="intern-tag">
              AI / ML Internship
            </span>

            <h3>AI / ML Intern</h3>

            <h4>CONTUS TECH PRIVATE LIMITED</h4>

            <div className="info-row">

              <span>
                <FaCalendarAlt />
                May - June 2026
              </span>

              <span>
                <FaMapMarkerAlt />
                Chennai, India
              </span>

            </div>

          </div>

          <div className="summary">

            Successfully completed a one-month internship focused on Machine
            Learning, Recommendation Systems, Backend APIs and Business
            Analytics while building real-world AI applications.

          </div>

          <div className="achievement-title">

            Key Achievements

          </div>

          <div className="achievement-grid">

            <div>
              <FaCheckCircle />
              Built Smart Retail Recommendation System
            </div>

            <div>
              <FaCheckCircle />
              Developed REST APIs using FastAPI
            </div>

            <div>
              <FaCheckCircle />
              Designed Interactive Streamlit Dashboard
            </div>

            <div>
              <FaCheckCircle />
              Performed Data Cleaning & Feature Engineering
            </div>

            <div>
              <FaCheckCircle />
              Implemented Apriori & FP-Growth Algorithms
            </div>

            <div>
              <FaCheckCircle />
              Model Training & Evaluation
            </div>

          </div>

          <div className="tech-title">

            Technologies Used

          </div>

          <div className="tech-stack">

            <span><FaPython /> Python</span>

            <span><SiPandas /> Pandas</span>

            <span><SiNumpy /> NumPy</span>

            <span><FaDatabase /> SQL</span>

            <span><SiFastapi /> FastAPI</span>

            <span><SiStreamlit /> Streamlit</span>

            <span><FaChartBar /> Machine Learning</span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;