import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import {
  Pickaxe,
  Route,
  Building2,
  Construction
} from "lucide-react";

const serviceData = {
    
  "civil-construction": {
  number: "01",
  title: "Civil Construction",
  label: "CIVIL CONSTRUCTION",
  exploreImage: "/images/Civil-002.jpg",
  description:
    "Over the past years, we have developed a robust fleet of skilled manpower and advanced equipment, enabling us to undertake a wide variety of civil construction projects with confidence. Our dedication to safety, quality, and efficient production has established us as a trusted leader in the field. We pride ourselves on maintaining an excellent safety record while delivering top-notch work with a high production rate.",

  benefits: [
    "Site Planning & Layout",
    "Site Survey & Analysis",
    "Architectural Drawings",
    "Design & Drafting Services",
    "Perspectives & Modeling",
    "Commercial & Residential Buildings",
    "Structural Analysis & Design",
    "Soil Investigation Works",
    "Heavy Structure Construction",
    "Industrial Building Construction",
    "Road & Asphalt Works"
  ],

  images: [
  "/images/Civil-002.jpg",
],


highlights: {
  label: "CIVIL CONSTRUCTION",
  title: "Built on",
  accent: "precision.",
  description:
    "KSC delivers end-to-end civil construction solutions—from site preparation and earthworks to structural execution and infrastructure development—built around safety, quality, and dependable project delivery.",
  items: [
    {
      number: "01",
      title: "Site Development & Earthworks",
      text: "Site clearing, grading, excavation, filling, compaction, and ground preparation to establish a reliable foundation for every project.",
      icon: "excavator"
    },
    {
      number: "02",
      title: "Roads & Asphalt Works",
      text: "Road formation, sub-base and base layers, asphalt paving, kerbs, and access roads delivered to project specifications.",
      icon: "road"
    },
    {
      number: "03",
      title: "Concrete & Structural Works",
      text: "Foundations, reinforced concrete, retaining walls, slabs, and structural elements engineered for durability and long-term performance.",
      icon: "building"
    },
    {
      number: "04",
      title: "Utilities & Infrastructure",
      text: "Underground utility coordination, drainage networks, ducting, external works, and supporting infrastructure for integrated sites.",
      icon: "utilities"
    }
  ]
}

    
},

  "electrical-works": {
  number: "02",
  title: "Electrical Works",
  label: "ELECTRICAL WORKS",
  exploreImage: "/images/Electrical-001.png",
  description:
    "KSC provides reliable electrical installation and project execution services for industrial, commercial and infrastructure developments. Our electrical works are delivered with a strong focus on safety, quality, efficiency and dependable project performance.",
  benefits: [
    "Electrical Installation Works",
    "Power Distribution Systems",
    "Lighting & Control Systems",
    "Electrical Panels & Switchgear",
    "Cable Laying & Termination",
    "Industrial Electrical Systems",
    "Testing & Commissioning",
    "Low Voltage Systems",
    "Electrical Maintenance Works",
    "Site Electrical Infrastructure",
    "Electrical Equipment Installation"
  ],
  images: [
    "/images/Electrical-001.png",
  ],

  highlights: {
  label: "ELECTRICAL CAPABILITIES",
  title: "Powering",
  accent: "reliable projects.",
  description:
    "KSC delivers dependable electrical systems and installations with a focus on safety, performance and efficient project execution.",
  items: [
    {
      number: "01",
      title: "Power Distribution",
      text: "Power distribution systems, electrical panels and switchgear supporting commercial and industrial facilities."
    },
    {
      number: "02",
      title: "Installation & Control",
      text: "Electrical installation, cable laying, termination, lighting and control systems for demanding project environments."
    },
    {
      number: "03",
      title: "Testing & Commissioning",
      text: "System testing and commissioning to support reliable electrical performance and project handover."
    }
  ]
},
},


  "mechanical-works": {
  number: "03",
  title: "Mechanical Works",
  label: "MECHANICAL WORKS",
  exploreImage: "/images/Mech-001.jpg",
  description:
    "KSC provides dependable mechanical construction and installation services for industrial, commercial and infrastructure projects. Our teams support mechanical systems from installation through testing and commissioning, with a strong focus on safety, quality and efficient project execution.",
  benefits: [
    "Mechanical Equipment Installation",
    "Industrial Mechanical Works",
    "Piping Installation",
    "Equipment Alignment",
    "Mechanical Systems Installation",
    "Pump & Equipment Installation",
    "Testing & Commissioning",
    "Maintenance & Repair Works",
    "Industrial Plant Installation",
    "Mechanical Fabrication",
    "Site Mechanical Services"
  ],
  images: [
    "/images/Mech-001.jpg",
  ],
  
  highlights: {
  label: "MECHANICAL CAPABILITIES",
  title: "Built for",
  accent: "industrial performance.",
  description:
    "KSC provides dependable mechanical installation and project execution services for demanding industrial and commercial environments.",
  items: [
    {
      number: "01",
      title: "Mechanical Installation",
      text: "Installation of mechanical equipment and systems with careful planning, positioning and execution."
    },
    {
      number: "02",
      title: "Piping & Equipment",
      text: "Piping installation, equipment alignment and mechanical systems supporting industrial facilities."
    },
    {
      number: "03",
      title: "Testing & Commissioning",
      text: "Testing, commissioning and maintenance support to ensure reliable mechanical system performance."
    }
  ]
},
},

  "architectural-interior-finishes": {
  number: "04",
  title: "Architectural & Interior Design",
  label: "ARCHITECTURAL & INTERIOR DESIGN",
  exploreImage: "/images/Arch-001.jpeg",
  description:
    "KSC provides architectural and interior design solutions that combine functional planning, technical coordination and refined design. Our approach supports projects from concept development and design coordination through to detailed execution.",
  benefits: [
    "Architectural Design",
    "Interior Design",
    "Concept Development",
    "Space Planning",
    "Design & Drafting Services",
    "3D Perspectives & Modeling",
    "Technical Drawings",
    "Material & Finish Selection",
    "Design Coordination",
    "Commercial Interior Design",
    "Residential Interior Design"
  ],
  images: [
    "/images/Arch-001.jpeg",
  ],

  highlights: {
  label: "DESIGN CAPABILITIES",
  title: "Designed for",
  accent: "better spaces.",
  description:
    "KSC combines architectural thinking, interior planning and technical coordination to create functional and refined environments.",
  items: [
    {
      number: "01",
      title: "Architectural Design",
      text: "Concept development, architectural planning and technical design supporting project requirements."
    },
    {
      number: "02",
      title: "Interior Design",
      text: "Space planning, interior concepts, materials and finishes for functional and visually refined spaces."
    },
    {
      number: "03",
      title: "3D & Technical Design",
      text: "Perspectives, modeling, technical drawings and design coordination supporting project execution."
    }
  ]
},
},

  "equipment-machine-installations": {
  number: "05",
  title: "Equipment & Machine Installations",
  label: "EQUIPMENT & MACHINE INSTALLATIONS",
  exploreImage: "/images/Installation.jpeg",
  description:
    "KSC provides specialized equipment and machine installation services for industrial and commercial projects. Our teams support the complete installation process with careful positioning, alignment, connection, testing and commissioning to ensure reliable project performance.",
  benefits: [
    "Industrial Equipment Installation",
    "Machine Installation",
    "Equipment Positioning & Alignment",
    "Heavy Equipment Installation",
    "Mechanical Equipment Setup",
    "Equipment Connection Works",
    "Testing & Commissioning",
    "Plant Equipment Installation",
    "Machine Relocation & Positioning",
    "Equipment Maintenance Support",
    "Site Installation Services"
  ],
  images: [
    "/images/Installation-002.png",
  ],

  highlights: {
  label: "EQUIPMENT CAPABILITIES",
  title: "Precision in",
  accent: "every installation.",
  description:
    "KSC supports specialized equipment and machine installations with careful positioning, alignment, connection, testing and commissioning.",
  items: [
    {
      number: "01",
      title: "Equipment Installation",
      text: "Professional installation and positioning of industrial and commercial equipment for demanding project environments."
    },
    {
      number: "02",
      title: "Alignment & Connection",
      text: "Careful equipment alignment, positioning and connection works supporting reliable system operation."
    },
    {
      number: "03",
      title: "Testing & Commissioning",
      text: "Testing and commissioning support to ensure installed equipment performs reliably before project handover."
    }
  ]
},
},

  "fire-detection-fire-fighting": {
  number: "06",
  title: "Fire Detection & Fire Fighting System",
  label: "FIRE DETECTION & FIRE FIGHTING",
  exploreImage: "/images/Fire-001.png",
  description:
    "KSC provides integrated fire detection and fire fighting solutions designed to support the safety and protection requirements of commercial, industrial and infrastructure facilities. Our services cover system installation, integration, testing and commissioning.",
  benefits: [
    "Fire Detection Systems",
    "Fire Alarm Systems",
    "Fire Fighting Systems",
    "Fire Pump Installation",
    "Fire Hydrant Systems",
    "Sprinkler Systems",
    "Fire Hose Reel Systems",
    "Fire Extinguishing Systems",
    "Fire Protection Equipment",
    "Testing & Commissioning",
    "Fire System Maintenance"
  ],
  images: [
    "/images/fire2.jpeg",
  ],

  highlights: {
  label: "FIRE PROTECTION CAPABILITIES",
  title: "Protecting",
  accent: "what matters.",
  description:
    "KSC delivers integrated fire detection and fire fighting systems designed to support the safety and protection requirements of demanding facilities.",
  items: [
    {
      number: "01",
      title: "Fire Detection",
      text: "Fire alarm and detection systems designed to provide reliable monitoring and early warning."
    },
    {
      number: "02",
      title: "Fire Fighting Systems",
      text: "Fire pumps, hydrants, sprinklers, hose reels and other fire fighting systems for facility protection."
    },
    {
      number: "03",
      title: "Testing & Commissioning",
      text: "System testing and commissioning to support dependable fire protection performance and project readiness."
    }
  ]
},
},

  "hvac-works": {
  number: "07",
  title: "HVAC Works",
  label: "HVAC WORKS",
  exploreImage: "/images/HVAC-001.jpg",
  description:
    "KSC provides heating, ventilation and air-conditioning solutions for commercial, industrial and infrastructure facilities. Our HVAC services support efficient climate control, reliable system performance and comfortable working environments.",
  benefits: [
    "HVAC System Installation",
    "Air Conditioning Systems",
    "Ventilation Systems",
    "Air Handling Units",
    "Ductwork Installation",
    "Chilled Water Systems",
    "HVAC Equipment Installation",
    "Testing & Commissioning",
    "HVAC Maintenance",
    "Industrial Ventilation",
    "Climate Control Solutions"
  ],
  images: [
    "/images/HVAC-001.jpg",
  ],

  highlights: {
  label: "HVAC CAPABILITIES",
  title: "Creating",
  accent: "better environments.",
  description:
    "KSC delivers HVAC solutions that support efficient climate control, reliable system performance and comfortable working environments.",
  items: [
    {
      number: "01",
      title: "HVAC Installation",
      text: "Installation of air-conditioning, ventilation and HVAC equipment for commercial and industrial facilities."
    },
    {
      number: "02",
      title: "Ductwork & Ventilation",
      text: "Ductwork, ventilation and air distribution systems designed to support efficient airflow."
    },
    {
      number: "03",
      title: "Testing & Commissioning",
      text: "Testing, balancing and commissioning support to ensure reliable HVAC system performance."
    }
  ]
},
},

  "fitout-works": {
  number: "08",
  title: "Fitout Works",
  exploreImage: "/images/Fitout-001.jpg",
  label: "FITOUT WORKS",
  description:
    "KSC delivers complete interior fitout solutions for commercial, industrial and other built environments. Our fitout services combine careful planning, quality workmanship and coordinated execution to create functional and professionally finished spaces.",
  benefits: [
    "Complete Interior Fitout",
    "Commercial Fitout",
    "Office Fitout",
    "Industrial Fitout",
    "Interior Partition Works",
    "Ceiling & Flooring Works",
    "Joinery & Finishing Works",
    "Painting & Decoration",
    "Electrical & Lighting Coordination",
    "Mechanical Services Coordination",
    "Turnkey Fitout Solutions"
  ],
  images: [
    "/images/Fitout-001.jpg",
  ],

  highlights: {
  label: "FITOUT CAPABILITIES",
  title: "Spaces built",
  accent: "around people.",
  description:
    "KSC delivers coordinated interior fitout solutions that combine quality workmanship, functional planning and professional finishing.",
  items: [
    {
      number: "01",
      title: "Interior Fitout",
      text: "Complete interior fitout solutions for commercial, industrial and other built environments."
    },
    {
      number: "02",
      title: "Finishing Works",
      text: "Partitions, ceilings, flooring, painting, joinery and finishing works for professionally completed spaces."
    },
    {
      number: "03",
      title: "Turnkey Coordination",
      text: "Coordinated electrical, mechanical and interior works supporting efficient turnkey project delivery."
    }
  ]
},
},


"pharmaceutical-cleanroom-facilities": {
  title: "Pharmaceutical & Cleanroom Facilities",
  label: "PHARMACEUTICAL & CLEANROOM FACILITIES",
  exploreImage: "/images/Pharma.png",
  description:
    "KSC provides specialized construction and fitout solutions for pharmaceutical manufacturing facilities and cleanroom environments, with a focus on quality, hygiene, controlled conditions and reliable project execution.",
  benefits: [
    "Pharmaceutical Factory Construction",
    "Cleanroom Design & Construction",
    "Cleanroom Wall & Ceiling Systems",
    "Cleanroom Flooring",
    "HVAC & Air Filtration Systems",
    "Controlled Environment Facilities",
    "Cleanroom Doors & Windows",
    "Utility & MEP Installation",
    "Testing & Commissioning"
  ],
  images: [
    "/images/Sterile Pharmaceutical Cleanroom Interior_01.png",
  ],
  highlights: {
    label: "PHARMACEUTICAL & CLEANROOM CAPABILITIES",
    title: "Built for",
    accent: "controlled environments.",
    description:
      "KSC supports pharmaceutical facilities and cleanroom projects through coordinated construction, specialist finishes and building services.",
    items: [
      {
        number: "01",
        title: "Pharmaceutical Facilities",
        text: "Construction solutions for pharmaceutical factories and production environments."
      },
      {
        number: "02",
        title: "Cleanroom Systems",
        text: "Specialized cleanroom finishes, wall systems, ceilings and flooring."
      },
      {
        number: "03",
        title: "Building Services",
        text: "Coordinated HVAC, filtration and MEP installations supporting controlled environments."
      }
    ]
  }
},

};



