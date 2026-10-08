import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const serviceData = {
    
  "civil-construction": {
  number: "01",
  title: "Civil Construction",
  label: "KSC / CIVIL CONSTRUCTION",
  exploreImage: "/images/Civil-001.png",
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
  "/images/Civil-001.png",
  "/images/hero-002.jpg",
  "/images/hero-001.jpg",
  "/images/hero-003.jpg",
],

constructionImages: [
  "/images/civil-1.jpeg",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
],

highlights: {
  label: "CIVIL CAPABILITIES",
  title: "Built for",
  accent: "complex work.",
  description:
    "KSC combines planning, structural expertise and site execution across a broad range of civil construction activities.",
  items: [
    {
      number: "01",
      title: "Site Development",
      text: "Site planning, layout, surveying, analysis and soil investigation works supporting project execution."
    },
    {
      number: "02",
      title: "Structural Works",
      text: "Structural analysis, design and heavy structure construction for demanding building environments."
    },
    {
      number: "03",
      title: "Building & Infrastructure",
      text: "Industrial, commercial and residential building construction, together with road and asphalt works."
    }
  ]
},
    
},

  "electrical-works": {
  number: "02",
  title: "Electrical Works",
  label: "KSC / ELECTRICAL WORKS",
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
    "/images/Electrical-001.png",
    "/images/Electrical-001.png",
    "/images/Electrical-001.png"
  ],

  constructionImages: [
  "/images/Electrical-001.png",
  "/images/electrical-001.jpeg",
  "/images/electrical-3.jpeg",
  "/images/electrical-4.jpeg",
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
  label: "KSC / MECHANICAL WORKS",
  exploreImage: "/images/Mechanical-001.png",
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
    "/images/Mechanical-001.png",
    "/images/mechanical-2.jpeg",
    "/images/mechanical-3.jpeg",
    "/images/mechanical-4.jpeg"
  ],

  constructionImages: [
  "/images/civil-1.jpeg",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
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

  "architectural-interior-design": {
  number: "04",
  title: "Architectural & Interior Design",
  label: "KSC / ARCHITECTURAL & INTERIOR DESIGN",
  exploreImage: "/images/Architectural-001.jpg",
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
    "/images/Architectural-001.jpg",
    "/images/architectural-2.jpeg",
    "/images/architectural-3.jpeg",
    "/images/architectural-4.jpeg"
  ],

  constructionImages: [
  "/images/civil-1.jpeg",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
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
  label: "KSC / EQUIPMENT & MACHINE INSTALLATIONS",
  exploreImage: "/images/Installation-001.png",
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
    "/images/Installation-001.png",
    "/images/Installation-002.jpeg",
    "/images/equipment-3.jpeg",
    "/images/equipment-4.jpeg"
  ],

  constructionImages: [
  "/images/Installation-002.png",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
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
  label: "KSC / FIRE DETECTION & FIRE FIGHTING",
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
    "/images/Fire-001.png",
    "/images/fire-2.jpeg",
    "/images/fire-3.jpeg",
    "/images/fire-4.jpeg"
  ],

  constructionImages: [
  "/images/civil-1.jpeg",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
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
  label: "KSC / HVAC WORKS",
  exploreImage: "/images/HVAC-001.png",
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
    "/images/HVAC-001.png",
    "/images/hvac-2.jpeg",
    "/images/hvac-3.jpeg",
    "/images/hvac-4.jpeg"
  ],

  constructionImages: [
  "/images/civil-1.jpeg",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
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
  exploreImage: "/images/Fitout-001.png",
  label: "KSC / FITOUT WORKS",
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
    "/images/Fitout-001.png",
    "/images/fitout-2.jpeg",
    "/images/fitout-3.jpeg",
    "/images/fitout-4.jpeg"
  ],

  constructionImages: [
  "/images/civil-1.jpeg",
  "/images/civil-2.jpeg",
  "/images/civil-3.jpeg",
  "/images/civil-4.jpeg",
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
};

export default function ServicePage() {
  const { service } = useParams();
  const data = serviceData[service];
  const [heroSlide, setHeroSlide] = useState(0);
  const [detailSlide, setDetailSlide] = useState(0);


useEffect(() => {
  if (!data?.images?.length) return;

  const timer = setInterval(() => {
    setHeroSlide((current) => (current + 1) % data.images.length);
  }, 5500);

  return () => clearInterval(timer);
}, [data]);



  useEffect(() => {
  if (!data?.constructionImages?.length) return;

  const timer = setInterval(() => {
    setDetailSlide(
      (current) => (current + 1) % data.constructionImages.length
    );
  }, 6000);

  return () => clearInterval(timer);
}, [data]);



  if (!data) {
    return <h1>Service Not Found</h1>;
  }

  return (
  <main className="service-page">

    <section className="service-page-hero">

        <div className="service-hero-image">
            {data.images?.map((image, index) => (
                <img
                key={image}
                src={image}
                alt={`${data.title} project ${index + 1}`}
                className={`service-hero-slide ${
                    index === heroSlide ? "active" : ""
                }`}
                />
            ))}
            </div>

        <div className="service-hero-overlay"></div>

        <div className="service-page-content">

            <h1>{data.title}</h1>

            <div className="service-hero-line"></div>

            <p>
            Engineering capability built around experience.
            </p>

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
            {data.constructionImages?.map((image, index) => (
                <img
                key={image}
                src={image}
                alt={`${data.title} construction project ${index + 1}`}
                className={`service-slide-image ${
                    index === detailSlide ? "active" : ""
                }`}
                />
            ))}
            </div>

            <section className="civil-highlights">
                <div className="civil-highlights-heading">
                    <div>
                    <span className="eyebrow">{data.highlights?.label}</span>

                    <h2>
                        {data.highlights?.title}{" "}
                        <span>{data.highlights?.accent}</span>
                    </h2>
                    </div>

                    <p>{data.highlights?.description}</p>
                </div>

                <div className="civil-highlight-grid">
                    {data.highlights?.items.map((item) => (
                    <article className="civil-highlight-card" key={item.number}>
                        <span>{item.number}</span>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                    ))}
                </div>
                </section>

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
              <small>Free Consultation</small>
              <strong>+966 (0) 5100 20030</strong>
            </div>
          </div>
        </div>

      </aside>
    </section>
    <section className="why-ksc">
                    <div className="why-ksc-heading">
                        <span className="eyebrow">WHY KSC</span>

                        <h2>
                        Experience that<br />
                        <span>delivers.</span>
                        </h2>
                    </div>

                    <div className="why-ksc-list">

                        <div className="why-ksc-item">
                        <span>01</span>
                        <div>
                            <h3>Skilled Manpower</h3>
                            <p>
                            Experienced teams supporting civil construction activities
                            from planning through execution.
                            </p>
                        </div>
                        </div>

                        <div className="why-ksc-item">
                        <span>02</span>
                        <div>
                            <h3>Advanced Equipment</h3>
                            <p>
                            Equipment and site resources supporting efficient project
                            execution and production.
                            </p>
                        </div>
                        </div>

                        <div className="why-ksc-item">
                        <span>03</span>
                        <div>
                            <h3>Safety & Quality</h3>
                            <p>
                            A strong focus on safety, quality and dependable construction
                            delivery.
                            </p>
                        </div>
                        </div>

                        <div className="why-ksc-item">
                        <span>04</span>
                        <div>
                            <h3>Project Capability</h3>
                            <p>
                            Capability across site development, structures, buildings,
                            roads and asphalt works.
                            </p>
                        </div>
                        </div>

                    </div>

                    </section>


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