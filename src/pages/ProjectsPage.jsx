import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

const ongoingProjects = [
  {
    id: "ongoing-01",
    title: "Industrial Construction Project",
    client: "KSC Client",
    location: "Saudi Arabia",
    category: "Civil Construction",
    status: "Ongoing",
    startDate: "2026",
    completionDate: "In Progress",
    image: "/images/civil-1.jpeg",
    description:
      "Industrial construction and structural works currently being delivered by KSC with a focus on safety, quality and efficient project execution.",
    scope: [
      "Site preparation",
      "Civil construction works",
      "Structural works",
      "Infrastructure development",
    ],
    gallery: [
      "/images/civil-1.jpeg",
      "/images/civil-2.jpeg",
      "/images/civil-3.jpeg",
    ],
  },
];

const completedProjects = [
  {
    id: "completed-01",
    title: "Completed Construction Project",
    client: "KSC Client",
    location: "Saudi Arabia",
    category: "Civil Construction",
    status: "Completed",
    startDate: "2024",
    completionDate: "2025",
    image: "/images/civil-4.jpeg",
    description:
      "A completed KSC construction project delivered with a focus on quality, safety and reliable execution.",
    scope: [
      "Civil construction",
      "Structural works",
      "Site development",
      "Project completion",
    ],
    gallery: [
      "/images/civil-4.jpeg",
      "/images/civil-2.jpeg",
      "/images/civil-3.jpeg",
    ],
  },
];

