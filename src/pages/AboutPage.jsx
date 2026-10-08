import React from "react";

const services = [
  {
    number: "01",
    title: "Civil Construction",
    slug: "civil-construction",
    image: "/images/Civil-001.png",
  },
  {
    number: "02",
    title: "Electrical Works",
    slug: "electrical-works",
    image: "/images/Electrical-001.png",
  },
  {
    number: "03",
    title: "Mechanical Works",
    slug: "mechanical-works",
    image: "/images/Mechanical-001.png",
  },
  {
    number: "04",
    title: "Architectural & Interior Design",
    slug: "architectural-interior-design",
    image: "/images/Architectural-001.jpg",
  },
  {
    number: "05",
    title: "Equipment & Machine Installations",
    slug: "equipment-machine-installations",
    image: "/images/Installation-001.png",
  },
  {
    number: "06",
    title: "Fire Detection & Fire Fighting System",
    slug: "fire-detection-fire-fighting",
    image: "/images/Fire-001.png",
  },
  {
    number: "07",
    title: "HVAC Works",
    slug: "hvac-works",
    image: "/images/HVAC-001.png",
  },
  {
    number: "08",
    title: "Fitout Works",
    slug: "fitout-works",
    image: "/images/Fitout-001.png",
  },
];

export default function AboutPage() {
  return (
    <main className="inner-page">

      {/* HERO */}
      <section className="inner-page-hero">
        <div className="inner-page-hero-image">
          <img
            src="/images/ksc-hero-03.jpg"
            alt="KSC construction project"
          />
        </div>

        <div className="inner-page-hero-overlay"></div>

        <div className="inner-page-hero-content">
          <span className="eyebrow light">01 / ABOUT KSC</span>

          <h1>
            Building with
            <br />
            <span>purpose.</span>
          </h1>

          <p>
            Engineering and construction solutions built around
            experience, quality and long-term value.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro section">
        <div className="container about-intro-grid">

          <div>
            <span className="eyebrow">ABOUT KSC</span>

            <h2>
              Experience that
              <br />
              <span>moves projects forward.</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              Khamis Al Sharjah Contracting Co. is a construction and
              engineering company delivering integrated solutions for
              projects across the Kingdom of Saudi Arabia.
            </p>

            <p>
              Our approach brings together technical expertise,
              experienced teams and disciplined project execution to
              support clients from planning through completion.
            </p>
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-capabilities section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR APPROACH</span>

              <h2>
                Built around
                <br />
                <span>what matters.</span>
              </h2>
            </div>

            <p>
              KSC focuses on practical engineering, responsible
              construction and consistent project delivery.
            </p>
          </div>

          <div className="about-values">

            <article className="about-value">
              <div className="about-value-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M24 6L38 12V22C38 31 32 38 24 42C16 38 10 31 10 22V12L24 6Z" />
                  <path d="M17 24L22 29L32 18" />
                </svg>
              </div>
              <span>01</span>
              <h3>Experience</h3>
              <p>Experienced teams working across construction and engineering environments.</p>
            </article>

            <article className="about-value">
              <div className="about-value-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M8 10H40V38H8Z" />
                  <path d="M15 17H33" />
                  <path d="M15 24H33" />
                  <path d="M15 31H27" />
                </svg>
              </div>
              <span>02</span>
              <h3>Quality</h3>
              <p>A disciplined approach to workmanship, materials and project execution.</p>
            </article>

            <article className="about-value">
              <div className="about-value-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M24 6L39 12V23C39 32 33 38 24 42C15 38 9 32 9 23V12L24 6Z" />
                  <path d="M24 15V28" />
                  <circle cx="24" cy="34" r="1.5" />
                </svg>
              </div>
              <span>03</span>
              <h3>Safety</h3>
              <p>Safety integrated into the way we plan, manage and execute our work.</p>
            </article>

            <article className="about-value">
              <div className="about-value-icon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M7 35H41" />
                  <path d="M10 35V20H20V35" />
                  <path d="M20 35V14H30V35" />
                  <path d="M30 35V8H38V35" />
                  <path d="M15 25L22 19L27 22L38 11" />
                  <path d="M32 11H38V17" />
                </svg>
              </div>
              <span>04</span>
              <h3>Delivery</h3>
              <p>Coordinated teams focused on reliable and efficient project completion.</p>
            </article>

          </div>
        </div>
      </section>

      {/* EXPLORE SERVICES */}
<section className="about-services section">
  <div className="container">

    <div className="section-heading">
      <div>
        <span className="eyebrow">OUR SERVICES</span>

        <h2>
          Explore our
          <br />
          <span>capabilities.</span>
        </h2>
      </div>

      <p>
        From construction and engineering to specialist systems and
        interior solutions, KSC delivers integrated capabilities
        across diverse project environments.
      </p>
    </div>

    <div className="about-services-grid">
      {services.map((service) => (
        <a
          key={service.slug}
          href={`/services/${service.slug}`}
          className="about-service-card"
        >
          <div className="about-service-image">
            <img
              src={service.image}
              alt={service.title}
            />
          </div>

          <div className="about-service-overlay"></div>

          <div className="about-service-content">
            <span>{service.number}</span>

            <h3>{service.title}</h3>

            <div className="about-service-arrow">
              ↗
            </div>
          </div>
        </a>
      ))}
    </div>

  </div>
</section>

      {/* IMAGE / STATEMENT */}
      <section className="about-image-section">

        <div className="about-image">
          <img
            src="/images/ksc-hero-04.jpg"
            alt="KSC engineering and construction"
          />
        </div>

        <div className="about-image-overlay"></div>

        <div className="about-image-content">
          <span className="eyebrow light">KSC STANDARD</span>

          <h2>
            Engineering
            <br />
            <em>what lasts.</em>
          </h2>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container about-cta-inner">

          <div>
            <span className="eyebrow">WORK WITH KSC</span>

            <h2>
              Let's build
              <br />
              <span>something meaningful.</span>
            </h2>
          </div>

          <a className="button primary" href="/#contact">
            Talk to KSC
            <span className="arrow">↗</span>
          </a>

        </div>
      </section>

    </main>
  );
}