import React, { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Civil Construction",
    slug: "civil-construction",
    image: "/images/Civil-002.jpg",
    description: "Structures, infrastructure and turnkey civil works.",
  },
  {
    number: "02",
    title: "Electrical Works",
    slug: "electrical-works",
    image: "/images/Electrical-001.png",
    description: "Reliable electrical systems for demanding facilities.",
  },
  {
    number: "03",
    title: "Mechanical Works",
    slug: "mechanical-works",
    image: "/images/Mech-001.jpg",
    description: "Industrial mechanical installation and project delivery.",
  },
  {
    number: "04",
    title: "Architectural & Interior Design",
    slug: "architectural-interior-finishes",
    image: "/images/Arch-001.jpeg",
    description: "Architectural finishes and interior fitout solutions.",
  },
  {
    number: "05",
    title: "Equipment & Machine Installations",
    slug: "equipment-machine-installations",
    image: "/images/Installation-001.png",
    description: "Specialized equipment and machine installation and commissioning.",
  },
  {
    number: "06",
    title: "Fire Detection & Fire Fighting System",
    slug: "fire-detection-fire-fighting",
    image: "/images/Fire-001.png",
    description: "Integrated fire detection and fire fighting systems.",
  },
  {
    number: "07",
    title: "HVAC Works",
    slug: "hvac-works",
    image: "/images/HVAC-001.png",
    description: "Efficient heating, ventilation and air-conditioning solutions.",
  },
  {
    number: "08",
    title: "Fitout Works",
    slug: "fitout-works",
    image: "/images/Fitout-001.jpg",
    description: "End-to-end interior fitout for commercial and industrial spaces.",
  },
  {
  number: "09",
  title: "Pharmaceutical & Cleanroom Facilities",
  slug: "pharmaceutical-cleanroom-facilities",
  image: "/images/pharma.jpg",
  description: "Specialized pharmaceutical facilities and controlled cleanroom environments.",
},
];

const aboutImages = [
  "/images/ksc-hero-04.jpg",
  "/images/ksc-hero-02.jpg",
  "/images/Civil-002.jpg",
  "/images/Mech-001.jpg",
];

const values = [
  {
    number: "01",
    title: "Experience",
    text: "Experienced teams working across construction and engineering environments.",
    icon: (
      <>
        <path d="M24 5L39 12V23C39 33 32 40 24 44C16 40 9 33 9 23V12L24 5Z" />
        <path d="M16 25L22 31L34 18" />
      </>
    ),
  },
  {
    number: "02",
    title: "Quality",
    text: "A disciplined approach to workmanship, materials and project execution.",
    icon: (
      <>
        <path d="M9 10H39V38H9Z" />
        <path d="M16 18H32M16 24H32M16 30H27" />
      </>
    ),
  },
  {
    number: "03",
    title: "Safety",
    text: "Safety integrated into the way we plan, manage and execute our work.",
    icon: (
      <>
        <path d="M24 5L39 12V23C39 33 32 40 24 44C16 40 9 33 9 23V12L24 5Z" />
        <path d="M24 16V28" />
        <circle cx="24" cy="34" r="1.5" />
      </>
    ),
  },
  {
    number: "04",
    title: "Delivery",
    text: "Coordinated teams focused on reliable and efficient project completion.",
    icon: (
      <>
        <path d="M7 39H41M10 39V25H19V39M19 39V17H29V39M29 39V9H38V39" />
        <path d="M13 20L22 14L28 17L39 7M32 7H39V14" />
      </>
    ),
  },
];

