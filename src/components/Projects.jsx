import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

import retail from "../assets/projects/retail.png";
import chocolate from "../assets/projects/chocolate.png";
import starbucks from "../assets/projects/starbucks.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">

      {/* ========================= */}
      {/* Featured Project */}
      {/* ========================= */}

      <div className="projects-header">
        <h2 className="section-title">
           Project
        </h2>

        <p className="section-subtitle">
          Machine Learning project showcasing
          Retail Analytics, Product Recommendation,
          and Business Intelligence.
        </p>
      </div>

      <div className="featured-project-card">

        <div className="featured-badge">
          <FaStar />
          <span>Featured</span>
        </div>

        <div className="featured-image">

          <img
            src={retail}
            alt="Retail Analytics"
          />

        </div>

        <div className="featured-content">

          <h3>
            Smart Retail Market Basket Analytics
          </h3>

          <p>
            An end-to-end Retail Analytics platform developed
            using Machine Learning, FastAPI and Streamlit.
            The application performs Market Basket Analysis
            using Apriori and FP-Growth algorithms to
            identify product associations and generate
            intelligent product recommendations through an
            interactive dashboard.
          </p>

          <div className="tech-stack">

            <span>Python</span>
            <span>FastAPI</span>
            <span>Streamlit</span>
            <span>Pandas</span>
            <span>Mlxtend</span>
            <span>Plotly</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/Rudhra-01/Smart-Retail-Market-Basket-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://smart-retail-market-basket-analytics-w4yslnnqdrqncimj5jbfqt.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* Dashboard Section */}
      {/* ========================= */}

      <div className="dashboard-header">

        <h2 className="section-title">
          Business Intelligence Dashboards
        </h2>

        <p className="section-subtitle">
          Interactive Power BI dashboards developed for
          analysing sales, KPIs, revenue trends,
          and business performance.
        </p>

      </div>

      <div className="projects-grid">

        {/* Chocolate Dashboard */}
        

        <div className="project-card">

          <div className="image-container">

            <img
              src={chocolate}
              alt="Chocolate Dashboard"
              className="project-image"
            />

          </div>

          <div className="project-content">

            <h3>Chocolate Sales Dashboard</h3>

            <p>
              Interactive Power BI dashboard providing
              comprehensive sales analysis, revenue insights,
              KPIs, customer trends and business performance.
            </p>

            <div className="tech-stack">

              <span>Power BI</span>
              <span>DAX</span>
              <span>SQL</span>
              <span>Excel</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/Rudhra-01/Chocolate-sales-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <button
                className="demo-btn disabled"
                disabled
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </button>

            </div>

          </div>

        </div>

        {/* Starbucks Dashboard */}

        <div className="project-card">

          <div className="image-container">

            <img
              src={starbucks}
              alt="Starbucks Dashboard"
              className="project-image"
            />

          </div>

          <div className="project-content">

            <h3>Starbucks Sales Dashboard</h3>

            <p>
              Interactive Power BI dashboard analysing
              Starbucks sales, customer purchasing
              behaviour, revenue trends and product
              performance using business intelligence.
            </p>

            <div className="tech-stack">

              <span>Power BI</span>
              <span>DAX</span>
              <span>SQL</span>
              <span>Excel</span>

            </div>

            <div className="project-buttons">
              <a
                href="https://github.com/Rudhra-01/Starbucks_Dashboard.git"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <button
                className="demo-btn disabled"
                disabled
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </button>
              
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}