/* Premium hero headlines for each service */

const serviceHeroCopy = {
  "civil-construction": {
    line1: "ENGINEERED",
    accent: "TO BUILD",
    line3: "WITH CONFIDENCE.",
  },

  "electrical-works": {
    line1: "POWERING",
    accent: "CONNECTED",
    line3: "PERFORMANCE.",
  },

  "mechanical-works": {
    line1: "MECHANICAL",
    accent: "SYSTEMS",
    line3: "BUILT TO PERFORM.",
  },

  "architectural-interior-finishes": {
    line1: "DESIGNING",
    accent: "BETTER",
    line3: "SPACES.",
  },

  "equipment-machine-installations": {
    line1: "PRECISION",
    accent: "IN EVERY",
    line3: "INSTALLATION.",
  },

  "fire-detection-fire-fighting": {
    line1: "PROTECTING",
    accent: "PEOPLE AND",
    line3: "FACILITIES.",
  },

  "hvac-works": {
    line1: "CREATING",
    accent: "COMFORTABLE",
    line3: "ENVIRONMENTS.",
  },

  "fitout-works": {
    line1: "SPACES",
    accent: "FINISHED",
    line3: "TO PERFORM.",
  },

  "pharmaceutical-cleanroom-facilities": {
    line1: "ENGINEERING",
    accent: "CONTROLLED",
    line3: "ENVIRONMENTS.",
  },
};



