import "./Skills.css";
import {
  SiPython,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiGithub,
  SiJavascript,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

const skills = [
  { name: "Python", icon: <SiPython />, color: "#FFD43B" },
  { name: "SQL", icon: <FaDatabase />, color: "#00E5FF" },
  { name: "Power BI", icon: <BsBarChartFill />, color: "#F2C811" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#00C58E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Pandas", icon: <SiPandas />, color: "#A259FF" },
  { name: "NumPy", icon: <SiNumpy />, color: "#4DABCF" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Technology Stack</h2>
      <p className="skills-subtitle">
        Technologies I use to build Data Analytics, Machine Learning and Web Applications
      </p>

      <div className="hex-grid">
        {skills.map((skill, index) => (
          <div className="hex-card" key={index}>
            <div
              className="hex-icon"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}