
import "./Experience.css";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaPython,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { SiFastapi, SiPandas, SiStreamlit } from "react-icons/si";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI / ML Intern Trainee",
    company: "CONTUS TECH PRIVATE LIMITED",
    date: "May – June 2026",
    summary:
      "Gained hands-on experience in machine learning, data analytics, and recommendation systems.",
    contributions: [
      "Developed a Smart Retail Recommendation System",
      "Built REST APIs using FastAPI",
      "Created an interactive Streamlit dashboard",
    ],
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },
  {
    role: "Python with AI Intern",
    company: "EWB EDUTECH PRIVATE LIMITED",
    date: "September – October 2026",
    summary:
      "Practiced Python programming and AI concepts through exercises and project development.",
    contributions: [
      "Worked with Python functions and operators",
      "Used NumPy and Pandas for data handling",
      "Developed a Student Performance Analytics System",
    ],
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Artificial Intelligence", icon: <FaBrain /> },
      { name: "NumPy", icon: <FaDatabase /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <span className="experience-small">MY CAREER JOURNEY</span>
        <h2>
          Professional <span>Experience</span>
        </h2>
        <p>
          Practical learning through internships and projects in AI,
          Python, and Data Analytics.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.article
            className="experience-card"
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <div className="experience-card-top">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <span className="intern-tag">Internship</span>
            </div>

            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>

            <div className="experience-meta">
              <span>
                <FaCalendarAlt /> {exp.date}
              </span>
            </div>

            <p className="experience-summary">{exp.summary}</p>

            <h5 className="experience-subtitle">Key Contributions</h5>
            <div className="achievement-grid">
              {exp.contributions.map((item) => (
                <div className="achievement-item" key={item}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h5 className="experience-subtitle">Technologies</h5>
            <div className="tech-stack">
              {exp.skills.map((skill) => (
                <span className="tech-chip" key={skill.name}>
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
