import React, { useEffect, useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "header scrolled" : "header"}>

      <a
        className="brand"
        href="/"
        onClick={closeMenu}
        aria-label="KSC Home"
      >
        <span className="brand-mark">
          <img src="/images/logo2.png" alt="KSC" />
        </span>
      </a>

      <nav className={menuOpen ? "nav open" : "nav"}>

        <a href="/" onClick={closeMenu}>
            Home
        </a>

        <a href="/about" onClick={closeMenu}>
          About
        </a>

        <div className="nav-dropdown">

          <a
            href="/#services"
            onClick={closeMenu}
            className="nav-dropdown-trigger"
          >
            Services
            <span className="nav-chevron">⌄</span>
          </a>

          <div className="services-dropdown">

            <a href="/services/civil-construction">
              Civil Construction
            </a>

            <a href="/services/electrical-works">
              Electrical Works
            </a>

            <a href="/services/mechanical-works">
              Mechanical Works
            </a>

            <a href="/services/architectural-interior-design">
              Architectural & Interior Design
            </a>

            <a href="/services/equipment-machine-installations">
              Equipment & Machine Installations
            </a>

            <a href="/services/fire-detection-fire-fighting">
              Fire Detection & Fire Fighting
            </a>

            <a href="/services/hvac-works">
              HVAC Works
            </a>

            <a href="/services/fitout-works">
              Fitout Works
            </a>

          </div>

        </div>

        <a href="/projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="/#industries" onClick={closeMenu}>
          Industries
        </a>

        <a href="/careers" onClick={closeMenu}>
          Careers
        </a>

        <a
          className="nav-contact"
          href="/contact"
          onClick={closeMenu}
        >
          Contact
          <span className="contact-arrow">↗</span>
        </a>

      </nav>

      <button
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

    </header>
  );
}