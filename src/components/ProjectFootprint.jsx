
import React from "react";
import "./ProjectFootprint.css";

const projects = [
  {
    id: 1,
    name: "Turaif",
    type: "Infrastructure Development",
    x: 40.7,
    y: 9,
    side: "right",
    query: "Turaif Saudi Arabia",
  },
  {
    id: 2,
    name: "Tayma",
    type: "Civil Construction",
    x: 41.3,
    y: 24.8,
    side: "left",
    query: "Tayma Saudi Arabia",
  },
  {
    id: 3,
    name: "Hail",
    type: "Industrial Facilities",
    x: 51.3,
    y: 20.2,
    side: "right",
    query: "Hail Saudi Arabia",
  },
  {
    id: 4,
    name: "Henakiyah",
    type: "Infrastructure Works",
    x: 46.8,
    y: 33.5,
    side: "right",
    query: "Al Henakiyah Saudi Arabia",
  },
  {
    id: 5,
    name: "Jeddah",
    type: "Commercial Buildings",
    x: 44.8,
    y: 54.5,
    side: "left",
    query: "Jeddah Saudi Arabia",
  },
  {
    id: 6,
    name: "Riyadh",
    type: "Government Projects",
    x: 62.5,
    y: 42.5,
    side: "right",
    query: "Riyadh Saudi Arabia",
  },
  {
    id: 7,
    name: "Dammam",
    type: "Industrial & Mechanical",
    x: 77.2,
    y: 34.5,
    side: "right",
    query: "Dammam Saudi Arabia",
  },
  {
    id: 8,
    name: "Hofuf",
    type: "Infrastructure Works",
    x: 78.8,
    y: 55.5,
    side: "right",
    query: "Hofuf Saudi Arabia",
  },
  {
    id: 9,
    name: "Al Kharj",
    type: "Industrial Development",
    x: 63.5,
    y: 49.2,
    side: "left",
    query: "Al Kharj Saudi Arabia",
  },
  {
    id: 10,
    name: "Sharourah",
    type: "Logistics Facilities",
    x:77.5,
    y: 70.5,
    side: "left",
    query: "Sharurah Saudi Arabia",
  },
  {
    id: 11,
    name: "Najran",
    type: "Civil & Infrastructure",
    x: 57,
    y: 59.7,
    side: "right",
    query: "Najran Saudi Arabia",
  },
];

function ProjectPin({ project }) {
  return (
    <div
      className={`pf-project pf-project--${project.side}`}
      style={{
        left: `${project.x}%`,
        top: `${project.y}%`,
      }}
    >
      <a
        className="pf-pin"
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          project.query
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on Google Maps`}
        title={`Explore ${project.name}`}
      >
        <span className="pf-pin-core" />
        <span className="pf-pin-ring pf-pin-ring--one" />
        <span className="pf-pin-ring pf-pin-ring--two" />
      </a>

      <a
        className="pf-project-card"
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          project.query
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="pf-card-copy">
          <strong>{project.name}</strong>
          <small>{project.type}</small>
        </span>
        <span className="pf-card-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  );
}

export default function ProjectFootprint() {
  return (
    <section className="project-footprint">
      <div className="pf-background" aria-hidden="true" />

      <div className="pf-content">
        <div className="pf-intro">
          <div className="pf-eyebrow">
            <span />
            OUR PROJECT FOOTPRINT
            <span />
          </div>

          <h2>
            Shaping
            <br />
            Landmarks
            <br />
            <span>Across the Kingdom.</span>
          </h2>

          <p className="pf-description">
            From iconic developments to critical infrastructure,
            our projects span across Saudi Arabia, contributing
            to a stronger, more connected future.
          </p>

          <div className="pf-stats">
            <div className="pf-stat">
              <strong>500+</strong>
              <span>PROJECTS<br />DELIVERED</span>
            </div>
            <div className="pf-stat">
              <strong>10+</strong>
              <span>CITIES &amp;<br />REGIONS</span>
            </div>
            <div className="pf-stat">
              <strong>100%</strong>
              <span>COMMITMENT<br />TO QUALITY</span>
            </div>
            <div className="pf-stat">
              <strong>NATIONWIDE</strong>
              <span>PRESENCE<br />IN KSA</span>
            </div>
          </div>

          <a className="pf-explore" href="/projects">
            <span>Explore Our Projects</span>
            <span className="pf-explore-arrow">→</span>
          </a>
        </div>

        <div className="pf-map-layer" aria-label="Project locations across Saudi Arabia">
          {projects.map((project) => (
            <ProjectPin key={project.id} project={project} />
          ))}
        </div>

        

        
      </div>
    </section>
  );
}
