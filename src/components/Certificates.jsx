
import { useState } from "react";
import "./Certificates.css";

const imageFiles = import.meta.glob("../assets/certificates/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function getImage(...names) {
  const files = Object.entries(imageFiles);

  for (const name of names) {
    const match = files.find(([path]) => {
      const filename = path.split("/").pop().toLowerCase();
      return filename === name.toLowerCase();
    });

    if (match) return match[1];
  }

  return null;
}

const internshipItems = [
  {
    title: "Python with Artificial Intelligence Internship",
    organization: "EWB Edutech Private Limited",
    duration: "6 Weeks",
    image: getImage("EWB_intern.png", "ewb-internship.png"),
    description:
      "Practical learning in Python programming, Artificial Intelligence, and project development.",
  },
  {
    title: "AI/ML Internship",
    organization: "CONTUS TECH PRIVATE LIMITED",
    duration: "11 May – 12 June 2026",
    image: getImage("contus-intern.png"),
    description:
      "Internship experience in Artificial Intelligence, Machine Learning, and data analytics.",
  },
];

const certificateItems = [
  {
    title: "Data Analytics MasterClass",
    organization: "NoviTech R&D",
    image: getImage("Novi_Tech.png", "novi-tech.png"),
    description:
      "30 Days MasterClass in Data Analytics and Visualization.",
  },
  {
    title: "Generative AI Workshop",
    organization: "GUVI / HCL",
    image: getImage("guvi-hcl.png"),
    description:
      "Workshop participation and learning in Generative AI.",
  },
  {
    title: "AI Tools Workshop",
    organization: "be10x",
    image: getImage("ai-tool.png"),
    description:
      "Learning about AI tools and their practical applications.",
  },
  {
    title: "Power BI Workshop",
    organization: "OfficeMaster",
    image: getImage("power-bi.png"),
    description:
      "Power BI workshop focused on interactive dashboards.",
  },
  {
    title: "Data Science Foundations",
    organization: "Great Learning",
    image: getImage("greatlearning-ds.png"),
    description:
      "Foundational concepts in Data Science.",
  },
  {
    title: "Python Matplotlib",
    organization: "Great Learning",
    image: getImage("greatlearning-pmat.png"),
    description:
      "Course completion in Python Matplotlib.",
  },
];

function CredentialCard({ item, type }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="credential-card">
      <div className="credential-preview">
        {item.image && !imageError ? (
          <a
            href={item.image}
            target="_blank"
            rel="noreferrer"
            className="credential-image-link"
            aria-label={`Open ${item.title} certificate`}
          >
            <img
              src={item.image}
              alt={`${item.title} certificate`}
              className="credential-image"
              loading="lazy"
              onError={() => setImageError(true)}
            />
            <span className="image-open-hint">↗ View</span>
          </a>
        ) : (
          <div className="credential-placeholder">
            <span className="placeholder-icon">✧</span>
            <span>Certificate image unavailable</span>
            <small>
              Check the image filename in assets/certificates
            </small>
          </div>
        )}
      </div>

      <div className="credential-content">
        <span className="credential-type">
          {type === "internship" ? "INTERNSHIP" : "CERTIFICATE"}
        </span>

        <h4>{item.title}</h4>

        <p className="credential-organization">
          {item.organization}
        </p>

        {item.duration && (
          <span className="credential-duration">
            {item.duration}
          </span>
        )}

        <p className="credential-description">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Certificates() {
  const [showAllInternships, setShowAllInternships] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const visibleInternships = showAllInternships
    ? internshipItems
    : internshipItems.slice(0, 1);

  const visibleCertificates = showAllCertificates
    ? certificateItems
    : certificateItems.slice(0, 1);

  return (
    <section className="credentials-section" id="certificates">
      <div className="credentials-heading">
        <span className="credentials-label">
          MY LEARNING JOURNEY
        </span>

        <h2>
          Internships <span>&amp;</span> Certifications
        </h2>

        <p>
          Practical experience, professional learning, and continuous
          technical development.
        </p>
      </div>

      <div className="credentials-columns">
        {/* INTERNSHIPS */}
        <section className="credentials-column">
          <div className="column-heading">
            <div className="column-icon" aria-hidden="true">
              <span>▣</span>
            </div>

            <div className="column-heading-text">
              <h3>Internships</h3>
              <p>Practical training and experience</p>
            </div>

            <span className="column-count">
              {String(internshipItems.length).padStart(2, "0")}
            </span>
          </div>

          <div className="credential-list">
            {visibleInternships.map((item) => (
              <CredentialCard
                key={item.title}
                item={item}
                type="internship"
              />
            ))}
          </div>

          {internshipItems.length > 1 && (
            <button
              type="button"
              className="see-more-button"
              onClick={() =>
                setShowAllInternships((current) => !current)
              }
              aria-expanded={showAllInternships}
            >
              {showAllInternships
                ? "Show Less Internships ↑"
                : "See All Internships →"}
            </button>
          )}
        </section>

        {/* CERTIFICATES */}
        <section className="credentials-column">
          <div className="column-heading">
            <div className="column-icon" aria-hidden="true">
              <span>✧</span>
            </div>

            <div className="column-heading-text">
              <h3>Certificates &amp; Courses</h3>
              <p>Workshops and technical learning</p>
            </div>

            <span className="column-count">
              {String(certificateItems.length).padStart(2, "0")}
            </span>
          </div>

          <div className="credential-list">
            {visibleCertificates.map((item) => (
              <CredentialCard
                key={item.title}
                item={item}
                type="certificate"
              />
            ))}
          </div>

          {certificateItems.length > 1 && (
            <button
              type="button"
              className="see-more-button"
              onClick={() =>
                setShowAllCertificates((current) => !current)
              }
              aria-expanded={showAllCertificates}
            >
              {showAllCertificates
                ? "Show Less Certificates ↑"
                : "See All Certificates →"}
            </button>
          )}
        </section>
      </div>
    </section>
  );
}
