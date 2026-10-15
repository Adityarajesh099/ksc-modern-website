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
import AdminPage from "./pages/AdminPage";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { supabase } from "./supabase";




const services = [
  ["01", "Civil Construction", "Structures, infrastructure and turnkey civil works."],
  ["02", "Architectural & Interior Finishes", "Architectural finishes and interior fitout solutions."],
  ["03", "Mechanical Works", "Industrial mechanical installation and project delivery."],
  ["04", "Electrical Works", "Reliable electrical systems for demanding facilities."],
  ["05", "HVAC Works", "Efficient heating, ventilation and air-conditioning solutions."],
  ["06", "Fire Detection & Fire Fighting System", "Integrated fire detection and fire fighting systems."],
  ["07", "Pharmaceutical & Cleanroom Facilities", "Specialized pharmaceutical facilities and controlled cleanroom environments."],
  ["08", "Fitout Works", "End-to-end interior fitout for commercial and industrial spaces."],
  ["09", "Equipment & Machine Installations", "Specialized equipment and machine installation and commissioning."]
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
  return (
    <span
      className={small ? "arrow small" : "arrow"}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width={small ? 16 : 20}
        height={small ? 16 : 20}
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
  );
}



function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [heroImage, setHeroImage] = useState(0);
    const [currentProfileExists, setCurrentProfileExists] = useState(false);

    
useEffect(() => {
  const checkCompanyProfile = async () => {
    const { data, error } = await supabase.storage
      .from("company-profile")
      .list("", {
        search: "KSC-Company-Profile.pdf",
      });

    const exists =
      !error &&
      data?.some(
        (file) => file.name === "KSC-Company-Profile.pdf"
      );

    setCurrentProfileExists(Boolean(exists));
  };

  checkCompanyProfile();
}, []);


const serviceImages = {
  "civil-construction": "/images/services/Civil-001.png",
  "architectural-interior-finishes": "/images/Architectural-New.jpeg",
  "mechanical-works": "/images/Mechanical-001.png",
  "electrical-works": "/images/Electrical-001.png",
  "hvac-works": "/images/HVAC-001.png",
  "fire-detection-fire-fighting": "/images/Fire-001.png",
  "pharmaceutical-cleanroom-facilities": "/images/pharma.png",
  "fitout-works": "/images/services/Fitout-001.png",
  "equipment-machine-installations": "/images/services/Installation-001.png"
};


