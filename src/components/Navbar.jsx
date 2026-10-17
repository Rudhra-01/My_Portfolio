
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .portfolio-navbar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          padding: 16px 6%;
          background: rgba(5, 9, 20, 0.82);
          border-bottom: 1px solid rgba(96, 165, 250, 0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .portfolio-nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .portfolio-logo {
          color: #f8fafc;
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -1px;
          white-space: nowrap;
        }

        .portfolio-logo span {
          background: linear-gradient(90deg, #38bdf8, #fb923c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portfolio-nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(12px, 2vw, 28px);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .portfolio-nav-links li {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .portfolio-nav-links a {
          display: inline-block;
          color: #cbd5e1;
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .portfolio-nav-links a:hover {
          color: #38bdf8;
        }

        .portfolio-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(125, 211, 252, 0.3);
          border-radius: 10px;
          color: #f8fafc;
          background: rgba(15, 23, 42, 0.9);
          font-size: 1.15rem;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .portfolio-navbar {
            padding: 12px 5%;
          }

          .portfolio-menu-toggle {
            display: inline-flex;
          }

          .portfolio-nav-links {
            position: absolute;
            top: calc(100% + 1px);
            left: 0;
            right: 0;
            display: ${"${menuOpen ? 'flex' : 'none'}"};
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 10px 5% 18px;
            background: rgba(5, 9, 20, 0.97);
            border-bottom: 1px solid rgba(96, 165, 250, 0.18);
          }

          .portfolio-nav-links a {
            display: block;
            padding: 13px 8px;
            font-size: 0.95rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-nav-links a {
            transition: none;
          }
        }
      `}</style>

      <motion.nav
        className="portfolio-navbar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="portfolio-nav-inner">
          <a
            href="#home"
            className="portfolio-logo"
            onClick={closeMenu}
            aria-label="Rudhra home"
          >
            <span>Rudhra Roopini</span>
          </a>

          <button
            type="button"
            className="portfolio-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="portfolio-nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
