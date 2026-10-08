import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ClientsPage from "./pages/ClientsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import SiteHeader from "./components/SiteHeader";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  ["01", "Civil Construction", "Structures, infrastructure and turnkey civil works."],
  ["02", "Electrical Works", "Reliable electrical systems for demanding facilities."],
  ["03", "Mechanical Works", "Industrial mechanical installation and project delivery."],
  ["04", "Architectural & Interior Design", "Functional spaces with a refined architectural finish."],
  ["05", "Equipment & Machine Installations", "Specialized equipment and machine installation and commissioning."],
  ["06", "Fire Detection & Fire Fighting System", "Integrated fire detection and fire fighting systems."],
  ["07", "HVAC Works", "Efficient heating, ventilation and air-conditioning solutions."],
  ["08", "Fitout Works", "End-to-end interior fitout for commercial and industrial spaces."]
];

const projects = [
  {
    title: "Industrial Facilities",
    category: "Industrial Construction",
    location: "Saudi Arabia",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Integrated Infrastructure",
    category: "Engineering & Construction",
    location: "Saudi Arabia",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Modern Project Delivery",
    category: "Turnkey Solutions",
    location: "Saudi Arabia",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a8e8ef2d8?auto=format&fit=crop&w=1600&q=90"
  }
];

function Arrow({ small = false }) {
  return <span className={small ? "arrow small" : "arrow"}>↗</span>;
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [heroImage, setHeroImage] = useState(0);

const heroImages = [
  "/images/ksc-hero-03.jpg",
  "/images/ksc-hero-02.jpg",
  "/images/ksc-hero-01.jpg",
  "/images/ksc-hero-04.jpg"
];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
  const timer = setInterval(() => {
    setHeroImage((current) => (current + 1) % heroImages.length);
  }, 6000);

  return () => clearInterval(timer);
}, []);