useEffect(() => {
  Object.values(serviceImages).forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}, []);


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
  const counters = document.querySelectorAll(
    ".stat-number:not(.industrial-value)"
  );

  const animateCounter = (element) => {
    const target = Number(element.dataset.target);

    if (!Number.isFinite(target)) return;

    const duration = 1800;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

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


useEffect(() => {
  const sections = document.querySelectorAll(".reveal-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.30 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);




const aboutImages = [
  "/images/Aboutimg.png",
  "/images/Aboutimg2.png",
];

const [aboutSlide, setAboutSlide] = useState(0);

useEffect(() => {
  if (aboutImages.length <= 1) return;

  const timer = setInterval(() => {
    setAboutSlide((current) => (current + 1) % aboutImages.length);
  }, 5000);

  return () => clearInterval(timer);
}, [aboutImages.length]);


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
            <h2 className="hero-title">
              <span className="hero-title-green">Building The Future</span>
              <span className="hero-title-white">Driven by Excellence</span>
            </h2>
            <p className="hero-copy hero-description">
              Delivering innovative construction and engineering solutions that turn ambitious visions into lasting landmarks
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#services">Explore Services <Arrow /></a>


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

        <section id="about" className="intro section reveal-section">
          
            <div className="container intro-grid">
              <div className="intro-title">
                <p className="eyebrow">ABOUT KSC</p>

              
                    <h2 className="about-heading">
                      <span className="about-heading-line">
                        Engineering capability.
                      </span>

                      <span className="about-heading-line about-heading-green">
                        Built around experience.
                      </span>
                    </h2>

                <p className="lead">
                  KSC delivers integrated construction and engineering services
                  for industrial, commercial and infrastructure environments.
                </p>
              </div>

              <div className="intro-copy">
                
                  <div className="about-image">
                    {[
                      "/images/Aboutimg.png",
                      "/images/Aboutimg2.png",
                    ].map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`KSC construction and engineering ${index + 1}`}
                        className={`about-fade-image ${index === aboutSlide ? "active" : ""}`}
                      />
                    ))}
                  </div>


                <p>
                  Our approach brings civil, mechanical, electrical and specialist
                  project capabilities together to create dependable turnkey solutions.
                </p>

                <a className="text-link" href="/contact">
                  Discover KSC <Arrow small />
                </a>
              </div>
            </div>


          <div className="container stats">
            <div>
              <span className="stat-icon" aria-hidden="true">▦</span>
              <strong className="stat-number" data-target="1989">0</strong>
              <span>Established</span>
            </div>

            <div>
              <span className="stat-icon" aria-hidden="true">★</span>
              <strong className="stat-number" data-target="35">0<span className="plus">+</span></strong>
              <span>Years of experience</span>
            </div>
            
            <div>
              <span className="stat-icon" aria-hidden="true">▤</span>
              <strong className="stat-number" data-target="20" data-pad="false">
                20<span className="plus">+</span>
              </strong>
              <span>Operating as Khamis Al Sharjah Contracting Co.</span>
            </div>

            <div>
              <span className="stat-icon" aria-hidden="true">♙</span>
              <strong className="stat-number" data-target="500" data-pad="false">
                20<span className="plus">+</span>
              </strong>
              <span>Direct workforce</span>
            </div>

             <div>
              <span className="stat-icon coin-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <ellipse cx="17" cy="15" rx="11" ry="5" />
                  <path d="M6 15v17c0 3 5 5 11 5s11-2 11-5V15" />
                  <path d="M6 21c0 3 5 5 11 5s11-2 11-5M6 27c0 3 5 5 11 5s11-2 11-5" />
                  <ellipse cx="32" cy="8" rx="10" ry="4" />
                  <path d="M22 8v17c0 3 4 5 10 5s10-2 10-5V8" />
                  <path d="M22 14c0 3 4 5 10 5s10-2 10-5M22 20c0 3 4 5 10 5s10-2 10-5" />
                </svg>
              </span>
              <strong className="stat-number industrial-value">
                SAR 1<span className="plus">+</span>
                <span className="billion-text">Billion</span>
              </strong>
              <span>TOTAL VALUE OF INDUSTRIAL PROJECTS EXECUTED</span>
            </div>

            <div>
              <span className="stat-icon" aria-hidden="true">✓</span>
              <strong className="stat-number" data-target="500" data-pad="false">
                20<span className="plus">+</span>
              </strong>
              <span>Project Successfully Delivered</span>
            </div>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="services-watermark">KSC</div>
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">CAPABILITIES</p>
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
                      "architectural-interior-finishes",
                      "mechanical-works",
                      "electrical-works",
                      "hvac-works",
                      "fire-detection-fire-fighting",
                      "pharmaceutical-cleanroom-facilities",
                      "fitout-works",
                      "equipment-machine-installations"
                    ][index]
                    }`}
                    className="service-item"
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <span className="service-flow"></span>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <Arrow small />
                  </a>
                ))}
              </div>

              <div className="service-feature">
                <div className="service-image"
                  style={{
                    backgroundImage: `url("${serviceImages[
                      [
                        "civil-construction",
                        "architectural-interior-finishes",
                        "mechanical-works",
                        "electrical-works",
                        "hvac-works",
                        "fire-detection-fire-fighting",
                        "pharmaceutical-cleanroom-facilities",
                        "fitout-works",
                        "equipment-machine-installations",
                      ][activeService]
                    ] || serviceImages["civil-construction"]}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 45%",
                  }}
                ></div>
                <div className="service-feature-copy service-image-content">
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

        

<section className="auxiliary-services section">
  <div className="auxiliary-services-inner">

    {/* LEFT: COLOURED SERVICE LIST */}
    <div className="auxiliary-services-list">

      <div className="auxiliary-service-item item-1">
        <div className="auxiliary-service-icon">
          <span>01</span>
        </div>
        <p><strong>Staff &amp; Worker Accommodation</strong></p>
      </div>

      <div className="auxiliary-service-item item-2">
        <div className="auxiliary-service-icon">
          <span>02</span>
        </div>
        <p><strong>Commercial &amp; Retail Buildings</strong></p>
      </div>

      <div className="auxiliary-service-item item-3">
        <div className="auxiliary-service-icon">
          <span>03</span>
        </div>
        <p><strong>Swimming Pools &amp; Sports Facilities</strong></p>
      </div>

      <div className="auxiliary-service-item item-4">
        <div className="auxiliary-service-icon">
          <span>04</span>
        </div>
        <p><strong>Utilities &amp; Infrastructure</strong></p>
      </div>

      <div className="auxiliary-service-item item-5">
        <div className="auxiliary-service-icon">
          <span>05</span>
        </div>
        <p><strong>Integrated Project Support</strong></p>
      </div>

    </div>

    {/* RIGHT: CENTRED HEADING */}
    <div className="auxiliary-services-content">

      <div className="auxiliary-divider"></div>
      <div className="auxiliary-corner auxiliary-corner-top"></div>
      <div className="auxiliary-corner auxiliary-corner-bottom"></div>

      <div className="auxiliary-services-heading">
        <h2>
          Comprehensive
          <br />
          <span>Auxiliary Services</span>
        </h2>

        <p>
          Integrated facilities and infrastructure that support
          project delivery, site operations and workforce welfare.
        </p>
      </div>

    </div>

  </div>
