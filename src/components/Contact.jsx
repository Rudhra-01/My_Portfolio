
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Contact Section Heading */}
        <div className="contact-heading">
          <span className="contact-tag">GET IN TOUCH</span>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p>
            Let's connect and explore opportunities together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-content">

          {/* Box 1: Contact Information */}
          <div className="contact-card contact-info-card">
            <h3>
              <span className="contact-icon">✉</span>
              Contact Information
            </h3>

            {/* Email */}
            <div className="contact-detail">
              <span className="detail-label">Email</span>

              <a href="mailto:rudhra.roopini.p.22ds27@gmail.com">
                rudhra.roopini.p.22ds27@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="contact-detail">
              <span className="detail-label">Phone</span>

              <a href="tel:+919080801733">
                +91 9080801733
              </a>
            </div>

            {/* Location */}
            <div className="contact-detail">
              <span className="detail-label">Location</span>

              <p>Chennai, Tamil Nadu, India</p>
            </div>

            {/* Career Focus */}
            <div className="contact-detail">
              <span className="detail-label">Career Focus</span>

              <p>Data Analytics · Business Analysis</p>
            </div>
          </div>

          {/* Box 2: Connect With Me */}
          <div className="contact-card contact-connect-card">
            <h3>
              <span className="contact-icon">↗</span>
              Connect With Me
            </h3>

            <p className="connect-description">
              Connect with me to discuss projects, share ideas,
              or explore professional opportunities.
            </p>

            {/* Social Links */}
            <div className="contact-links">

              <a
                href="https://www.linkedin.com/in/rudhra-roopini-p-b4b7032b3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn <span>↗</span>
              </a>
              <div>
              <a
                href="https://github.com/Rudhra-01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                GitHub <span>↗</span>
              </a>
              </div>
              <a
                href="mailto:rudhra.roopini.p.22ds27@gmail.com"
                aria-label="Send me an email"
              >
                Email <span>↗</span>
              </a>

            </div>

            {/* Availability Status */}
            <p className="availability">
              <span className="availability-dot"></span>
              Open to learning and career opportunities
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