export default function ServicePage() {
  const { service } = useParams();
  const data = serviceData[service];
  const [heroSlide, setHeroSlide] = useState(0);
  const [detailSlide, setDetailSlide] = useState(0);
  const [uploadedConstructionImages, setUploadedConstructionImages] = useState([]);


useEffect(() => {
  if (!data?.images?.length) return;

  const timer = setInterval(() => {
    setHeroSlide((current) => (current + 1) % data.images.length);
  }, 5500);

  return () => clearInterval(timer);
}, [data]);



useEffect(() => {
  let cancelled = false;

  const loadConstructionImages = async () => {
    setUploadedConstructionImages([]);
    setDetailSlide(0);

    const { data: rows, error } = await supabase
      .from("service_construction_images")
      .select("id, image_path")
      .eq("service_slug", service)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Failed to load construction images:", error);
      return;
    }

    const images = (rows || []).map((row) => ({
      id: row.id,
      url: supabase.storage
        .from("service-construction-images")
        .getPublicUrl(row.image_path).data.publicUrl,
    }));

    if (!cancelled) {
      setUploadedConstructionImages(images);
    }
  };

  loadConstructionImages();

  return () => {
    cancelled = true;
  };
}, [service]);

const constructionImages =
  uploadedConstructionImages.length > 0
    ? uploadedConstructionImages
    : (data?.constructionImages || []).map((url, index) => ({
        id: `default-${index}`,
        url,
      }));