</section>




        <section className="quality-value-section reveal-section">

          <div className="quality-value-corner"></div>

          <div className="quality-value-header">
            <p className="eyebrow">KSC STANDARD</p>

            <h2>Commitment to Quality and Value</h2>

            <p>
              Reliable, cost-efficient construction tailored for peak factory
              and distribution performance
            </p>
          </div>

          <div className="quality-value-list">

            <div className="quality-value-row">
              <div className="quality-value-text">
               <strong>30+ </strong>YEARS DELIVERING HIGH-QUALITY CONSTRUCTION
              </div>
              <div className="quality-value-number">01</div>
            </div>

            <div className="quality-value-row">
              <div className="quality-value-text">
                ON-TIME DELIVERY FOCUSED PROJECT MANAGEMENT
              </div>
              <div className="quality-value-number">02</div>
            </div>

            <div className="quality-value-row">
              <div className="quality-value-text">
                COST-EFFICIENT SOLUTIONS WITHOUT COMPROMISING QUALITY
              </div>
              <div className="quality-value-number">03</div>
            </div>

            <div className="quality-value-row">
              <div className="quality-value-text">
                TRUSTED PARTNER ENSURING PEAK FACILITY PERFORMANCE
              </div>
              <div className="quality-value-number">04</div>
            </div>

            <div className="quality-value-row">
              <div className="quality-value-text">
                TAILORED, RELIABLE SOLUTIONS FOR FACTORIES AND DISTRIBUTION CENTERS
              </div>
              <div className="quality-value-number">05</div>
            </div>

          </div>

        </section>


        <section id="industries" className="industries section">
          <div className="container">
            <div className="industry-intro">
              <p className="eyebrow">INDUSTRIES</p>
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


        <section id="careers" className="careers section">
          <div className="container career-grid">
            <div>
              <p className="eyebrow">CAREERS</p>
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
              <p className="eyebrow light">CONTACT KSC</p>
              <h2>Let's build<br />something together.</h2>
            </div>
            <div className="contact-details">
              <p>Riyadh, Kingdom of Saudi Arabia</p>
              <a href="mailto:info@ksc-sa.com">sales@ksc-sa.com</a>
              <a href="tel:+966000000000">+966 5100 200 30</a>
              <a className="button white" href="/contact">Start a conversation <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      
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
        <Route path="/admin" element={<AdminPage />} />

        <Route
          path="/services/:service"
          element={<ServicePage />}
        />
      </Routes>
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
      <a href="/about">About KSC</a>
      <a href="#services">Services</a>
      <a href="/projects">Projects</a>
      <a href="#industries">Industries</a>
      <a href="/careers">Careers</a>
    </div>

    <div className="service-footer-column">
      <span>SERVICES</span>
      <a href="/services/civil-construction">Civil Construction</a>
      <a href="/services/architectural-interior-finishes">Architectural & Interior Finishes</a>
      <a href="/services/mechanical-works">Mechanical Works</a>
      <a href="/services/electrical-works">Electrical Works</a>
      <a href="/services/hvac-works">HVAC Works</a>
      <a href="/services/fire-detection-fire-fighting">Fire Detection & Fire Fighting System</a>
      <a href="/services/pharmaceutical-cleanroom-facilities">Pharmaceutical & Cleanroom Facilities</a>
      <a href="/services/fitout-works">Fitout Works</a>
      <a href="/services/equipment-machine-installations">Equipment & Machine Installations</a>
      </div>

    <div className="service-footer-column">
      <span>CONTACT</span>
      <p>Saudi Arabia</p>
      <p>+966 (0) 5100 20030</p>
      <a href="#contact">Contact KSC</a>
    </div>

    <div className="footer-socials">
      <a
        href="https://wa.me/966558156899"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.4 2.2 2.3 4.1 4.5 4.5l1.2-1.2 2 1c-.2 1.4-1.3 2.2-2.7 2-3.5-.6-6.3-3.4-6.9-6.9-.2-1.4.6-2.5 2-2.7l1 2Z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/company/khamis-al-sharjah-contracting-co/home/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 9v10M5 5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/ksc_architecture/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      </a>
    </div>

  </div>

  <div className="service-footer-bottom">
    <span className="ksc-copyright">
  © 2026 KSC Contracting Co. All rights reserved.
  <a href="/admin" className="ksc-admin-link">
    Admin
  </a>
</span>
    <span>Engineering What's Next.</span>
  </div>
</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SiteLayout />
  </BrowserRouter>
);
