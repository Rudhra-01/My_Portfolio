import "./Certificates.css";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import guvi from "../assets/certificates/guvi-hcl.png";
import contus from "../assets/certificates/contus-intern.png";
import ds from "../assets/certificates/greatlearning-ds.png";
import pm from "../assets/certificates/greatlearning-pmat.png";
import besant from "../assets/certificates/besant-tech.png";
import powerbi from "../assets/certificates/power-bi.png";
import aitool from "../assets/certificates/ai-tool.png";

const certificates = [
  {

    title: "Generative AI Engineering",
    issuer: "GUVI x HCL",
    year: "2026",
    image: guvi,
    color: "#00E5FF",
  },

  {
    title: "AI & ML Internship",
    issuer: "CONTUS TECH",
    year: "2026",
    image: contus,
    color: "#4ADE80",
  },
  {
    title: "Power BI Workshop",
    issuer: "Microsoft Power BI",
    year: "2026",
    image: powerbi,
    color: "#FACC15",
  },

  {
    title: "AI Tools Workshop",
    issuer: "Workshop",
    year: "2026",
    image: aitool,
    color: "#EC4899",
  },
  {
    title: "Java Training",
    issuer: "Besant Technologies",
    year: "2025",
    image: besant,
    color: "#F97316",
  },

  {
    title: "Data Science Foundation",
    issuer: "Great Learning",
    year: "2024",
    image: ds,
    color: "#8B5CF6",
  },

  {
    title: "Python For Matplotlib",
    issuer: "Great Learning",
    year: "2024",
    image: pm,
    color: "#3B82F6",
  },

];

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <h2 className="section-title">
        <FaAward /> Certifications
      </h2>

      <p className="section-subtitle">
        Professional certifications, internships and technical workshops.
      </p>

      <div className="certificate-grid">

        {certificates.map((cert, index) => (

          <div
            key={index}
            className="certificate-card"
            style={{ "--color": cert.color }}
          >

            <div className="certificate-image">

              <img
                src={cert.image}
                alt={cert.title}
              />

            </div>

            <div className="certificate-content">

              <h3>{cert.title}</h3>

              <span>{cert.issuer}</span>

              <p>{cert.year}</p>

              <button
                onClick={() => window.open(cert.image)}
              >
                View Certificate
                <FaExternalLinkAlt />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}