export default function ProjectsPage() {

  function ProjectImageSlideshow({ images, fallback, alt }) {
  const validImages = (images || [])
    .map((image) => image.url)
    .filter(Boolean);

  const slides = validImages.length ? validImages : [fallback];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="project-image-slideshow">
      {slides.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt={alt}
          className={`project-slideshow-image ${
            index === activeIndex ? "active" : ""
          }`}
        />
      ))}

      {slides.length > 1 && (
        <div className="project-slideshow-counter">
          {activeIndex + 1} / {slides.length}
        </div>
      )}
    </div>
  );
}

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); 
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    const loadProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load projects:", error.message);
        return;
      }

      const projectsWithImages = await Promise.all(
        (data || []).map(async (project) => {
          const images = await Promise.all(
            (project.images || []).map(async (image) => {
              if (!image.path) return { ...image, url: "" };

              const { data: signedData, error: signedError } =
                await supabase.storage
                  .from("project-images")
                  .createSignedUrl(image.path, 3600);

              if (signedError) {
                console.error("Image loading failed:", signedError.message);
                return { ...image, url: "" };
              }

              return { ...image, url: signedData.signedUrl };
            })
          );

          return { ...project, images };
        })
      );

      setProjects(projectsWithImages);
    };

    loadProjects();
  }, []);

  const ongoingProjects = projects.filter(
    (project) => project.status === "Ongoing"
  );

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );

  return (
    <main className="projects-page">

      {/* HERO */}
      <section className="projects-page-hero">
        <div className="projects-page-hero-image">
          <img
            src="/images/civil-2.jpeg"
            alt="KSC construction project"
          />
        </div>

        <div className="projects-page-hero-overlay"></div>

        <div className="projects-page-hero-content">
          <span className="eyebrow light">02 / PROJECTS</span>

          <h1>
            Work that
            <br />
            <span>speaks for itself.</span>
          </h1>

          <p>
            A selection of construction and engineering work
            delivered by KSC.
          </p>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="projects-intro section">
        <div className="container projects-intro-grid">

          <div>
            <span className="eyebrow">OUR PROJECTS</span>

            <h2>
                Our
                <br />
                <span>Projects.</span>
                </h2>
          </div>

          <p>
            Explore KSC's ongoing and completed construction and
            engineering projects across the Kingdom of Saudi Arabia.
          </p>

        </div>
      </section>


        {/* ONGOING PROJECTS */}
<section className="projects-list section">
  <div className="container">

    <div className="projects-list-heading">
      <div>
        <span className="eyebrow">CURRENT WORK</span>
        <h2>Ongoing Projects</h2>
      </div>

      <span className="projects-count">
        {String(ongoingProjects.length).padStart(2, "0")} PROJECTS
      </span>
    </div>

    <div className="project-detail-list">

      {ongoingProjects.map((project) => (
        <article className="project-detail-card" key={project.id}>

          <div className="project-detail-image">
            <ProjectImageSlideshow
              images={project.images}
              fallback="/images/civil-1.jpeg"
              alt={project.name || "KSC construction project"}
            />

            <span className="project-status ongoing">
              ONGOING
            </span>
          </div>

          <div className="project-detail-content project-detail-overlay">
        

            <h3>{project.name || project.title}</h3>

            <button
              type="button"
              className="view-project-images-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Images →
            </button>

            <p>{project.description || "Project details will be updated soon."}</p>

            <div className="project-info-grid">

              <div>
                <span>CLIENT</span>
                <strong>{project.client || "—"}</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>{project.location}</strong>
              </div>


              <div>
                <span>STATUS</span>
                <strong>{project.status}</strong>
              </div>

            </div>

          

          </div>

        </article>
      ))}

    </div>

  </div>
</section>


{/* COMPLETED PROJECTS */}
<section className="projects-list section completed-projects">
  <div className="container">

    <div className="projects-list-heading">
      <div>
        <span className="eyebrow">PROJECT PORTFOLIO</span>
        <h2>Completed Projects</h2>
      </div>

      <span className="projects-count">
        {String(completedProjects.length).padStart(2, "0")} PROJECTS
      </span>
    </div>

    <div className="project-detail-list">

      {completedProjects.map((project) => (
        <article className="project-detail-card" key={project.id}>

          <div className="project-detail-image">
            <ProjectImageSlideshow
              images={project.images}
              fallback="/images/"
              alt={project.name || "KSC construction project"}
              loading="lazy"
            />

            <span className="project-status completed">
              COMPLETED
            </span>
          </div>

          <div className="project-detail-content project-detail-overlay">


            <h3>{project.name || project.title || "KSC Project"}</h3>

            <button
              type="button"
              className="view-project-images-btn"
              onClick={() => {
                setActiveGalleryIndex(0);
                setSelectedProject(project);
              }}
            >
              View Images →
            </button>

            <p>
              {project.description || "Project details will be updated soon."}
            </p>

            <div className="project-info-grid">

              <div>
                <span>CLIENT</span>
                <strong>{project.client || "—"}</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>{project.location}</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>{project.status}</strong>
              </div>



            </div>

            

          </div>

        </article>
      ))}

    </div>

  </div>
</section>



{/* KINGDOM-WIDE OPERATIONAL REACH */}
<section className="kingdom-reach-section">
  <div className="container kingdom-reach-container">

    {/* LEFT SIDE — MAP */}
    <div className="kingdom-reach-map">
      <img
        src="/images/saudi-arabia-map.png"
        alt="KSC operational locations across Saudi Arabia"
        className="kingdom-map-image"
      />
    </div>

    {/* RIGHT SIDE — CONTENT */}
    <div className="kingdom-reach-content">
      <span className="eyebrow">OUR PRESENCE</span>

      <h2>
        KINGDOM-WIDE
        <br />
        <em>OPERATIONAL REACH</em>
      </h2>

      <p>
        KSC operates across the entire Kingdom of Saudi Arabia,
        with mobilized teams, supply chains, and engineering assets
        enabling simultaneous project execution across major cities
        and remote industrial zones.
      </p>

      <div className="kingdom-city-list">
        {[
          "Riyadh",
          "Al Kharj",
          "Hail",
          "Turaif",
          "Tayma",
          "Dammam",
          "Henakiyah",
          "Hofuf",
          "Jeddah",
          "Sharourah",
          "Najran",
        ].map((city) => (
          <span key={city}>{city}</span>
        ))}
      </div>
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="projects-cta section">
        <div className="container projects-cta-inner">

          <div>
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's build
              <br />
              <span>what's next.</span>
            </h2>
          </div>

          <a className="button primary" href="/#contact">
            Talk to KSC
            <span className="arrow">↗</span>
          </a>

        </div>
      </section>

      {selectedProject && (
      <div
        className="project-gallery-modal"
        onClick={() => setSelectedProject(null)}
      >
        <div
          className="project-gallery-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="project-gallery-close"
            onClick={() => setSelectedProject(null)}
            aria-label="Close gallery"
          >
            ×
          </button>

          <h2>{selectedProject.name || selectedProject.title}</h2>

          {(() => {
            const images = (selectedProject.images || [])
              .map((image) => image.url)
              .filter(Boolean);

            if (!images.length) {
              return <p>No images available for this project.</p>;
            }

            return (
              <>
                <img
                  className="project-gallery-main-image"
                  src={images[activeGalleryIndex]}
                  alt={selectedProject.name || selectedProject.title}
                />

                <div className="project-gallery-controls">
                  <button
                    onClick={() =>
                      setActiveGalleryIndex((i) =>
                        i === 0 ? images.length - 1 : i - 1
                      )
                    }
                  >
                    ← Previous
                  </button>

                  <span>
                    {activeGalleryIndex + 1} / {images.length}
                  </span>

                  <button
                    onClick={() =>
                      setActiveGalleryIndex((i) =>
                        (i + 1) % images.length
                      )
                    }
                  >
                    Next →
                  </button>
                </div>

                <div className="project-gallery-thumbnails">
                  {images.map((src, index) => (
                    <img
                      key={src + index}
                      src={src}
                      alt={`Project image ${index + 1}`}
                      className={
                        index === activeGalleryIndex ? "active" : ""
                      }
                      onClick={() => setActiveGalleryIndex(index)}
                    />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    )}

    </main>
  );
}