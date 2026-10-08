import React from "react";

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
            <img
              src={project.image}
              alt={project.title}
            />

            <span className="project-status ongoing">
              ONGOING
            </span>
          </div>

          <div className="project-detail-content">
        

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-info-grid">

              <div>
                <span>CLIENT</span>
                <strong>{project.client}</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>{project.location}</strong>
              </div>

              <div>
                <span>STARTED</span>
                <strong>{project.startDate}</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>{project.status}</strong>
              </div>

            </div>

            <div className="project-scope">
              <span>SCOPE OF WORK</span>

              <div>
                {project.scope.map((item) => (
                  <span key={item}>{item}</span>
                ))}
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
            <img
              src={project.image}
              alt={project.title}
            />

            <span className="project-status completed">
              COMPLETED
            </span>
          </div>

          <div className="project-detail-content">


            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-info-grid">

              <div>
                <span>CLIENT</span>
                <strong>{project.client}</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>{project.location}</strong>
              </div>

              <div>
                <span>STARTED</span>
                <strong>{project.startDate}</strong>
              </div>

              <div>
                <span>COMPLETED</span>
                <strong>{project.completionDate}</strong>
              </div>

            </div>

            <div className="project-scope">
              <span>SCOPE OF WORK</span>

              <div>
                {project.scope.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

          </div>

        </article>
      ))}

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

    </main>
  );
}