useEffect(() => {
  if (constructionImages.length < 2) {
    setDetailSlide(0);
    return;
  }

  const timer = setInterval(() => {
    setDetailSlide((current) => (current + 1) % constructionImages.length);
  }, 6000);

  return () => clearInterval(timer);
}, [service, uploadedConstructionImages]);



  if (!data) {
    return <h1>Service Not Found</h1>;
  }

  const heroCopy = serviceHeroCopy[service];

  const heroImages = data.images?.length
    ? data.images
    : [data.exploreImage];

  return (
  <main className="service-page">



    
{/* =====================================
    UNIVERSAL PREMIUM SERVICE HERO
===================================== */}

<section className="pharma-premium service-unified-premium-hero">

  <div className="pharma-premium-hero">

    {/* Background image slideshow */}
    <div className="service-premium-hero-slides">

      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${data.title} project ${index + 1}`}
          className={
            index === heroSlide
              ? "service-premium-hero-image active"
              : "service-premium-hero-image"
          }
        />
      ))}

    </div>

    {/* Dark gradient overlay */}
    <div className="pharma-premium-overlay" />

    {/* Hero content */}
    <div className="pharma-premium-hero-content">

      <h2>
        {heroCopy.line1}
        <br />
        <span>{heroCopy.accent}</span>
        <br />
        {heroCopy.line3}
      </h2>

      <p>
        {heroCopy.description ||
          data.highlights?.description ||
          data.description}
      </p>

      <a
        href="/contact"
        className="pharma-premium-cta"
      >
        DISCUSS YOUR PROJECT
        <span>↗</span>
      </a>

    </div>

  </div>

</section>



    <section className="service-detail">
      <div className="service-detail-main">

        <span className="eyebrow">DESCRIPTION</span>

        <h2>Description</h2>

        <p className="service-description">
          {data.description}
        </p>

        <h3>Our Solutions &amp; Benefits</h3>

        <div className="benefits-grid">
          {data.benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <span className="benefit-check">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="service-detail-slideshow">
          <div className="service-slideshow-label">
            {data.label}
          </div>
            {constructionImages.map((image, index) => (
              <img
                key={image.id}
                src={image.url}
                alt={`${data.title} construction project ${index + 1}`}
                className={`service-slide-image ${
                  index === detailSlide ? "active" : ""
                }`}
              />
            ))}
            </div>

            

            </div>

      <aside className="service-sidebar">

        <div className="quote-card">
          <h3>Get a Quote</h3>

          <p>
            Request a tailored quote for your construction project today.
          </p>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you. Your quote request has been received.");
            }}>
            <label>Service</label>
            <input
            type="text"
            value={data.title}
            readOnly
            />
            <label>Name</label>
            <input type="text" placeholder="Name" />

            <label>Email</label>
            <input type="email" placeholder="Email" />

            <label>Message</label>
            <textarea placeholder="Message"></textarea>

            <button type="submit">
              GET A QUOTE
            </button>
          </form>
        </div>

        <div className="help-card">
          <h3>Need more help?</h3>

          <p>
            <strong>Contact us today</strong> to discuss how we can
            bring your vision to life.
          </p>

          <div className="help-phone">
            <span>◯</span>

            <div>
              <strong>+966 (0) 5100 20030</strong>
            </div>
          </div>
        </div>

      </aside>
    </section>



{/* =========================================
    ARCHITECTURAL & INTERIOR DESIGN
    PREMIUM CAPABILITIES SECTION
========================================= */}

{service === "architectural-interior-finishes" && (
  <section className="pharma-premium arch-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          ARCHITECTURAL &amp; INTERIOR DESIGN
        </span>

        <h3>
          From <span>concept</span> to space.
          <br />
          Designs that <span>work.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC delivers integrated architectural and interior design
          solutions that blend functionality, aesthetics, and
          compliance — creating efficient, people-centric, and
          future-ready spaces.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR DESIGN CAPABILITIES */}
    <div className="pharma-premium-capabilities arch-premium-capabilities">

      {/* 01 ARCHITECTURAL DESIGN */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>01</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M5 42V15L24 5L43 15V42" />
            <path d="M12 42V22H36V42" />
            <path d="M18 42V29H30V42" />
            <path d="M5 15L24 25L43 15" />
          </svg>
        </div>

        <h3>Architectural Design</h3>

        <p>
          Concept development, detailed design, and regulatory
          coordination for functional and sustainable buildings.
        </p>

        <span className="pharma-premium-card-index">01</span>

      </article>


      {/* 02 INTERIOR DESIGN */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>02</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M7 27V19C7 15 10 12 14 12H34C38 12 41 15 41 19V27" />
            <path d="M5 27H43V35H5Z" />
            <path d="M9 35V41M39 35V41" />
            <path d="M7 27V24M41 27V24" />
            <path d="M14 12V19H34V12" />
          </svg>
        </div>

        <h3>Interior Design</h3>

        <p>
          Space planning, interior layouts, finishes, and fit-out
          concepts aligned with client needs and brand identity.
        </p>

        <span className="pharma-premium-card-index">02</span>

      </article>


      {/* 03 SPACE PLANNING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>03</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M5 16L24 6L43 16L24 26L5 16Z" />
            <path d="M5 24L24 34L43 24" />
            <path d="M5 32L24 42L43 32" />
          </svg>
        </div>

        <h3>Space Planning &amp; Optimization</h3>

        <p>
          Efficient, flexible, and ergonomic layouts to maximize
          space utilization and operational flow.
        </p>

        <span className="pharma-premium-card-index">03</span>

      </article>


      {/* 04 DESIGN COORDINATION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>04</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="18" r="5" />
            <path d="M24 23V43" />
            <path d="M15 43L24 23L33 43" />
            <path d="M11 43H37" />
            <path d="M9 18L24 5L39 18" />
            <path d="M15 18H33" />
          </svg>
        </div>

        <h3>Design Coordination</h3>

        <p>
          Multidisciplinary coordination (Civil, MEP, and special
          systems) to ensure design integration, constructability,
          and cost efficiency.
        </p>

        <span className="pharma-premium-card-index">04</span>

      </article>

    </div>


    {/* DESIGN PRINCIPLES */}
    <div className="pharma-premium-delivery arch-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* SUSTAINABILITY */}
        <article>

          <svg className="arch-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M40 7C24 7 10 14 8 28C7 36 12 41 19 39C33 35 39 20 40 7Z" />
            <path d="M8 42C16 30 25 23 35 15" />
          </svg>

          <div>
            <h4>Sustainable &amp; Compliant Design</h4>

            <p>
              Energy-efficient, code-compliant, and environmentally
              responsible solutions.
            </p>
          </div>

        </article>


        {/* FUNCTIONALITY */}
        <article>

          <svg className="arch-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="9" />
            <circle cx="24" cy="24" r="3" />
          </svg>

          <div>
            <h4>Functionality with Aesthetics</h4>

            <p>
              Practical, modern, and brand-aligned spaces.
            </p>
          </div>

        </article>


        {/* END-TO-END SUPPORT */}
        <article>

          <svg className="arch-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="17" cy="14" r="6" />
            <circle cx="34" cy="16" r="5" />
            <path d="M5 39V34C5 27 10 23 17 23C24 23 29 27 29 34V39" />
            <path d="M29 27C31 24 35 23 39 25C43 27 45 31 45 36V39H34" />
          </svg>

          <div>
            <h4>End-to-End Design Support</h4>

            <p>
              From concept and 3D visualization to design delivery
              and site coordination.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}




{/* =========================================
    MECHANICAL WORKS – PREMIUM CAPABILITIES
========================================= */}

{service === "mechanical-works" && (
  <section className="pharma-premium mech-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          MECHANICAL WORKS
        </span>

        <h3>
          Integrated
          <br />
          <span>mechanical</span> solutions
          <br />
          for reliable <span>operations.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC delivers comprehensive mechanical works, from design
          and installation to testing and commissioning, ensuring
          safe, efficient, and long-lasting building operations.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR MECHANICAL CAPABILITIES */}
    <div className="pharma-premium-capabilities mech-premium-capabilities">

      {/* 01 PUMPS & FLUID SYSTEMS */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>01</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="11" y="12" width="25" height="24" rx="3" />
            <path d="M5 18H11V30H5Z" />
            <path d="M36 18H43V30H36" />
            <path d="M17 8V12M30 8V12" />
            <path d="M17 36V40M30 36V40" />
            <path d="M17 19H29V29H17Z" />
            <path d="M20 22H26M20 26H26" />
          </svg>
        </div>

        <h3>Pumps &amp; Fluid Systems</h3>

        <p>
          Supply, installation, and maintenance of pumping
          systems, pressurization, and water distribution networks.
        </p>

        <span className="pharma-premium-card-index">01</span>

      </article>


      {/* 02 MECHANICAL UTILITIES */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>02</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="9" y="10" width="30" height="28" rx="7" />
            <path d="M15 10V6H33V10" />
            <path d="M15 38V42M33 38V42" />
            <path d="M9 19H5V29H9" />
            <path d="M39 19H43V29H39" />
            <path d="M17 18H31M17 24H31M17 30H26" />
          </svg>
        </div>

        <h3>Mechanical Utilities</h3>

        <p>
          Chilled &amp; hot water systems, fuel systems,
          compressed air, and other process utilities tailored
          to project needs.
        </p>

        <span className="pharma-premium-card-index">02</span>

      </article>


      {/* 03 PIPING & DISTRIBUTION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>03</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M6 15H17C21 15 23 18 23 22V26C23 30 26 33 30 33H42" />
            <path d="M6 22H14" />
            <path d="M14 15V22" />
            <path d="M42 28V38" />
            <path d="M35 33V38" />
            <path d="M23 22H32C36 22 39 19 39 15V10" />
            <path d="M6 28H14V36H6Z" />
            <path d="M35 10H43" />
          </svg>
        </div>

        <h3>Piping &amp; Distribution Networks</h3>

        <p>
          Fabrication and installation of mechanical piping
          (chilled water, hot water, steam, fuel, and process lines)
          to international standards.
        </p>

        <span className="pharma-premium-card-index">03</span>

      </article>


      {/* 04 INSTALLATION & COMMISSIONING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>04</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="16" />
            <circle cx="24" cy="24" r="7" />
            <path d="M24 3V8M24 40V45M3 24H8M40 24H45" />
            <path d="M9 9L13 13M35 35L39 39M39 9L35 13M13 35L9 39" />
            <path d="M21 24L23 26L28 21" />
          </svg>
        </div>

        <h3>Installation, Testing &amp; Commissioning</h3>

        <p>
          End-to-end execution including installation,
          pre-commissioning, testing, and handover with
          performance validation.
        </p>

        <span className="pharma-premium-card-index">04</span>

      </article>

    </div>


    {/* MECHANICAL DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery mech-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* SAFETY & COMPLIANCE */}
        <article>

          <svg
            className="mech-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>

          <div>
            <h4>Safety &amp; Compliance</h4>

            <p>
              Execution to international codes, standards,
              and project specifications.
            </p>
          </div>

        </article>


        {/* OPERATIONAL EFFICIENCY */}
        <article>

          <svg
            className="mech-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="9" />
          </svg>

          <div>
            <h4>Operational Efficiency</h4>

            <p>
              Reliable, energy-efficient systems for long-term
              performance.
            </p>
          </div>

        </article>


        {/* END-TO-END DELIVERY */}
        <article>

          <svg
            className="mech-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 15L24 5L43 15L24 25L5 15Z" />
            <path d="M5 24L24 34L43 24" />
            <path d="M5 33L24 43L43 33" />
          </svg>

          <div>
            <h4>End-to-End Delivery</h4>

            <p>
              From engineering and installation to testing
              and commissioning.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}




{/* =========================================
    ELECTRICAL WORKS – PREMIUM CAPABILITIES
========================================= */}

{service === "electrical-works" && (
  <section className="pharma-premium elec-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          ELECTRICAL WORKS
        </span>

        <h3>
          Reliable
          <br />
          <span>electrical systems</span>
          <br />
          for safe and efficient
          <br />
          <span>operations.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC delivers complete electrical works, from design and
          installation to testing and commissioning, ensuring safe,
          reliable, and code-compliant power solutions for all
          facility types.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR ELECTRICAL CAPABILITIES */}
    <div className="pharma-premium-capabilities elec-premium-capabilities">

      {/* 01 POWER DISTRIBUTION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>01</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="10" y="9" width="28" height="31" rx="2" />
            <path d="M15 9V5M24 9V5M33 9V5" />
            <path d="M15 40V44M33 40V44" />
            <path d="M5 16H10M5 32H10M38 16H43M38 32H43" />
            <rect x="15" y="16" width="18" height="16" rx="1" />
            <path d="M20 21H28M20 25H28M20 29H25" />
          </svg>
        </div>

        <h3>Power Distribution Systems</h3>

        <p>
          Supply, installation, and integration of main and sub-main
          distribution, switchgear, and distribution boards.
        </p>

        <span className="pharma-premium-card-index">01</span>

      </article>


      {/* 02 LIGHTING SYSTEMS */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>02</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M17 29C14 26 12 22 12 18C12 11 17 6 24 6C31 6 36 11 36 18C36 22 34 26 31 29L29 33H19L17 29Z" />
            <path d="M19 37H29M21 41H27" />
            <path d="M24 1V4M7 18H3M45 18H41" />
            <path d="M11 7L8 4M37 7L40 4" />
            <path d="M21 22L24 15L27 22" />
          </svg>
        </div>

        <h3>Lighting Systems</h3>

        <p>
          Energy-efficient indoor, outdoor, and emergency lighting
          solutions designed for safety and performance.
        </p>

        <span className="pharma-premium-card-index">02</span>

      </article>


      {/* 03 CABLING & WIRING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>03</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M7 35H15C20 35 20 28 25 28H31" />
            <path d="M7 28H13C18 28 18 21 23 21H31" />
            <path d="M7 21H11C16 21 16 14 21 14H31" />
            <path d="M31 10V35" />
            <path d="M31 10H37V16H31" />
            <path d="M31 21H40V27H31" />
            <path d="M31 32H37V38H31" />
            <path d="M5 17H8M5 24H8M5 31H8" />
          </svg>
        </div>

        <h3>Cabling &amp; Wiring Networks</h3>

        <p>
          Structured cabling, power and control wiring, containment
          (trays, ladders, conduits), and terminations to
          international standards.
        </p>

        <span className="pharma-premium-card-index">03</span>

      </article>


      {/* 04 TESTING & COMMISSIONING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>04</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="17" />
            <path d="M24 7V12M24 36V41M7 24H12M36 24H41" />
            <path d="M15 15L18 18M30 30L33 33M33 15L30 18M18 30L15 33" />
            <path d="M22 12L17 25H23L20 36L31 21H25L28 12H22Z" />
          </svg>
        </div>

        <h3>Testing &amp; Commissioning</h3>

        <p>
          Comprehensive testing, inspection, and commissioning
          to ensure safe, reliable, and code-compliant operation.
        </p>

        <span className="pharma-premium-card-index">04</span>

      </article>

    </div>


    {/* ELECTRICAL DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery elec-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* SAFETY & CODE COMPLIANCE */}
        <article>

          <svg
            className="elec-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>

          <div>
            <h4>Safety &amp; Code Compliance</h4>

            <p>
              Execution in line with IEC, DEWA/SEWA, and
              project requirements.
            </p>
          </div>

        </article>


        {/* RELIABLE & SUSTAINABLE POWER */}
        <article>

          <svg
            className="elec-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="9" />
          </svg>

          <div>
            <h4>Reliable &amp; Sustainable Power</h4>

            <p>
              Efficient, resilient, and future-ready
              electrical solutions.
            </p>
          </div>

        </article>


        {/* END-TO-END SUPPORT */}
        <article>

          <svg
            className="elec-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 15L24 5L43 15L24 25L5 15Z" />
            <path d="M5 24L24 34L43 24" />
            <path d="M5 33L24 43L43 33" />
          </svg>

          <div>
            <h4>End-to-End Project Support</h4>

            <p>
              From design and installation to testing,
              commissioning, and handover.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}




{/* =========================================
    HVAC WORKS – PREMIUM CAPABILITIES
========================================= */}

{service === "hvac-works" && (
  <section className="pharma-premium hvac-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          HVAC WORKS
        </span>

        <h3>
          Complete
          <br />
          <span>HVAC solutions</span>
          <br />
          for optimal <span>comfort.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC delivers end-to-end HVAC works, from system design
          and installation to testing and commissioning, ensuring
          efficient, reliable, and energy-optimized indoor
          environments.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR HVAC CAPABILITIES */}
    <div className="pharma-premium-capabilities hvac-premium-capabilities">

      {/* 01 HEATING, VENTILATION & AIR CONDITIONING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>01</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="5" />
            <path d="M24 19C17 11 13 8 10 12C6 17 12 23 19 24" />
            <path d="M29 24C38 19 42 19 43 24C44 30 36 33 29 29" />
            <path d="M21 29C20 39 17 43 12 40C7 37 12 29 19 26" />
            <path d="M24 19V15M29 24L34 24M21 29L19 34" />
          </svg>
        </div>

        <h3>Heating, Ventilation &amp; Air Conditioning</h3>

        <p>
          Design, supply, and installation of HVAC systems
          (chillers, AHUs, FCUs, and associated equipment)
          for diverse facility needs.
        </p>

        <span className="pharma-premium-card-index">01</span>

      </article>


      {/* 02 CHILLED WATER SYSTEMS */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>02</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 4V44M7 14L41 34M7 34L41 14" />
            <path d="M24 4L19 11M24 4L29 11" />
            <path d="M24 44L19 37M24 44L29 37" />
            <path d="M7 14L15 15M7 14L10 22" />
            <path d="M41 34L33 33M41 34L38 26" />
            <path d="M7 34L15 33M7 34L10 26" />
            <path d="M41 14L33 15M41 14L38 22" />
          </svg>
        </div>

        <h3>Chilled Water Systems</h3>

        <p>
          Installation of energy-efficient chilled water plants,
          distribution networks, and terminal units for reliable
          cooling performance.
        </p>

        <span className="pharma-premium-card-index">02</span>

      </article>


      {/* 03 AIR DISTRIBUTION & VENTILATION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>03</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M5 15H28C34 15 34 7 29 7C26 7 25 9 25 11" />
            <path d="M5 24H39C44 24 44 18 40 18C37 18 36 20 36 21" />
            <path d="M5 33H28C34 33 34 41 29 41C26 41 25 39 25 37" />
            <path d="M8 12L12 15L8 18M8 21L12 24L8 27M8 30L12 33L8 36" />
          </svg>
        </div>

        <h3>Air Distribution &amp; Ventilation</h3>

        <p>
          Ducting, air distribution, fresh air, and exhaust
          ventilation systems to ensure optimal indoor air quality.
        </p>

        <span className="pharma-premium-card-index">03</span>

      </article>


      {/* 04 TESTING, BALANCING & COMMISSIONING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>04</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="9" />
            <circle cx="24" cy="24" r="3" />
          </svg>
        </div>

        <h3>Testing, Balancing &amp; Commissioning</h3>

        <p>
          Complete testing, adjusting, and balancing (TAB)
          and commissioning to ensure designed performance,
          efficiency, and compliance.
        </p>

        <span className="pharma-premium-card-index">04</span>

      </article>

    </div>


    {/* HVAC DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery hvac-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* ENERGY EFFICIENCY */}
        <article>

          <svg
            className="hvac-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M40 7C24 7 10 14 8 28C7 36 12 41 19 39C33 35 39 20 40 7Z" />
            <path d="M8 42C16 30 25 23 35 15" />
          </svg>

          <div>
            <h4>Energy-Efficient &amp; Sustainable</h4>

            <p>
              High-performance systems that reduce energy
              use and operating costs.
            </p>
          </div>

        </article>


        {/* INDOOR COMFORT */}
        <article>

          <svg
            className="hvac-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>

          <div>
            <h4>Indoor Comfort &amp; Air Quality</h4>

            <p>
              Reliable temperature control and ventilation
              for healthy, comfortable spaces.
            </p>
          </div>

        </article>


        {/* END-TO-END DELIVERY */}
        <article>

          <svg
            className="hvac-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 15L24 5L43 15L24 25L5 15Z" />
            <path d="M5 24L24 34L43 24" />
            <path d="M5 33L24 43L43 33" />
          </svg>

          <div>
            <h4>End-to-End HVAC Delivery</h4>

            <p>
              From engineering and installation to testing,
              commissioning, and handover.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}




{/* =========================================
    FIRE DETECTION & FIRE FIGHTING
    PREMIUM CAPABILITIES SECTION
========================================= */}

{service === "fire-detection-fire-fighting" && (
  <section className="pharma-premium fire-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          FIRE DETECTION &amp; FIRE FIGHTING
        </span>

        <h3>
          Comprehensive
          <br />
          <span>fire safety systems</span>
          <br />
          for life and asset
          <br />
          <span>protection.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC delivers end-to-end fire detection and fire fighting
          solutions, from design and installation to testing and
          commissioning, ensuring early detection, rapid response,
          and full code compliance.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR FIRE PROTECTION CAPABILITIES */}
    <div className="pharma-premium-capabilities fire-premium-capabilities">

      {/* 01 FIRE DETECTION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>01</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M8 20C8 12 15 7 24 7C33 7 40 12 40 20" />
            <path d="M7 20H41V25C41 28 38 30 35 30H13C10 30 7 28 7 25V20Z" />
            <path d="M14 30C16 35 19 38 24 38C29 38 32 35 34 30" />
            <path d="M17 17H31" />
            <path d="M18 23H30" />
            <path d="M13 39C17 43 21 44 24 44C27 44 31 43 35 39" />
          </svg>
        </div>

        <h3>Fire Detection Systems</h3>

        <p>
          Design and installation of intelligent fire alarm systems
          including smoke, heat, and multi-sensor detectors,
          control panels, and notification devices.
        </p>

        <span className="pharma-premium-card-index">01</span>

      </article>


      {/* 02 FIRE FIGHTING SYSTEMS */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>02</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M8 12H40" />
            <path d="M13 12V18H35V12" />
            <path d="M24 18V28" />
            <path d="M19 28C16 32 16 35 19 35C22 35 22 32 19 28Z" />
            <path d="M29 28C26 32 26 35 29 35C32 35 32 32 29 28Z" />
            <path d="M11 35C8 39 9 42 12 42C15 42 15 39 11 35Z" />
            <path d="M37 35C34 39 35 42 38 42C41 42 41 39 37 35Z" />
            <path d="M24 5V12M18 8H30" />
          </svg>
        </div>

        <h3>Fire Fighting Systems</h3>

        <p>
          Supply and installation of fire suppression systems
          including sprinkler, hydrant, hose reel, and
          deluge systems.
        </p>

        <span className="pharma-premium-card-index">02</span>

      </article>


      {/* 03 FIRE PUMPS & WATER STORAGE */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>03</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="11" y="12" width="25" height="24" rx="3" />
            <path d="M5 18H11V30H5Z" />
            <path d="M36 18H43V30H36" />
            <path d="M17 8V12M30 8V12" />
            <path d="M17 36V40M30 36V40" />
            <path d="M17 19H29V29H17Z" />
            <path d="M20 22H26M20 26H26" />
            <path d="M43 21H46V27H43" />
          </svg>
        </div>

        <h3>Fire Pumps &amp; Water Storage</h3>

        <p>
          Installation of UL/FM compliant fire pumps (jockey,
          main, and standby) and dedicated fire water storage tanks.
        </p>

        <span className="pharma-premium-card-index">03</span>

      </article>


      {/* 04 TESTING & COMPLIANCE */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>04</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="8" y="10" width="32" height="33" rx="3" />
            <path d="M18 10V6H30V10" />
            <path d="M15 21H19M15 29H19M15 36H19" />
            <path d="M22 21H33M22 29H33" />
            <path d="M22 35L26 39L35 30" />
          </svg>
        </div>

        <h3>Testing, Commissioning &amp; Compliance</h3>

        <p>
          Complete testing, commissioning, and certification
          (NFPA, Saudi Civil Defense, and relevant codes)
          with documentation and handover.
        </p>

        <span className="pharma-premium-card-index">04</span>

      </article>

    </div>


    {/* FIRE SAFETY DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery fire-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* LIFE & ASSET PROTECTION */}
        <article>

          <svg
            className="fire-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>

          <div>
            <h4>Life &amp; Asset Protection</h4>

            <p>
              Early detection and effective fire suppression
              for maximum safety.
            </p>
          </div>

        </article>


        {/* CODE & REGULATORY COMPLIANCE */}
        <article>

          <svg
            className="fire-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="9" />
          </svg>

          <div>
            <h4>Code &amp; Regulatory Compliance</h4>

            <p>
              Designed and built in line with NFPA, SBC,
              and Saudi Civil Defense.
            </p>
          </div>

        </article>


        {/* END-TO-END FIRE SAFETY */}
        <article>

          <svg
            className="fire-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 15L24 5L43 15L24 25L5 15Z" />
            <path d="M5 24L24 34L43 24" />
            <path d="M5 33L24 43L43 33" />
          </svg>

          <div>
            <h4>End-to-End Fire Safety Solutions</h4>

            <p>
              From design and installation to testing,
              commissioning, and maintenance.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}




{/* =========================================
    EQUIPMENT & MACHINE INSTALLATIONS
    PREMIUM CAPABILITIES SECTION
========================================= */}

{service === "equipment-machine-installations" && (
  <section className="pharma-premium equipment-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          EQUIPMENT &amp; MACHINE INSTALLATIONS
        </span>

        <h3>
          Professional
          <br />
          <span>equipment &amp; machine</span>
          <br />
          installation <span>solutions.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC provides turnkey equipment and machine installation
          services, from site preparation and positioning to
          integration, testing, and commissioning, ensuring safe,
          reliable, and efficient operations.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR EQUIPMENT INSTALLATION CAPABILITIES */}
    <div className="pharma-premium-capabilities equipment-premium-capabilities">

      {/* 01 INSTALLATION & ERECTION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>01</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="10" />
            <circle cx="24" cy="24" r="4" />
          </svg>
        </div>

        <h3>Installation &amp; Erection</h3>

        <p>
          Safe and precise installation, erection, and alignment
          of industrial equipment and production machines.
        </p>

        <span className="pharma-premium-card-index">01</span>

      </article>


      {/* 02 SYSTEM INTEGRATION */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>02</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M5 12H43M5 24H43M5 36H43" />
            <circle cx="16" cy="12" r="4" />
            <circle cx="32" cy="24" r="4" />
            <circle cx="20" cy="36" r="4" />
            <path d="M16 16V20H32M32 28V32H20" />
          </svg>
        </div>

        <h3>System Integration</h3>

        <p>
          Mechanical, electrical, and utility connections for
          seamless integration with plant systems (power, HVAC,
          water, compressed air, etc.).
        </p>

        <span className="pharma-premium-card-index">02</span>

      </article>


      {/* 03 TESTING & COMMISSIONING */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>03</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="10" />
            <path d="M18 24L22 28L30 19" />
          </svg>
        </div>

        <h3>Testing &amp; Commissioning</h3>

        <p>
          Pre-commissioning, functional testing, and performance
          commissioning to ensure operational readiness.
        </p>

        <span className="pharma-premium-card-index">03</span>

      </article>


      {/* 04 RELOCATION & UPGRADES */}
      <article className="pharma-premium-card">

        <div className="pharma-premium-card-top">
          <span>04</span>

          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M8 17L17 8L24 15L15 24L8 17Z" />
            <path d="M24 32L33 23L40 30L31 39L24 32Z" />
            <path d="M18 20L29 31M24 14L34 4M14 24L4 34" />
            <path d="M28 9L35 2L39 6L32 13" />
            <path d="M9 36L2 43M39 39L44 44" />
          </svg>
        </div>

        <h3>Relocation &amp; Upgrades</h3>

        <p>
          Dismantling, relocation, reinstallation, and upgrades
          of existing equipment with minimal disruption
          to operations.
        </p>

        <span className="pharma-premium-card-index">04</span>

      </article>

    </div>


    {/* EQUIPMENT DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery equipment-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* SAFETY & COMPLIANCE */}
        <article>

          <svg
            className="equipment-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>

          <div>
            <h4>Safety &amp; Compliance</h4>

            <p>
              Execution in line with international standards
              and site safety requirements.
            </p>
          </div>

        </article>


        {/* OPERATIONAL RELIABILITY */}
        <article>

          <svg
            className="equipment-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M19 5H29L31 11L36 14L42 12L46 20L41 25V30L46 35L42 43L35 41L30 44H20L17 38L12 35L6 38L2 30L7 25V20L2 14L7 6L14 9L19 5Z" />
            <circle cx="24" cy="24" r="9" />
          </svg>

          <div>
            <h4>Operational Reliability</h4>

            <p>
              Correct installation and commissioning for
              long-term performance.
            </p>
          </div>

        </article>


        {/* TURNKEY EXECUTION */}
        <article>

          <svg
            className="equipment-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 15L24 5L43 15L24 25L5 15Z" />
            <path d="M5 24L24 34L43 24" />
            <path d="M5 33L24 43L43 33" />
          </svg>

          <div>
            <h4>Turnkey Execution</h4>

            <p>
              From planning and installation to testing,
              commissioning, and handover.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}




{/* =========================================
    CIVIL CONSTRUCTION – PREMIUM CAPABILITIES
========================================= */}

{service === "civil-construction" && (
  <section className="pharma-premium civil-premium">

    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">

      <div className="pharma-premium-intro-left">

        <span className="pharma-premium-section-label">
          CIVIL CONSTRUCTION
        </span>

        <h3>
          Built on <span>precision.</span>
          <br />
          Engineered for
          <br />
          <span>performance.</span>
        </h3>

      </div>

      <div className="pharma-premium-intro-right">

        <p>
          KSC delivers end-to-end civil construction solutions,
          from site preparation and earthworks to structural
          execution and infrastructure development, built around
          safety, quality, and dependable project delivery.
        </p>

        <a href="/contact" className="pharma-premium-cta">
          DISCUSS A PROJECT
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* FOUR CIVIL CONSTRUCTION CAPABILITIES */}
    <div className="pharma-premium-capabilities civil-premium-capabilities">

      {data.highlights.items.map((item) => (

        <article
          className="pharma-premium-card"
          key={item.number}
        >

          <div className="pharma-premium-card-top">

            <span>{item.number}</span>

            <div className="civil-premium-icon">

              {item.icon === "excavator" && (
                <Pickaxe size={43} strokeWidth={1.6} />
              )}

              {item.icon === "road" && (
                <Route size={43} strokeWidth={1.6} />
              )}

              {item.icon === "building" && (
                <Building2 size={43} strokeWidth={1.6} />
              )}

              {item.icon === "utilities" && (
                <Construction size={43} strokeWidth={1.6} />
              )}

            </div>

          </div>

          <h3>{item.title}</h3>

          <p>{item.text}</p>

          <span className="pharma-premium-card-index">
            {item.number}
          </span>

        </article>

      ))}

    </div>


    {/* CIVIL DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery civil-premium-delivery">

      <div className="pharma-premium-delivery-grid">

        {/* SAFETY-LED EXECUTION */}
        <article>

          <svg
            className="civil-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>

          <div>
            <h4>Safety-Led Execution</h4>

            <p>
              A strong safety culture across all project phases.
            </p>
          </div>

        </article>


        {/* QUALITY-CONTROLLED DELIVERY */}
        <article>

          <svg
            className="civil-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="24" cy="24" r="15" />
            <circle cx="24" cy="24" r="6" />
            <path d="M24 3V9M24 39V45M3 24H9M39 24H45" />
            <path d="M9 9L13 13M35 35L39 39" />
          </svg>

          <div>
            <h4>Quality-Controlled Delivery</h4>

            <p>
              Consistent quality through rigorous standards
              and inspections.
            </p>
          </div>

        </article>


        {/* PROJECT MANAGEMENT */}
        <article>

          <svg
            className="civil-design-icon"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="24" cy="24" r="14" />
            <circle cx="24" cy="24" r="5" />
            <path d="M24 3V10M24 38V45M3 24H10M38 24H45" />
          </svg>

          <div>
            <h4>Coordinated Project Management</h4>

            <p>
              Integrated planning, resources, and execution
              for on-time delivery.
            </p>
          </div>

        </article>

      </div>

    </div>

  </section>
)}



    

{service === "fire-detection-fire-fighting" && (
  <section className="fire-expertise-section">
    <div className="fire-expertise-corner"></div>

    <div className="fire-expertise-inner">

      <div className="fire-expertise-heading">
        <h2>Fire Protection Systems Expertise</h2>

        <p>
          KSC — 20+ years delivering UL-listed pumps, FM200, CO2,
          alarms and explosion-proof gas detectors for industrial clients
        </p>
      </div>

      <div className="fire-expertise-list">

        <div className="fire-expertise-item">
          <span>01</span>
          <p>
            <strong>UL-listed fire water pumps</strong>
            {" "}— Aurora, Clarke, Grundfos; installation &amp; maintenance
          </p>
        </div>

        <div className="fire-expertise-item">
          <span>02</span>
          <p>
            <strong>FM200 gas suppression</strong>
            {" "}systems — SFFECO; clean-agent protection for sensitive areas
          </p>
        </div>

        <div className="fire-expertise-item">
          <span>03</span>
          <p>
            <strong>CO2 suppression</strong>
            {" "}systems — FIKE; high-energy fire suppression for industrial hazards
          </p>
        </div>

        <div className="fire-expertise-item">
          <span>04</span>
          <p>
            <strong>Fire alarm detectors</strong>
            {" "}— Honeywell, Esser; detection &amp; notification systems
          </p>
        </div>

        <div className="fire-expertise-item">
          <span>05</span>
          <p>
            <strong>Explosion-proof gas detectors</strong>
            {" "}— hazardous-area gas monitoring and integration
          </p>
        </div>

        <div className="fire-expertise-item">
          <span>06</span>
          <p>
            Deployed for <strong>Almarai, Aujan Coca Cola, KACST</strong>
            {" "}— proven industrial safety delivery
          </p>
        </div>

      </div>

    </div>
  </section>
)}



{service === "pharmaceutical-cleanroom-facilities" && (
  <section className="pharma-premium">


    {/* INTRODUCTION */}
    <div className="pharma-premium-intro">
      <div className="pharma-premium-intro-left">
        <span className="pharma-premium-section-label">
          OUR SPECIALIZED CAPABILITIES
        </span>

        <h3>
          Precision in every
          <span> controlled environment.</span>
        </h3>
      </div>

      <div className="pharma-premium-intro-right">
        <p>
          KSC delivers coordinated construction and installation
          solutions for pharmaceutical manufacturing facilities
          and cleanroom environments. From specialized finishes
          and environmental control to utilities and compliance
          support, we focus on dependable project execution.
        </p>
      </div>
    </div>

    {/* CAPABILITIES */}
    <div className="pharma-premium-capabilities">

      <div className="pharma-premium-card">
        <div className="pharma-premium-card-top">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M6 17L24 7L42 17L24 27L6 17Z" />
            <path d="M6 25L24 35L42 25" />
            <path d="M6 33L24 43L42 33" />
          </svg>
        </div>
        <h3>Cleanroom Design &amp; Construction</h3>
        <p>
          GMP-compliant cleanroom construction, specialized
          wall and ceiling systems, flooring and controlled
          environment finishes.
        </p>
        <span className="pharma-premium-card-index">01</span>
      </div>

      <div className="pharma-premium-card">
        <div className="pharma-premium-card-top">
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="15" />
            <circle cx="24" cy="24" r="5" />
            <path d="M24 3V9M24 39V45M3 24H9M39 24H45M9 9L14 14M34 34L39 39M39 9L34 14M14 34L9 39" />
          </svg>
        </div>
        <h3>HVAC &amp; Air Filtration</h3>
        <p>
          HVAC installations, HEPA/ULPA filtration, temperature,
          humidity and pressure control for controlled
          production environments.
        </p>
        <span className="pharma-premium-card-index">02</span>
      </div>

      <div className="pharma-premium-card">
        <div className="pharma-premium-card-top">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M20 5H28M22 5V19L10 37C8 40 11 43 15 43H33C37 43 40 40 38 37L26 19V5" />
            <path d="M14 34H34" />
            <path d="M19 28L23 25L26 30L30 26" />
          </svg>
        </div>
        <h3>Utilities &amp; Process Systems</h3>
        <p>
          Installation of critical utilities, purified water
          systems, clean steam, compressed air and process piping.
        </p>
        <span className="pharma-premium-card-index">03</span>
      </div>

      <div className="pharma-premium-card">
        <div className="pharma-premium-card-top">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M24 4L41 11V23C41 34 34 41 24 45C14 41 7 34 7 23V11L24 4Z" />
            <path d="M15 24L21 30L34 17" />
          </svg>
        </div>
        <h3>Validation &amp; Compliance Support</h3>
        <p>
          Testing, cleanroom certification support and
          coordination with applicable GMP, WHO and ISO
          requirements.
        </p>
        <span className="pharma-premium-card-index">04</span>
      </div>

    </div>

    {/* DELIVERY PRINCIPLES */}
    <div className="pharma-premium-delivery">
      <div className="pharma-premium-delivery-heading">
        
        <h3>Built around <span>confidence.</span></h3>
      </div>

      <div className="pharma-premium-delivery-grid">

        <article>
          <span className="pharma-premium-delivery-icon">01</span>
          <div>
            <h4>Contamination Control</h4>
            <p>
              Controlled environments designed to support
              product protection and operational quality.
            </p>
          </div>
        </article>

        <article>
          <span className="pharma-premium-delivery-icon">02</span>
          <div>
            <h4>Regulatory Coordination</h4>
            <p>
              Construction and installation coordinated
              with relevant quality and compliance requirements.
            </p>
          </div>
        </article>

        <article>
          <span className="pharma-premium-delivery-icon">03</span>
          <div>
            <h4>End-to-End Execution</h4>
            <p>
              Integrated project delivery from construction
              and installation through testing and handover.
            </p>
          </div>
        </article>

      </div>
    </div>

    {/* FINAL CALL TO ACTION */}
    <div className="pharma-premium-final">
      <div>
        <span>YOUR NEXT SPECIALIZED PROJECT</span>
        <h3>Let's build environments that perform.</h3>
      </div>

      <a href="/contact">
        START A CONVERSATION <span>↗</span>
      </a>
    </div>

  </section>
)}



                    <section className="related-services">
                      <div className="related-services-heading">
                        <span className="eyebrow">KSC CAPABILITIES</span>

                        <h2>
                          Explore our <span>services.</span>
                        </h2>
                      </div>

                      <div className="related-services-grid">
                        {Object.entries(serviceData)
                          .filter(([slug]) => slug !== service)
                          .map(([slug, serviceItem]) => (
                            <a
                              key={slug}
                              href={`/services/${slug}`}
                              className="related-service"
                            >
                              <div className="related-service-image">
                                <img
                                  src={serviceItem.exploreImage}
                                  alt={serviceItem.title}
                                />
                              </div>

                              <div className="related-service-overlay"></div>

                              <div className="related-service-content">
                                <span>{serviceItem.number}</span>
                                <strong>{serviceItem.title}</strong>
                                <small>↗</small>
                              </div>
                            </a>
                          ))}
                      </div>
                    </section>
  </main>
);
}