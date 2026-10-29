import React, { useEffect, useState, useRef } from "react";
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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ProjectFootprint from "./components/ProjectFootprint";




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

const clientLogos = [
  { name: "Client One", src: "/images/client-1.png" },
  { name: "Client Two", src: "/images/client-2.png" },
  { name: "Client Three", src: "/images/client-3.png" },
  { name: "Client Four", src: "/images/client-4.png" },
  { name: "Client Five", src: "/images/client-5.png" },
  { name: "Client Six", src: "/images/client-6.png" },
  { name: "Client Six", src: "/images/client-7.png" },
  { name: "Client Six", src: "/images/client-8.png" },
  { name: "Client Six", src: "/images/client-9.png" },
  { name: "Client Six", src: "/images/client-10.png" },
  { name: "Client Six", src: "/images/client-11.png" },
  { name: "Client Six", src: "/images/client-12.png" },
  { name: "Client Six", src: "/images/client-13.png" },
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


const [showHeroText, setShowHeroText] = useState(false);

    
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
  "civil-construction": "/images/Civil-Construction.jpg",
  "architectural-interior-finishes": "/images/Arch-001.jpeg",
  "mechanical-works": "/images/Mech-001.jpg",
  "electrical-works": "/images/Electrical-001.png",
  "hvac-works": "/images/HVAC-001.jpg",
  "fire-detection-fire-fighting": "/images/Fire-001.png",
  "pharmaceutical-cleanroom-facilities": "/images/Pharma-001.jpg",
  "fitout-works": "/images/Fitout-001.jpg",
  "equipment-machine-installations": "/images/Equipment-001.jpeg"
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


const heroVideos = [
  "/images/ksc-hero-edit1.mp4",
  "/images/KSC VIDEO HB V2.mp4",
  "/images/KSC v2.mp4",
];

const [activeVideo, setActiveVideo] = useState(0);

const handleVideoEnded = () => {
  if (activeVideo < heroVideos.length - 1) {
    setActiveVideo((current) => current + 1);
  }
};

  return (
    <div className="site">
            

      <main>
        <section id="home" className="hero">
          
        

<video
  key={heroVideos[activeVideo]}
  className="hero-background-video"
  autoPlay
  muted
  playsInline
  preload="auto"
  onPlaying={() => setShowHeroText(true)}
  onEnded={handleVideoEnded}
  onError={(e) => {
    console.error(
      "Hero video error:",
      e.currentTarget.currentSrc,
      e.currentTarget.error
    );
  }}
>
  <source
    src={heroVideos[activeVideo]}
    type="video/mp4"
  />
</video>




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
              <span className="hero-title-green">Your Trusted Partner</span>
              <span className="hero-title-white">for Turnkey Construction</span>
              <span className="hero-title-green">Solutions</span>
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
                SAR<span className="billion-text">1 Billion</span>
                <span className="plus">+</span>
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

        
<section id="services" className="ksc-services-section section reveal-section">
  <div className="ksc-services-grid-bg" aria-hidden="true"></div>

  <div className="container ksc-services-container">
    {/* Section heading */}
    
      <div className="ksc-services-header">
        <div className="ksc-services-heading-copy">
          <p className="eyebrow">OUR EXPERTISE</p>
          <h2>
            Integrated engineering.<br />
            <span>End-to-end delivery.</span>
          </h2>
          <p className="ksc-services-intro">
            From civil construction to specialist industrial installations,
            KSC delivers dependable engineering solutions built around
            experience, precision and performance.
          </p>
        </div>

        <div className="ksc-services-header-note">
          <a
            href="/KSC-Company-Profile.pdf"
            className="ksc-profile-download"
            target="_blank"
            rel="noopener noreferrer"
            download="KSC-Company-Profile.pdf"
          >
            <span>Download Company Profile</span>
            <span className="ksc-profile-download-icon" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>


    {/* Nine service cards */}
    <div className="ksc-services-grid">
      {[
        "civil-construction",
        "architectural-interior-finishes",
        "mechanical-works",
        "electrical-works",
        "hvac-works",
        "fire-detection-fire-fighting",
        "pharmaceutical-cleanroom-facilities",
        "fitout-works",
        "equipment-machine-installations",
      ].map((imageKey, index) => {
        const image =
          serviceImages[imageKey] ||
          serviceImages["civil-construction"];

        const service = services[index];

        if (!service) return null;

        return (
          <a
            className="ksc-service-card"
            key={imageKey}
            href={`/services/${imageKey}`}
            style={{ "--card-index": index }}
          >
            <div
              className="ksc-service-card-image"
              style={{
                backgroundImage: `url("${image}")`,
              }}
              role="img"
              aria-label={service[1]}
            >
              <div className="ksc-service-image-shade"></div>

              <span className="ksc-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="ksc-service-card-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            <div className="ksc-service-card-content">
              

              <h3>{service[1]}</h3>

              <p>{service[2]}</p>

              
            <a
              className="ksc-service-link"
              href={`/services/${imageKey}`}
              aria-label={`Explore ${service[1]}`}
            >
              <span>Explore service</span>
              <span aria-hidden="true">→</span>
            </a>

            </div>

            <div
              className="ksc-service-card-accent"
              aria-hidden="true"
            ></div>
          </a>
        );
      })}
    </div>

    {/* Bottom call to action */}
    <div className="ksc-services-footer">
      <div>
        <span className="ksc-services-footer-label">
          HAVE A PROJECT IN MIND?
        </span>
        <h3>Let's build something dependable.</h3>
      </div>

      <a className="ksc-services-cta" href="/contact">
        Discuss your project
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </div>
</section>





{/* Fixed background transition before F&B projects */}
<section className="auxiliary-transition fb-projects-transition">
  <div className="auxiliary-transition-image" />
  <div className="auxiliary-transition-overlay" />

  <div className="auxiliary-transition-content">
    <span>KHAMIS AL SHARJAH CONTRACTING CO.</span>
    <h2>
      Engineering Excellence.<br />
      Delivered End to End.
    </h2>
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





{/* Full-width visual transition before Auxiliary Services */}
<section className="auxiliary-transition" aria-label="KSC construction">
  <div className="auxiliary-transition-image" />
  <div className="auxiliary-transition-overlay" />

  <div className="auxiliary-transition-content">
    <span>KHAMIS AL SHARJAH CONTRACTING CO.</span>
    <h2>Built on Experience.<br />Driven by Excellence.</h2>
  </div>
</section>










        
<section className="quality-value-section reveal-section" id="quality-value">
  <div className="qv-background-glow" aria-hidden="true" />

  <div className="qv-container">

    {/* Section heading */}
    <div className="qv-header">
      <div className="qv-heading-copy">
        <div className="qv-eyebrow">
          <span className="qv-eyebrow-line" />
        </div>

        <h2>
          
          <span>Quality is our foundation.</span>
          <br />
          Value is our commitment.
        </h2>

        <p className="qv-intro">
          Reliable, cost-efficient construction tailored for peak
          factory and distribution performance.
        </p>
      </div>

      <div className="qv-quality-mark">
        <div className="qv-mark-ring">
          <div className="qv-mark-inner">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 5L51 12V29C51 42 43 52 32 59C21 52 13 42 13 29V12L32 5Z" />
              <path d="M22 31L29 38L43 23" />
            </svg>

            <span>QUALITY</span>
            <span className="qv-mark-divider" />
            <span>VALUE</span>
          </div>
        </div>

        <p>Built on trust. Delivered with integrity.</p>
      </div>
    </div>

    {/* Quality and value commitments */}
    <div className="qv-list">

      
      



<svg
  className="qv-zigzag-track"
  viewBox="0 0 1000 1000"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <path
    className="qv-zigzag-base"
    d="
      M 500 0
      L 500 80
      L 490 100
      L 580 125
      L 430 165
      L 500 145
      L 500 250

      L 500 330
      L 470 350
      L 540 375
      L 430 415
      L 500 395
      L 500 500

      L 500 580
      L 470 600
      L 540 625
      L 430 665
      L 500 645
      L 500 750

      L 500 830
      L 470 850
      L 540 875
      L 430 915
      L 500 895
      L 500 1000
    "
  />
  <path
    className="qv-zigzag-neon"
    d="
      M 500 0
      L 500 80
      L 490 100
      L 580 125
      L 430 165
      L 500 145
      L 500 250

      L 500 330
      L 470 350
      L 540 375
      L 430 415
      L 500 395
      L 500 500

      L 500 580
      L 470 600
      L 540 625
      L 430 665
      L 500 645
      L 500 750

      L 500 830
      L 470 850
      L 540 875
      L 430 915
      L 500 895
      L 500 1000
    "
  />
</svg>






      <article className="qv-item">
        <div className="qv-number">01</div>

        <div className="qv-item-copy">
          <h3>Experience That Delivers</h3>
          <p>30+ years delivering high-quality construction.</p>
        </div>

        <div className="qv-item-icon">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="17" />
            <path d="M24 13V24L32 29" />
            <path d="M15 5L11 10M33 5L37 10" />
          </svg>
        </div>
      </article>

      <article className="qv-item">
        <div className="qv-number">02</div>

        <div className="qv-item-copy">
          <h3>Precision in Project Delivery</h3>
          <p>On-time delivery focused project management.</p>
        </div>

        <div className="qv-item-icon">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="17" />
            <path d="M15 24L21 30L34 17" />
          </svg>
        </div>
      </article>

      <article className="qv-item">
        <div className="qv-number">03</div>

        <div className="qv-item-copy">
          <h3>Value Without Compromise</h3>
          <p>Cost-efficient solutions without compromising quality.</p>
        </div>

        <div className="qv-item-icon">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="17" />
            <text
              x="24"
              y="32"
              textAnchor="middle"
              fontSize="28"
              fontWeight="500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              ⃁
            </text>
            
          </svg>
        </div>
      </article>

      <article className="qv-item">
        <div className="qv-number">04</div>

        <div className="qv-item-copy">
          <h3>A Partner You Can Trust</h3>
          <p>Trusted partner ensuring peak facility performance.</p>
        </div>

        <div className="qv-item-icon">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M24 5L39 11V25C39 34 32 41 24 45C16 41 9 34 9 25V11L24 5Z" />
            <path d="M17 24L22 29L32 19" />
          </svg>
        </div>
      </article>

      <article className="qv-item">
        <div className="qv-number">05</div>

        <div className="qv-item-copy">
          <h3>Solutions Built Around Your Needs</h3>
          <p>Tailored, reliable solutions for factories and distribution centers.</p>
        </div>

        <div className="qv-item-icon">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <rect x="8" y="8" width="32" height="32" rx="3" />
            <path d="M16 17H32M16 24H32M16 31H26" />
            <path d="M34 31L37 34L43 27" />
          </svg>
        </div>
      </article>

    </div>

    
  </div>
</section>

{/* Neon Zigzag Section Divider */}
<div className="neon-zigzag-divider" aria-hidden="true">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="neonFlowGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#526b25" />
        <stop offset="50%" stopColor="#d7ff48" />
        <stop offset="100%" stopColor="#526b25" />
      </linearGradient>
    </defs>

    <path
      className="neon-zigzag-base"
      d="M0 60 C120 60 120 15 240 15 S360 105 480 105 S600 15 720 15 S840 105 960 105 S1080 15 1200 15 S1320 60 1440 60"
    />

    <path
      className="neon-zigzag-glow"
      d="M0 60 C120 60 120 15 240 15 S360 105 480 105 S600 15 720 15 S840 105 960 105 S1080 15 1200 15 S1320 60 1440 60"
    />

    <path
      className="neon-zigzag-flow"
      d="M0 60 C120 60 120 15 240 15 S360 105 480 105 S600 15 720 15 S840 105 960 105 S1080 15 1200 15 S1320 60 1440 60"
    />
  </svg>
</div>




<ProjectFootprint />




{/* KSC LOCATION — ARCHITECTURAL DESIGN */}
<section className="ksc-location-v2">
  <div className="ksc-location-v2-inner">

    <div className="ksc-location-v2-header">
      <div className="ksc-location-v2-index">
      </div>
    </div>

    <div className="ksc-location-v2-layout">

      {/* LEFT: TYPOGRAPHY AND LOCATION DETAILS */}
      <div className="ksc-location-v2-info">
        <span className="ksc-location-v2-eyebrow">
          OUR HEAD OFFICE <span>—</span> RIYADH, KSA
        </span>
        <h2>
          Rooted
          <br />
          in the <span>Kingdom.</span>
        </h2>

        <p className="ksc-location-v2-description">
          From planning to project delivery, KSC brings engineering
          expertise and construction capabilities to the projects
          shaping the built environment.
        </p>

        <div className="ksc-location-v2-address">
          <div className="ksc-location-v2-pin">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 10C20 15 12 22 12 22S4 15 4 10a8 8 0 1 1 16 0Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </div>

          <div>
            <span className="ksc-location-v2-label">LOCATION</span>
            <h3>Elegant Center Complex</h3>
            <p>Al Jamiah Street, Al Malaz, Riyadh 12642</p>
            <p>Kingdom of Saudi Arabia</p>
          </div>
        </div>

        <a
          className="ksc-location-v2-button"
          href="https://www.google.com/maps/search/?api=1&query=Elegant%20Center%20Complex%2C%20Al%20Jamiah%20Street%2C%20Al%20Malaz%2C%20Riyadh%2012642%2C%20Saudi%20Arabia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Explore on Google Maps</span>
          <span className="ksc-location-v2-button-icon">↗</span>
        </a>

        <div className="ksc-location-v2-footer">
        </div>
      </div>

      {/* RIGHT: MAP PANEL */}
      <div className="ksc-location-v2-map-panel">
        <div className="ksc-location-v2-map-top">
          <span>
            <i className="ksc-location-v2-live-dot" />
            LOCATION
          </span>
          
        </div>

        
          <div className="ksc-location-v2-map">
            <a
              className="ksc-location-v2-map-link"
              href="https://www.google.com/maps/place/Khamis+Al+Sharjah+Contracting+Company/@24.6620504,46.7271027,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f05b3aee8ce07:0xe9173b2ff049307c!8m2!3d24.6620455!4d46.7296776!16s%2Fg%2F1q5gl9mb6?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open KSC office location in Google Maps"
            >
              <iframe
                title="KSC Head Office Location"
                src="https://maps.google.com/maps?q=Elegant%20Center%20Complex%2C%20Al%20Jamiah%20Street%2C%20Al%20Malaz%2C%20Riyadh%2012642%2C%20Saudi%20Arabia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                tabIndex="-1"
              />
            </a>

            <div className="ksc-location-v2-map-stamp">
              <span className="ksc-location-v2-stamp-cross">+</span>
              <div>
                <strong>KSA</strong>
                <span>AL MALAZ · RIYADH</span>
              </div>
            </div>
          </div>


        <div className="ksc-location-v2-map-bottom">
          <span>SAUDI ARABIA</span>
          <span className="ksc-location-v2-map-bottom-line" />
          
        </div>
      </div>

    </div>
  </div>
</section>






{/* Saudi Vision 2030 transition banner */}
<section className="vision2030-section">
  <div className="vision2030-background" aria-hidden="true" />
  <div className="vision2030-overlay" aria-hidden="true" />

  <div className="vision2030-container">
    <div className="vision2030-logo">
      <img
        src="/images/vision2030.png"
        alt="Saudi Arabia Vision 2030"
        loading="lazy"
      />
    </div>

    
<div className="vision2030-content">
  <img
    className="vision2030-company-watermark"
    src="/images/logo1.png"
    alt=""
    aria-hidden="true"
  />

  <div className="vision2030-content-inner">
    <h2>
      <span>Realization</span> of Saudi Arabia’s<br />Vision 2030
    </h2>

    <p>
      Project management and construction excellence play an important
      role in supporting Saudi Arabia’s Vision 2030 through reliable
      project delivery, efficient infrastructure and sustainable
      development.
    </p>
  </div>
</div>

  </div>
</section>



        

<section id="clients" className="clients-section section">
  <div className="container">
    <div className="clients-layout">
      <div className="clients-copy">
        <p className="eyebrow">OUR CLIENTS & PARTNERS</p>

        <h2>
          Trusted 
          <span> partnerships</span>
        </h2>

        <p className="clients-description">
          Built on trust, strengthened by collaboration,
          and delivered with a commitment to quality,
          safety, and excellence.
        </p>

        
      </div>

      <div className="clients-conveyor">
        {[0, 1, 2].map((column) => {
          const columnLogos =
            clientLogos.filter((_, index) => index % 3 === column);

          const logos = [...columnLogos, ...columnLogos];

          return (
            <div
              className={`clients-column clients-column-${column + 1}`}
              key={column}
            >
              <div className="clients-column-track">
                {logos.map((client, index) => (
                  <div
                    className="clients-logo-tile"
                    key={`${client.name}-${index}`}
                  >
                    <img
                      src={client.src}
                      alt={index < columnLogos.length
                        ? client.name
                        : ""}
                      aria-hidden={index >= columnLogos.length}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
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

{/* Fixed Social Media Sidebar */}
<div className="social-sidebar" aria-label="Social media links">
  <a
    href="https://wa.me/966558156899"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link whatsapp"
    aria-label="WhatsApp"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5Z" />
      <path d="M8.5 7.8c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.7-.6.5-1.4.8-2.2.6-1.2-.3-2.7-.9-4.1-2.3-1.2-1.2-2-2.7-2.2-3.8-.2-.9.2-1.7.6-2Z" />
    </svg>
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link twitter"
    aria-label="X / Twitter"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.5L6.3 22H3.1l7.3-8.4L2.6 2h6.5l4.4 5.9L18.9 2Zm-1.1 18h1.7L8 3.9H6.2L17.8 20Z" />
    </svg>
  </a>

  <a
  href="mailto:sales@ksc-sa.com"
  className="social-link gmail"
  aria-label="Email us"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 7L12 13L20 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

  <a
    href="https://www.instagram.com/ksc_architecture/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link instagram"
    aria-label="Instagram"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/company/khamis-al-sharjah-contracting-co/posts/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link linkedin"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8.5H2V22h3V8.5ZM3.5 2A1.8 1.8 0 1 0 3.5 5.6 1.8 1.8 0 0 0 3.5 2ZM22 13.8c0-4-2.1-5.8-4.9-5.8a4.2 4.2 0 0 0-3.8 2.1V8.5h-3V22h3v-7.5c0-2 .4-3.9 2.8-3.9s2.4 2.2 2.4 4V22h3.1l.4-8.2Z" />
    </svg>
  </a>
</div>

      
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

    {/* KSC BRAND */}
    <div className="service-footer-brand">
      <a href="/" aria-label="KSC home">
        <img src="/images/logo.png" alt="Khamis Al Sharjah Contracting Co." />
      </a>

      <p>
        Delivering reliable construction, engineering and
        industrial facility solutions across Saudi Arabia.
      </p>

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

    {/* COMPANY LINKS */}
    <div className="service-footer-column">
      <span className="footer-heading">COMPANY</span>
      <a href="/">Home</a>
      <a href="/about">About KSC</a>
      <a href="/projects">Projects</a>
      <a href="/careers">Careers</a>
      <a href="/contact">Contact Us</a>
      <a href="/#contact">Get in Touch</a>
    </div>

    {/* SERVICES */}
    <div className="service-footer-column">
      <span className="footer-heading">SERVICES</span>
      <a href="/services/civil-construction">Civil Construction</a>
      <a href="/services/mechanical-works">Mechanical Works</a>
      <a href="/services/electrical-works">Electrical Works</a>
      <a href="/services/hvac-works">HVAC Works</a>
      <a href="/services/fire-detection-fire-fighting">
        Fire Detection &amp; Fire Fighting
      </a>
      <a href="/services/pharmaceutical-cleanroom-facilities">
        Pharmaceutical &amp; Cleanroom Facilities
      </a>
      <a href="/services/fitout-works">Fitout Works</a>
      <a href="/services/equipment-machine-installations">
        Equipment &amp; Machine Installations
      </a>
    </div>

    {/* INDUSTRIES AND CONTACT */}
    <div className="service-footer-column footer-industries-contact">
      <span className="footer-heading">INDUSTRIES</span>
      <p>Food &amp; Beverage</p>
      <p>Dairy &amp; Poultry</p>
      <p>Beverage Manufacturing</p>
      <p>Pharmaceutical Facilities</p>
      <p>Cleanroom Facilities</p>

      <span className="footer-heading footer-contact-heading">
        CONTACT
      </span>
      <p>Riyadh, Kingdom of Saudi Arabia</p>
      <a href="tel:+966510020030">+966 5100 200 30</a>
      <a href="mailto:sales@ksc-sa.com">sales@ksc-sa.com</a>
      <a className="footer-contact-link" href="/contact">
        Contact KSC <span aria-hidden="true">↗</span>
      </a>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="service-footer-bottom">
    <span className="ksc-copyright">
      © {new Date().getFullYear()} KSC Contracting Co. All rights reserved.
      <a href="/admin" className="ksc-admin-link">
        Admin
      </a>
    </span>

    <span className="footer-tagline">Engineering What's Next.</span>
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