export default function AboutPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Automatic company image slideshow
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => {
        for (let step = 1; step <= aboutImages.length; step += 1) {
          const next = (current + step) % aboutImages.length;
          if (loadedImages[next]) return next;
        }

        return current;
      });
    }, 4500);

    return () => window.clearInterval(timer);
  }, [loadedImages]);

  // Scroll reveal animation
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".about-redesign .ar-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-redesign">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="ar-hero">

        <div className="ar-hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto">
            <source
              src="/images/KSC v2.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="ar-hero-shade" />
        <div className="ar-hero-grid" />

        <div className="ar-hero-content">

          <span className="ar-eyebrow ar-eyebrow-light">
            <i />
            ABOUT KHAMIS AL SHARJAH CONTRACTING CO.
          </span>

          <h1>
            Building with
            <br />
            <span>purpose.</span>
          </h1>

          <p>
            Engineering and construction solutions built around
            experience, quality and long-term value.
          </p>

          <a
            className="ar-button ar-button-lime"
            href="#our-story"
          >
            Discover our story
            <span aria-hidden="true">↘</span>
          </a>

        </div>

      </section>


      {/* =====================================
          COMPANY STORY
      ===================================== */}

      <section className="ar-story" id="our-story">

        <div className="ar-shell ar-story-grid">

          {/* Image slideshow */}

          <div className="ar-story-visual ar-reveal">

            <div className="ar-story-image">

              {aboutImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="KSC engineering and construction project"
                  className={
                    index === activeImage && loadedImages[index]
                      ? "is-active"
                      : ""
                  }
                  onLoad={() =>
                    setLoadedImages((previous) => ({
                      ...previous,
                      [index]: true,
                    }))
                  }
                  onError={() => {
                    console.error(
                      "Failed to load About page image:",
                      image
                    );

                    setLoadedImages((previous) => ({
                      ...previous,
                      [index]: false,
                    }));
                  }}
                />
              ))}

              <div className="ar-image-corner-label">
                <span>OUR JOURNEY</span>
                <strong>Since 1989</strong>
              </div>

              <div className="ar-image-index">
                {String(activeImage + 1).padStart(2, "0")}
                <span> / 04</span>
              </div>

            </div>

            <div className="ar-image-caption">
              <span className="ar-caption-line" />
              <span>
                Built on experience. Focused on what comes next.
              </span>
            </div>

          </div>


          {/* Company history */}

          <div className="ar-story-copy ar-reveal">

            <span className="ar-eyebrow">
              <i />
              THE KSC STORY
            </span>

            <h2>
              A legacy shaped by
              <br />
              <span>experience.</span>
            </h2>

            <p className="ar-story-lead">
              More than 35 years of continuous construction experience
              in the Kingdom of Saudi Arabia.
            </p>

            <p>
              Khamis Al Sharjah Contracting Co. (KSC) traces its roots
              back to 1989, when its management commenced operations
              in the Kingdom of Saudi Arabia under the sponsorship of
              Hussain Abdullah Al Hussain Contracting Company (HAH).
              As the Kingdom began permitting foreign investors to
              establish companies with 100% foreign ownership, the
              same management established KSC alongside HAH. In
              2007, KSC became a 100% foreign-owned company, carrying
              forward the expertise, technical excellence, and
              commitment to quality developed since 1989. Today,
              KSC proudly represents more than 35+ years of
              continuous construction experience in the Kingdom
              of Saudi Arabia, delivering reliable and high-quality
              solutions across the industrial, commercial, and
              infrastructure sectors.
            </p>

            <p>
              Our approach brings together technical expertise,
              experienced teams and disciplined project execution
              to support clients from planning through completion.
            </p>


            {/* Company milestones */}

            <div className="ar-milestones">

              <div>
                <strong>1989</strong>
                <span>Roots of our operations</span>
              </div>

              <div>
                <strong>2007</strong>
                <span>KSC became 100% foreign-owned</span>
              </div>

              <div>
                <strong>35+</strong>
                <span>Years of construction experience</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          OUR APPROACH / VALUES
      ===================================== */}

      <section className="ar-values-section">

        <div className="ar-shell">

          <div className="ar-section-heading ar-reveal">

            <div>

              <span className="ar-eyebrow">
                <i />
                OUR APPROACH
              </span>

              <h2>
                Built around
                <br />
                <span>what matters.</span>
              </h2>

            </div>

            <p>
              The principles that shape how we plan, coordinate
              and deliver construction and engineering work.
            </p>

          </div>


          <div className="ar-values-grid">

            {values.map((value) => (

              <article
                className="ar-value-card ar-reveal"
                key={value.number}
              >

                <div className="ar-value-top">

                  

                  <svg
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </svg>

                </div>

                <div className="ar-value-bottom">

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                </div>

                <span className="ar-value-watermark">
                  {value.number}
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          CHAIRMAN'S MESSAGE
      ===================================== */}

      <section className="ar-chairman-section">

        <div className="ar-shell ar-chairman-grid">

          <div className="ar-chairman-copy ar-reveal">

            <span className="ar-eyebrow ar-eyebrow-light">
              <i />
              A MESSAGE FROM OUR CHAIRMAN
            </span>

            <h2>
              Building trust.
              <br />
              <span>Creating lasting value.</span>
            </h2>

            <p>
              At Khamis Al Sharjah Contracting Co. (KSC), our journey
              has been shaped by a commitment to quality, integrity,
              safety, and lasting relationships. Since our beginnings
              in 1989, we have worked to deliver dependable construction
              and engineering solutions that meet our clients'
              expectations.
            </p>

            <p>
              We believe that our success comes from the dedication
              of our people, the trust of our clients, and the strength
              of our partnerships. Every project is an opportunity
              to uphold our standards, embrace better ways of working,
              and create value that lasts.
            </p>

            <p>
              As we look to the future, KSC remains committed to
              continuous improvement, responsible project delivery,
              and contributing to the development of the Kingdom
              of Saudi Arabia.
            </p>


            <div className="ar-chairman-signature">

              <span />

              <div>
                <strong>Chairman</strong>
                <small>Khamis Al Sharjah Contracting Co.</small>
              </div>

            </div>

          </div>


          <div className="ar-chairman-visual ar-reveal">

            <div className="ar-chairman-photo">

              <img
                src="/images/chairman.jpg"
                alt="Chairman of Khamis Al Sharjah Contracting Co."
                loading="lazy"
              />

              <div className="ar-chairman-photo-label">
                <span>LEADERSHIP</span>
                <strong>Chairman's Message</strong>
              </div>

            </div>

            <div className="ar-chairman-side-note">
              LEADERSHIP · INTEGRITY · COMMITMENT
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          OUR SERVICES
      ===================================== */}

      <section className="ar-services-section">

        <div className="ar-shell">

          <div className="ar-section-heading ar-reveal">

            <div>

              <span className="ar-eyebrow">
                <i />
                OUR SERVICES
              </span>

              <h2>
                Explore our
                <br />
                <span>capabilities.</span>
              </h2>

            </div>

            <p>
              From construction and engineering to specialist systems
              and interior solutions, KSC delivers integrated
              capabilities across diverse project environments.
            </p>

          </div>


          <div className="ar-services-grid">

  {services.map((service, index) => (

    <a
      key={service.slug}
      href={`/services/${service.slug}`}
      className="ksc-service-card ar-reveal"
      style={{ "--card-index": index }}
    >

      {/* SERVICE IMAGE */}
      <div
        className="ksc-service-card-image"
        style={{
          backgroundImage: `url("${service.image}")`,
        }}
        role="img"
        aria-label={service.title}
      >

        <div className="ksc-service-image-shade"></div>

        {/* Number */}
        <span className="ksc-service-number">
          {service.number}
        </span>

        {/* Corner arrow */}
        <span
          className="ksc-service-card-arrow"
          aria-hidden="true"
        >
          ↗
        </span>

      </div>


      {/* SERVICE INFORMATION */}
      <div className="ksc-service-card-content">

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        {/* Explore service – entire card is clickable */}
        <span className="ksc-service-link">

          <span>Explore service</span>

          <span aria-hidden="true">→</span>

        </span>

      </div>


      {/* Animated bottom accent */}
      <div
        className="ksc-service-card-accent"
        aria-hidden="true"
      />

    </a>

  ))}
{/* PROJECT DISCUSSION CTA CARD */}
<div className="ksc-project-discuss-card ar-reveal">

  <div className="ksc-project-discuss-content">

    <span className="ksc-project-discuss-label">
      LET'S BUILD TOGETHER
    </span>

    <h3>Have a project in mind?</h3>

    <p>
      Let's discuss your requirements and create the right
      engineering solution for your project.
    </p>

    <a href="/contact" className="ksc-project-discuss-button">
      <span>Discuss Your Project</span>
      <span aria-hidden="true">↗</span>
    </a>

  </div>

  <span className="ksc-project-discuss-number">KSC</span>

</div>
</div>

        </div>

      </section>


      {/* =====================================
          FINAL CALL TO ACTION
      ===================================== */}

      <section className="ar-cta-section">

        <div className="ar-shell ar-cta-inner ar-reveal">

          <div>

            <span className="ar-eyebrow ar-eyebrow-light">
              <i />
              WORK WITH KSC
            </span>

            <h2>
              Let's build
              <br />
              <span>something meaningful.</span>
            </h2>

            <p>
              Talk to our team about your next construction
              or engineering project.
            </p>

          </div>

          <a
            className="ar-button ar-button-lime"
            href="/contact"
          >
            Talk to KSC
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}