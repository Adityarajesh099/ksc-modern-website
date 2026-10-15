  import React, { useEffect, useState } from "react";
  import { supabase } from "../supabase";

  export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentProfileExists, setCurrentProfileExists] = useState(null);

  
useEffect(() => {
  const cachedStatus = sessionStorage.getItem(
    "kscCompanyProfileExists"
  );

  if (cachedStatus !== null) {
    setCurrentProfileExists(cachedStatus === "true");
  }

  let active = true;

  const checkCompanyProfile = async () => {
    const { data, error } = await supabase.storage
      .from("company-profile")
      .list("", {
        search: "KSC-Company-Profile.pdf",
      });

    // Keep the cached result if Supabase temporarily fails.
    if (error || !active) return;

    const exists = Boolean(
      data?.some(
        (file) => file.name === "KSC-Company-Profile.pdf"
      )
    );

    sessionStorage.setItem(
      "kscCompanyProfileExists",
      String(exists)
    );

    setCurrentProfileExists(exists);
  };

  checkCompanyProfile();

  return () => {
    active = false;
  };
}, []);


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

              
              <a
                href="/services/architectural-interior-finishes"
                onClick={closeMenu}
              >
                Architectural &amp; Interior Design
              </a>


              <a href="/services/mechanical-works">
                Mechanical Works
              </a>

              <a href="/services/electrical-works">
                Electrical Works
              </a>

              <a href="/services/hvac-works">
                HVAC Works
              </a>

              <a href="/services/fire-detection-fire-fighting">
                Fire Detection & Fire Fighting
              </a>

              <a href="/services/equipment-machine-installations">
                Equipment & Machine Installations
              </a>

              <a href="/services/pharmaceutical-cleanroom-facilities">
                Pharmaceutical & Cleanroom facilities
              </a>
              
              <a href="/services/fitout-works">
                Fitout Works
              </a>

            </div>

          </div>

          <a href="/projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="/Safety" onClick={closeMenu}>
            Quality & HSE Policy
          </a>

          <a href="/careers" onClick={closeMenu}>
            Careers
          </a>

          
          
            {currentProfileExists === true && (
              <a
                className="nav-download"
                href={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/company-profile/KSC-Company-Profile.pdf?download`}
                onClick={closeMenu}
                aria-label="Download Company Profile PDF"
              >
                Download Profile
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
              </a>
            )}



          <a
            className="nav-contact"
            href="/contact"
            onClick={closeMenu}
          >
            Contact
            <span className="contact-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
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