useEffect(() => {
  const counters = document.querySelectorAll(".stat-number");

  const animateCounter = (element) => {
    const target = Number(element.dataset.target);
    const duration = 1800;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(target * easedProgress);

      element.firstChild.textContent = String(currentValue).padStart(
        element.dataset.pad === "true" ? 2 : 1,
        "0"
      );

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));

  return () => observer.disconnect();
}, []);




  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
            

      <main>
        <section id="home" className="hero">
          <div className="hero-image">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`KSC construction project ${index + 1}`}
                className={index === heroImage ? "hero-slide active" : "hero-slide"}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-lines"></div>
          <div className="hero-corner hero-corner-a"></div>
          <div className="hero-corner hero-corner-b"></div>

          <div className="hero-content">
            <div className="hero-kicker">
              <span className="kicker-line"></span>
              <p className="eyebrow light">KHAMIS AL SHARJAH CONTRACTING CO.</p>
            </div>
            <h1>
              <span>Building</span>
              <em>what's next.</em>
              <strong className="hero-tagline">Engineering what lasts.</strong>
            </h1>
            <p className="hero-copy">
              Integrated construction and engineering solutions for
              ambitious projects across the Kingdom of Saudi Arabia.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore Projects <Arrow /></a>
              <a className="button ghost" href="#contact">Talk to KSC <Arrow small /></a>
            </div>
          </div>


          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={index === heroImage ? "hero-dot active" : "hero-dot"}
                onClick={() => setHeroImage(index)}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}
          </div>

          <div className="hero-bottom">
            <span className="scroll-note"><i></i> SCROLL TO EXPLORE</span>
          </div>
        </section>

        <section id="about" className="intro section">
          <div className="container intro-grid">
            <div className="intro-title">
              <p className="eyebrow">01 / ABOUT KSC</p>
              <h2>Engineering capability.<br /><span>Built around experience.</span></h2>
            </div>
            <div className="intro-copy">
              <p className="lead">
                KSC delivers integrated construction and engineering services
                for industrial, commercial and infrastructure environments.
              </p>
              <p>
                Our approach brings civil, mechanical, electrical and specialist
                project capabilities together to create dependable turnkey solutions.
              </p>
              <a className="text-link" href="#contact">Discover KSC <Arrow small /></a>
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90"
                  alt="KSC construction and engineering"
                />
              </div>
            </div>
          </div>

          <div className="container stats">
            <div>
              <strong className="stat-number" data-target="1989">0</strong>
              <span>Established</span>
            </div>

            <div>
              <strong className="stat-number" data-target="30">0<span className="plus">+</span></strong>
              <span>Years of experience</span>
            </div>

            <div>
              <strong className="stat-number" data-target="8" data-pad="true">00</strong>
              <span>Core service areas</span>
            </div>

            <div>
              <strong>KSA</strong>
              <span>Saudi market focus</span>
            </div>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / CAPABILITIES</p>
                <h2>What we <span>do.</span></h2>
              </div>
              <p>From groundworks to specialist systems, KSC brings the capabilities needed to deliver complex projects.</p>
            </div>

            <div className="service-layout">
              <div className="service-list">
                {services.map(([number, title, description], index) => (
                  <a
                    key={title}
                    href={`/services/${
                      [
                        "civil-construction",
                        "electrical-works",
                        "mechanical-works",
                        "architectural-interior-design",
                        "equipment-machine-installations",
                        "fire-detection-fire-fighting",
                        "hvac-works",
                        "fitout-works"
                      ][index]
                    }`}
                    className={activeService === index ? "service-item active" : "service-item"}
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <Arrow small />
                  </a>
                ))}
              </div>

              <div className="service-feature">
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url(${
                      [
                        "/images/Civil-001.png",
                        "/images/Electrical-001.png",
                        "/images/Mechanical-001.jpg",
                        "/images/Architectural-001.jpg",
                        "/images/Installation-001.png",
                        "/images/Fire-001.png",
                        "/images/HVAC-001.jpg",
                        "/images/Fitout-001.jpg" 
                      ][activeService]
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 45%",
                  }}
                ></div>
                <div className="service-feature-copy">
                  <span>{services[activeService][0]}</span>
                  <h3>{services[activeService][1]}</h3>
                  <p>{services[activeService][2]}</p>
                </div>
                <div className="service-shape"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="container">

            <div className="fb-section-heading">
              <div>
                <h2>Comprehensive Turnkey Solutions for F&amp;B Facilities</h2>
                <p>
                  End-to-end Civil and MEP delivery tailored for food &amp; beverage operations
                </p>
              </div>
            </div>

            <div className="fb-solutions-grid">

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M6 40V18L24 7L42 18V40" />
                    <path d="M12 40V24H36V40" />
                    <path d="M19 40V31H29V40" />
                  </svg>
                </div>
                <p>
                  Complete civil works: PEB structures, precast buildings, roads, utility infrastructure
                </p>
              </article>

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M24 5V43" />
                    <path d="M5 24H43" />
                    <path d="M11 11L37 37" />
                    <path d="M37 11L11 37" />
                    <circle cx="24" cy="24" r="7" />
                  </svg>
                </div>
                <p>
                  Full MEP scope: advanced HVAC, power stations and substations, electrical distribution
                </p>
              </article>

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M24 5V43" />
                    <path d="M8 14L40 34" />
                    <path d="M40 14L8 34" />
                    <path d="M24 17L30 24L24 31L18 24L24 17Z" />
                  </svg>
                </div>
                <p>
                  Cold chain solutions: chillers, high-/low-pressure compressors, cold &amp; freezer rooms
                </p>
              </article>

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="15" cy="24" r="8" />
                    <circle cx="33" cy="24" r="8" />
                    <path d="M23 24H25" />
                    <path d="M15 16V9" />
                    <path d="M33 32V39" />
                  </svg>
                </div>
                <p>
                  Process equipment installation: filling machines, conveyors, homogenizers, heat exchangers
                </p>
              </article>

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M24 43C14 43 9 37 10 29C11 21 19 18 18 7C27 12 34 18 32 26C36 24 38 21 38 18C43 28 38 43 24 43Z" />
                    <path d="M24 36C20 36 18 33 19 29C20 26 23 24 23 20C27 23 29 26 28 30C30 29 31 27 31 26C33 32 30 36 24 36Z" />
                  </svg>
                </div>
                <p>
                  Thermal systems &amp; fuel: boilers, heat exchangers, fuel systems installation
                </p>
              </article>

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 8H40V40H8Z" />
                    <path d="M24 8V40" />
                    <path d="M8 24H40" />
                    <path d="M8 8L24 24L40 8" />
                    <path d="M8 40L24 24L40 40" />
                  </svg>
                </div>
                <p>
                  Industrial finishes: FM2 flooring, anti-skid hexagonal dairy tiles
                </p>
              </article>

              <article className="fb-solution-card">
                <div className="fb-solution-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="10" cy="24" r="5" />
                    <circle cx="38" cy="10" r="5" />
                    <circle cx="38" cy="38" r="5" />
                    <path d="M15 22L33 12" />
                    <path d="M15 26L33 36" />
                  </svg>
                </div>
                <p>
                  Integrated delivery: turnkey project management from site to commissioning
                </p>
              </article>

            </div>

          </div>
        </section>

        <section id="industries" className="industries section">
          <div className="container">
            <div className="industry-intro">
              <p className="eyebrow">04 / INDUSTRIES</p>
              <h2>Built for <span>demanding</span> environments.</h2>
            </div>
            <div className="industry-grid">
              {["Industrial", "Food & Beverage", "Commercial", "Infrastructure"].map((item, i) => (
                <div className="industry-card" key={item}>
                  <span>0{i + 1}</span>
                  <h3>{item}</h3>
                  <Arrow />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement section">
          <div className="statement-pattern"></div>
          <div className="statement-logo"><img src="/images/ksc-logo.png" alt="" /></div>
          <div className="container statement-inner">
            <p className="eyebrow light">05 / KSC STANDARD</p>
            <h2>Safety is not a requirement.<br /><em>It is how we work.</em></h2>
            <div className="statement-links">
              <a href="#contact">HSE <Arrow small /></a>
              <a href="#contact">Quality <Arrow small /></a>
              <a href="#contact">Compliance <Arrow small /></a>
            </div>
          </div>
        </section>

        <section id="careers" className="careers section">
          <div className="container career-grid">
            <div>
              <p className="eyebrow">06 / CAREERS</p>
              <h2>Build your<br /><span>career with KSC.</span></h2>
            </div>
            <div>
              <p className="lead">Join teams working on challenging construction and engineering projects across Saudi Arabia.</p>
              <a className="button primary" href="#contact">Explore opportunities <Arrow /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow light">07 / CONTACT KSC</p>
              <h2>Let's build<br /><em>something together.</em></h2>
            </div>
            <div className="contact-details">
              <p>Riyadh, Kingdom of Saudi Arabia</p>
              <a href="mailto:info@ksc-sa.com">info@ksc-sa.com</a>
              <a href="tel:+966000000000">+966 XX XXX XXXX</a>
              <a className="button white" href="mailto:info@ksc-sa.com">Start a conversation <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="service-footer">
  <div className="service-footer-main">

    <div className="service-footer-brand">
      <img
        src="/images/logo.png"
        alt="KSC Contracting Co."
      />

      <p>
        Engineering capability built around experience,
        quality and dependable project delivery.
      </p>
    </div>

    <div className="service-footer-column">
      <span>COMPANY</span>
      <a href="#home">Home</a>
      <a href="#about">About KSC</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
    </div>

    <div className="service-footer-column">
      <span>SERVICES</span>
      <a href="/services/civil-construction">Civil Construction</a>
      <a href="/services/electrical-works">Electrical Works</a>
      <a href="/services/mechanical-works">Mechanical Works</a>
      <a href="/services/hvac-works">HVAC Works</a>
    </div>

    <div className="service-footer-column">
      <span>CONTACT</span>
      <p>Saudi Arabia</p>
      <p>+966 (0) 5100 20030</p>
      <a href="#contact">Contact KSC</a>
    </div>

  </div>

  <div className="service-footer-bottom">
    <span>© 2026 KSC Contracting Co. All rights reserved.</span>
    <span>Engineering What's Next.</span>
  </div>
</footer>
    </div>
  );
}



function SiteLayout() {
  return (
    <>
      <SiteHeader />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/services/:service"
          element={<ServicePage />}
        />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SiteLayout />
  </BrowserRouter>
);
