
import React from "react";
import "./HSE.css";

const safetyValues = [
  {
    number: "01",
    title: "Orientation & Evaluation",
    description:
      "Workers are regularly oriented and evaluated on safety measures, standards and regulations before starting daily activities.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Discipline & Cooperation",
    description:
      "Every worker must care for themselves and others, think safely and make safety the primary concern in all work practices.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Obedience & Respect",
    description:
      "All workers must follow safety instructions, rules and regulations at every KSC worksite.",
    icon: "✓",
  },
];

const commitments = [
  "Identify and minimize HSE risks associated with our activities.",
  "Reduce waste, emissions and resource consumption while promoting energy efficiency.",
  "Implement proactive measures to prevent accidents, injuries and health hazards.",
  "Continuously educate and empower employees to uphold HSE standards.",
  "Regularly review HSE performance, investigate incidents and implement corrective actions.",
  "Adhere to all applicable HSE laws, regulations and industry best practices.",
  "Ensure all levels of management take responsibility for enforcing and promoting a strong HSE culture.",
];

const siteRules = [
  {
    title: "Security Identification",
    text: "Always present your company ID, Iqama, gate pass and driver's licence to the security guard for safe and proper entry.",
  },
  {
    title: "Safety & Cleanliness",
    text: "Follow a safe system of work, maintain good housekeeping and ensure the worksite is clean at the end of every workday.",
  },
  {
    title: "Professional Behaviour",
    text: "Treat clients, their staff and visitors with honesty and courtesy. Discrimination and offensive or inappropriate language are prohibited.",
  },
  {
    title: "Parking Area",
    text: "Do not obstruct access to client property, neighbouring roads or authorised driveways.",
  },
  {
    title: "Smoking Area",
    text: "Smoking is permitted only in designated smoking areas on the client's property.",
  },
  {
    title: "Factory Entry",
    text: "Follow Good Manufacturing Practices (GMP). Wear the required hair net, beard cover, shoe cover and factory-assigned lab coat.",
  },
];

const gmpRules = [
  "Wash hands thoroughly with soap solution, dry with a hand dryer and apply hand sanitiser.",
  "Wear clean uniforms every day. Do not wear uniforms or shoes issued by Almarai outside the factory site.",
  "Wear hair nets, beard nets and shoe covers when entering the plant.",
  "Sterilise hands with disinfectant when working near filling machines and poly/bottle de-bagger areas.",
  "Do not work with infected wounds, sores or communicable diseases. Report these to the Engineer, Supervisor or Safety Officer.",
  "Smoking is strictly forbidden anywhere on the factory site.",
  "Do not eat, drink, spit or clean your nose in factory areas.",
  "Keep the workplace neat and clean. Avoid fluid spillages.",
  "Watches must not be worn on the wrist in factory areas.",
  "Bathe or shower daily and keep fingernails short and clean.",
];

const workRules = [
  "Renew and secure the Permit to Work (PTW) daily before commencing activities.",
  "Conduct toolbox meetings with working personnel at least every other day or every other shift.",
  "Wear the minimum required PPE for all KSC worksites.",
  "Understand the safety guidelines and controls specified in the PTW and safety guidebook.",
  "Barricade work areas with warning tape and signs to prevent unauthorised entry.",
  "Use and handle hand tools and equipment properly to prevent injuries.",
  "Ensure availability of 110 volts for light hand tools and 220 volts for heavy machinery, as required.",
  "Inspect ladders, scaffolding and MEWPs before use. Elevated platforms must be properly tagged.",
  "Clean the work area and dispose of rubbish properly before leaving.",
  "Keep toolboxes and equipment organised to prevent slips, trips and falls.",
  "Eating, drinking and smoking are prohibited inside production and factory areas except in designated areas.",
];

const heightRules = [
  "Inspect ladders before bringing them on-site. Ensure they are in good condition.",
  "Place ladders on stable, level surfaces and secure them properly.",
  "Barricade areas where ladders are used near roads or walkways.",
  "Use inspected and tagged scaffolding with complete guardrails and platforms.",
  "Use a full-body harness and appropriate fall-arrest equipment when required.",
  "Never attach a harness to a point outside the platform. Use the designated anchor point.",
  "Use safety nets for ceiling work, with inspection tags and manufacturing dates.",
  "Do not exceed the scaffold's safe working load or modify its structure without authorisation.",
];

const scaffoldRules = [
  "Scaffolding must be erected, moved and dismantled under competent supervision.",
  "Inspect and tag scaffolding before use. Red means unsafe, green means safe and yellow means restricted use with fall protection.",
  "Use firm, level foundations and base plates.",
  "Install guardrails, toe boards, cross bracing and proper access ladders.",
  "Provide a fully boarded working platform.",
  "Do not exceed the scaffold's smallest base-width-to-height ratio of 3:1 unless properly supported by outriggers or an approved design.",
  "Do not bridge scaffold towers with planks unless specifically designed.",
];

const mewpRules = [
  "Conduct a pre-operational inspection before use.",
  "Inspect the surrounding area for hazards that could cause the platform to tip.",
  "Maintain safe distances from electrical power lines, including the handbook's stated minimum distance of 3.05 metres or 10 feet overhead.",
  "Keep personnel clear of the working platform and never allow people to stand or pass underneath a raised platform.",
  "Wear approved personal fall protection equipment and attach the harness to the designated bucket anchor point.",
  "Never modify or remove equipment components without manufacturer authorisation.",
  "When unattended, lower the platform, switch off the engine and apply the parking brake.",
];

const hotWorkRules = [
  "Obtain a valid Permit to Work for welding, cutting and grinding.",
  "Only competent welders may use welding machines and equipment.",
  "Wear welding gloves, welding masks or eye shields, dust masks and body protection.",
  "Provide appropriate fire extinguishers near the welding machine.",
  "Keep cylinders and welding machines away from pedestrian walkways.",
  "Provide warning signs around hot surfaces.",
  "Keep the work area dry and clean to avoid fire and electric shocks.",
  "Inspect welding cables and hoses before use.",
  "Provide fire watch for 30 minutes after the work is completed.",
];

const emergencyRules = [
  "Remain calm and identify the hazardous situation indicated by the alarm.",
  "Follow the designated evacuation route.",
  "Report to the specified safe assembly area.",
  "If someone is seriously injured, keep calm and seek help immediately.",
  "Accompany the injured person and assist with immediate rescue work where possible.",
  "Call the Site Safety Officer.",
  "Do not move the injured person unless absolutely necessary.",
  "Do not disturb the accident scene while waiting for the investigation team.",
];

const toxicPrecautions = [
  "Wear suitable PPE and protective clothing.",
  "Avoid inhaling vapours, sprays and dust.",
  "Avoid contact with skin and eyes. Wash immediately with plenty of water if exposure occurs.",
  "Wash thoroughly before eating, drinking or smoking.",
  "If contact occurs with eyes or skin, or if you feel unwell, seek medical advice immediately.",
  "Follow the designated procedures for chemical storage, handling and disposal.",
];

const confinedSpaceRules = [
  "Identify confined spaces such as boilers, pipelines, pits, storage tanks, furnaces, trenches and shafts.",
  "Ensure competent personnel, training, supervision and suitability before entry.",
  "Obtain the required Permit to Work.",
  "Apply the buddy system and job rotation.",
  "Provide adequate ventilation and gas purging.",
  "Test and monitor the atmosphere regularly.",
  "Isolate mechanical, electrical and process systems.",
  "Provide suitable respiratory and other personal protective equipment.",
  "Maintain safe access, egress and communication.",
  "Control flammable, explosive and combustible atmospheres.",
];

const ppeItems = [
  ["01", "Safety Helmet", "Protects the head from falling objects."],
  ["02", "Safety Glasses", "Protects the eyes from flying particles."],
  ["03", "Ear Protection", "Helps prevent hearing loss in noisy areas."],
  ["04", "Respiratory Equipment", "Protects against harmful dust and inhaled contaminants."],
  ["05", "Safety Gloves", "Protects hands from workplace injuries."],
  ["06", "Safety Shoes", "Protects feet from falling objects and injuries."],
  ["07", "Reflective Clothing", "Improves visibility to other personnel."],
];

const violations = [
  {
    number: "01",
    title: "First Violation",
    action: "Warning & Written Notice",
    description:
      "The violator receives a warning and undergoes reorientation on safety measures and regulations.",
  },
  {
    number: "02",
    title: "Second Violation",
    action: "Removal & Reorientation",
    description:
      "The violator is removed from the worksite and must complete safety training and reorientation, without compensation for the half-day of work already completed.",
  },
  {
    number: "03",
    title: "Third Violation",
    action: "Suspension & Reassignment",
    description:
      "The offender is suspended for one full day without pay and reassigned to tasks with lower risk. Further training is provided.",
  },
];

const topics = [
  {
    id: "height",
    number: "01",
    title: "Working at Height",
    description: "Ladders, scaffolding, fall protection and elevated work.",
    tag: "Fall Prevention",
  },
  {
    id: "scaffolding",
    number: "02",
    title: "Scaffolding Safety",
    description: "Erection, inspection, dismantling and scaffold tags.",
    tag: "Access Safety",
  },
  {
    id: "mewp",
    number: "03",
    title: "Mobile Elevated Platforms",
    description: "Safe operation and inspection of MEWPs.",
    tag: "Equipment Safety",
  },
  {
    id: "hotwork",
    number: "04",
    title: "Hot Work",
    description: "Welding, cutting, grinding and fire watch procedures.",
    tag: "Fire Prevention",
  },
  {
    id: "fire",
    number: "05",
    title: "Fire Safety",
    description: "Extinguisher classifications and emergency actions.",
    tag: "Emergency",
  },
  {
    id: "chemical",
    number: "06",
    title: "Hazardous Substances",
    description: "Chemical handling, PPE and exposure precautions.",
    tag: "Hazard Control",
  },
  {
    id: "confined",
    number: "07",
    title: "Confined Spaces",
    description: "Entry permits, ventilation, isolation and monitoring.",
    tag: "High Risk",
  },
  {
    id: "ppe",
    number: "08",
    title: "Personal Protection",
    description: "The correct protective equipment for every task.",
    tag: "PPE",
  },
];

function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className={`hse-section-title ${light ? "light" : ""}`}>
      <span className="hse-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="hse-checklist">
      {items.map((item, index) => (
        <li key={index}>
          <span className="hse-check">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HSE() {
  return (
    <main className="hse-page">
      {/* HERO */}
      {/* HERO */}
<section className="hse-hero">
  <div className="hse-hero-grid"></div>
  <div className="hse-hero-glow"></div>

  <div className="hse-hero-content">

    <p className="hse-hero-overline">
      OUR COMMITMENT. OUR RESPONSIBILITY.
    </p>

    <h1>
      HEALTH <span>&</span> SAFETY
      <br />
      <em>ENVIRONMENT</em>
    </h1>

    <p className="hse-hero-description">
      Building a safer workplace through responsibility,
      awareness and a culture of prevention.
    </p>

    <div className="hse-hero-actions">
      <a href="#hse-policy" className="hse-button">
        Explore Our Commitment <span>↗</span>
      </a>
      <a href="#hse-standards" className="hse-text-link">
        Discover Safety Standards <span>↓</span>
      </a>
    </div>

    
  </div>

  <div className="hse-hero-art">
    <div className="hse-art-orbit orbit-one"></div>
    <div className="hse-art-orbit orbit-two"></div>
    <div className="hse-art-orbit orbit-three"></div>

    <div className="hse-art-ring ring-one"></div>
    <div className="hse-art-ring ring-two"></div>

    <div className="hse-art-circle">
      <div className="hse-art-symbol">✳</div>
      <span>SAFETY</span>
      <strong>FIRST</strong>
      <small>AT EVERY WORKSITE</small>
    </div>

    <div className="hse-art-dot dot-one"></div>
    <div className="hse-art-dot dot-two"></div>
    <div className="hse-art-dot dot-three"></div>

  </div>
</section>

      {/* INTRODUCTION */}
      <section className="hse-intro" id="hse-policy">
        <div className="hse-intro-heading">
          <span className="hse-eyebrow">01 — OUR PURPOSE</span>
          <h2>
            A commitment that
            <br />
            <span>protects every life.</span>
          </h2>
        </div>

        <div className="hse-intro-copy">
          <p>
            At Khamis Al Sharjah Contracting Co. (KSC), we prioritise
            Health, Safety and Environmental excellence as a core value
            in our business operations.
          </p>
          <p>
            We are committed to protecting our employees, clients,
            subcontractors and the communities in which we operate by
            integrating HSE principles into all aspects of our work.
          </p>
        </div>
      </section>

      {/* POLICY */}
      <section className="hse-policy-section">
        <div className="hse-policy-main">
          <span className="hse-eyebrow">OUR 2025 POLICY</span>
          <h2>
            Safety is not just a standard.
            <span> It is our responsibility.</span>
          </h2>
          <p>
            KSC is committed to continual improvement in HSE performance,
            fostering a culture where safety, environmental responsibility
            and operational excellence go hand in hand.
          </p>
          <div className="hse-policy-sign">
            <span>APPROVED BY</span>
            <strong>Siju Antony</strong>
            <small>Managing Director · Khamis Al Sharjah Contracting Company</small>
            <small>Policy date: 12 March 2025</small>
          </div>
        </div>

        <div className="hse-policy-list">
          <h3>Our commitments</h3>
          <Checklist items={commitments} />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="hse-values-section">
        <SectionTitle
          eyebrow="02 — THE KSC WAY"
          title="Three core values of safety."
          description="The foundation of a responsible and safety-conscious workplace."
        />

        <div className="hse-values-grid">
          {safetyValues.map((value) => (
            <article className="hse-value-card" key={value.number}>
              <div className="hse-card-top">
                <span>{value.number}</span>
                <span className="hse-value-icon">{value.icon}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <div className="hse-card-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* STANDARDS */}
      <section className="hse-standards-section" id="hse-standards">
        <SectionTitle
          eyebrow="03 — WORKPLACE COMPLIANCE"
          title="Every detail matters."
          description="The general rules and manufacturing practices that guide our daily operations."
        />

        <div className="hse-standards-grid">
          <article className="hse-standard-card">
            <div className="hse-standard-number">01</div>
            <span className="hse-standard-label">SITE REQUIREMENTS</span>
            <h3>General Information</h3>
            <p>Essential requirements for all personnel entering and working at KSC and client sites.</p>
            <Checklist items={siteRules.map((rule) => rule.title)} />
          </article>

          <article className="hse-standard-card hse-standard-dark">
            <div className="hse-standard-number">02</div>
            <span className="hse-standard-label">FACTORY HYGIENE</span>
            <h3>Good Manufacturing Practices</h3>
            <p>Maintaining hygiene, cleanliness and compliance within factory environments.</p>
            <Checklist items={gmpRules} />
          </article>
        </div>
      </section>

      {/* BASIC SAFETY */}
      <section className="hse-rules-section">
        <div className="hse-rules-heading">
          <span className="hse-eyebrow">04 — DAILY SAFETY</span>
          <h2>Safe work starts with the basics.</h2>
          <p>
            Good housekeeping, personal protection and safe equipment
            operation are essential at every KSC worksite.
          </p>
        </div>

        <div className="hse-rules-grid">
          <article className="hse-rule-box">
            <span className="hse-rule-icon">01</span>
            <h3>Good Housekeeping</h3>
            <p>
              Maintain cleanliness and organisation. Prevent slips,
              trips and falls by keeping materials and equipment in
              their designated places.
            </p>
          </article>
          <article className="hse-rule-box">
            <span className="hse-rule-icon">02</span>
            <h3>Safety Measures</h3>
            <p>
              Inspect machinery, tools, electrical installations and
              cables before use. Keep clear of hazardous and restricted areas.
            </p>
          </article>
          <article className="hse-rule-box">
            <span className="hse-rule-icon">03</span>
            <h3>Personal Safety</h3>
            <p>
              Use the required protective equipment, maintain good
              personal hygiene and report unsafe conditions to your supervisor.
            </p>
          </article>
        </div>
      </section>

      {/* SAFE SYSTEM */}
      <section className="hse-work-section">
        <div className="hse-work-heading">
          <span className="hse-eyebrow">05 — SAFE SYSTEM OF WORK</span>
          <h2>Plan the work. Control the risk.</h2>
          <p>
            Follow the approved work procedure and ensure all required
            controls are in place before starting any activity.
          </p>
        </div>
        <div className="hse-work-list">
          <Checklist items={workRules} />
        </div>
      </section>

      {/* SAFETY TOPICS */}
      <section className="hse-topics-section" id="safety-topics">
        <SectionTitle
          eyebrow="06 — CRITICAL SAFETY PROCEDURES"
          title="Know the risks. Work safely."
          description="Explore the important safety procedures and precautions outlined in the KSC handbook."
        />

        <div className="hse-topics-grid">
          {topics.map((topic) => (
            <a
              href={`#topic-${topic.id}`}
              className="hse-topic-card"
              key={topic.id}
            >
              <span className="hse-topic-number">{topic.number}</span>
              <span className="hse-topic-tag">{topic.tag}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="hse-topic-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* HEIGHT */}
      <section className="hse-detail-section" id="topic-height">
        <div className="hse-detail-intro">
          <span className="hse-eyebrow">07 — FALL PREVENTION</span>
          <h2>Working at height.</h2>
          <p>
            Falls are identified in the handbook as a leading cause of
            fatalities in the construction industry. Prevention begins
            with proper access, inspection and fall protection.
          </p>
          <div className="hse-detail-note">
            <strong>REMEMBER</strong>
            <span>
              Use inspected access equipment and appropriate fall
              protection before working at height.
            </span>
          </div>
        </div>
        <div className="hse-detail-content">
          <h3>Essential precautions</h3>
          <Checklist items={heightRules} />
        </div>
      </section>

      {/* SCAFFOLDING */}
      <section className="hse-detail-section hse-detail-alt" id="topic-scaffolding">
        <div className="hse-detail-intro">
          <span className="hse-eyebrow">08 — ACCESS EQUIPMENT</span>
          <h2>Scaffolding safety.</h2>
          <p>
            Scaffolding must be erected, inspected and dismantled
            under competent supervision.
          </p>
          <div className="hse-scaffold-tags">
            <div className="tag-red"><span></span> RED · UNSAFE</div>
            <div className="tag-green"><span></span> GREEN · SAFE</div>
            <div className="tag-yellow"><span></span> YELLOW · RESTRICTED USE</div>
          </div>
          <small>
            Tag classifications follow the KSC handbook. Yellow scaffolds
            may only be used by workers wearing properly anchored personal
            fall-arrest systems.
          </small>
        </div>
        <div className="hse-detail-content">
          <h3>Scaffolding requirements</h3>
          <Checklist items={scaffoldRules} />
        </div>
      </section>

      {/* MEWP */}
      <section className="hse-detail-section" id="topic-mewp">
        <div className="hse-detail-intro">
          <span className="hse-eyebrow">09 — ELEVATED PLATFORMS</span>
          <h2>Mobile elevated working platforms.</h2>
          <p>
            MEWPs can provide safe access to elevated work areas,
            particularly where scaffolding is inaccessible or unsuitable.
          </p>
        </div>
        <div className="hse-detail-content">
          <h3>Safe operation procedures</h3>
          <Checklist items={mewpRules} />
        </div>
      </section>

      {/* HOT WORK */}
      <section className="hse-hotwork-section" id="topic-hotwork">
        <div className="hse-hotwork-heading">
          <span className="hse-eyebrow">10 — FIRE PREVENTION</span>
          <h2>Hot work requires control.</h2>
          <p>
            Welding, cutting and grinding must be carried out by
            competent personnel under approved safety procedures.
          </p>
        </div>
        <div className="hse-hotwork-types">
          <div><span>01</span><strong>WELDING</strong></div>
          <div><span>02</span><strong>CUTTING</strong></div>
          <div><span>03</span><strong>GRINDING</strong></div>
        </div>
        <div className="hse-hotwork-checks">
          <h3>Hot work checklist</h3>
          <Checklist items={hotWorkRules} />
          <div className="hse-fire-watch">
            <strong>30 MINUTES</strong>
            <span>Fire watch after completion of hot work, as specified in the handbook.</span>
          </div>
        </div>
      </section>

      {/* FIRE SAFETY */}
      <section className="hse-fire-section" id="topic-fire">
        <div className="hse-fire-heading">
          <span className="hse-eyebrow">11 — EMERGENCY PREPAREDNESS</span>
          <h2>Fire safety & extinguisher awareness.</h2>
          <p>
            Understand fire classifications and the appropriate
            extinguisher guidance provided in the handbook.
          </p>
        </div>
        <div className="hse-fire-classes">
          {[
            ["A", "Ordinary combustibles", "Wood, paper, cloth and similar materials."],
            ["B", "Flammable liquids", "Petroleum products, solvents and flammable liquids."],
            ["C", "Electrical fires", "Energised electrical equipment."],
            ["D", "Combustible metals", "Magnesium, titanium, sodium and similar metals."],
            ["K", "Cooking media", "Cooking oils and fats."],
          ].map(([letter, name, description]) => (
            <div className="hse-fire-class" key={letter}>
              <span>{letter}</span>
              <div>
                <strong>{name}</strong>
                <small>{description}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="hse-fire-action">
          <h3>Remember: PASS</h3>
          <div className="hse-pass-grid">
            {[
              ["P", "PULL", "Pull the pin."],
              ["A", "AIM", "Aim at the base of the fire."],
              ["S", "SQUEEZE", "Squeeze the handle."],
              ["S", "SWEEP", "Sweep from side to side."],
            ].map(([letter, title, text]) => (
              <div key={title}>
                <span>{letter}</span>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            ))}
          </div>
          <p>
            If you discover or suspect a fire, follow the site's fire
            action instructions, raise the alarm and evacuate using
            the nearest available exit.
          </p>
        </div>
      </section>

      {/* EMERGENCY RESPONSE */}
      <section className="hse-emergency-section">
        <div className="hse-emergency-intro">
          <span className="hse-eyebrow">12 — INCIDENT RESPONSE</span>
          <h2>When an emergency occurs, stay calm.</h2>
          <p>
            Familiarise yourself with your work environment and the
            emergency instructions provided by your supervisor.
          </p>
          <div className="hse-emergency-badge">EMERGENCY RESPONSE</div>
        </div>
        <div className="hse-emergency-content">
          <h3>When someone is seriously injured</h3>
          <Checklist items={emergencyRules} />
          <div className="hse-emergency-callout">
            <strong>EMERGENCY CONTACTS</strong>
            <p>
              Always refer to the emergency telephone numbers posted
              on the notice board in the site office.
            </p>
            <small>
              The handbook does not provide a universal emergency
              telephone number. Follow the applicable site instructions.
            </small>
          </div>
        </div>
      </section>

      {/* CHEMICAL SAFETY */}
      <section className="hse-detail-section" id="topic-chemical">
        <div className="hse-detail-intro">
          <span className="hse-eyebrow">13 — HAZARD MANAGEMENT</span>
          <h2>Toxic & harmful substances.</h2>
          <p>
            Chemical exposure can cause injury, burns or serious health
            effects. Identify the hazard and follow the required
            precautions.
          </p>
        </div>
        <div className="hse-detail-content">
          <h3>Safety precautions</h3>
          <Checklist items={toxicPrecautions} />
        </div>
      </section>

      {/* CONFINED SPACE */}
      <section className="hse-confined-section" id="topic-confined">
        <div className="hse-confined-header">
          <span className="hse-eyebrow">14 — HIGH-RISK ACTIVITIES</span>
          <h2>Confined space safety.</h2>
          <p>
            Confined spaces include boilers, pipelines, pits, storage
            tanks, furnaces, trenches, shafts and other restricted
            environments.
          </p>
        </div>
        <div className="hse-confined-content">
          <h3>Key elements of a safe system of work</h3>
          <Checklist items={confinedSpaceRules} />
        </div>
      </section>

      {/* PPE */}
      <section className="hse-ppe-section" id="topic-ppe">
        <div className="hse-ppe-heading">
          <span className="hse-eyebrow">15 — PERSONAL PROTECTION</span>
          <h2>Your safety starts with the right PPE.</h2>
          <p>
            Select and wear protective equipment appropriate to the
            hazards and requirements of your assigned task.
          </p>
        </div>
        <div className="hse-ppe-grid">
          {ppeItems.map(([number, title, description]) => (
            <article className="hse-ppe-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="hse-ppe-bottom">
          YOU ONLY HAVE ONE BODY. PROTECT IT.
        </div>
      </section>

      {/* DISCIPLINARY */}
      <section className="hse-discipline-section">
        <SectionTitle
          eyebrow="16 — ACCOUNTABILITY"
          title="Safety violations have consequences."
          description="The KSC handbook outlines a three-stage disciplinary process for violations of safety instructions."
        />
        <div className="hse-discipline-grid">
          {violations.map((item) => (
            <article className="hse-discipline-card" key={item.number}>
              <span className="hse-discipline-number">{item.number}</span>
              <h3>{item.title}</h3>
              <strong>{item.action}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hse-final-section">
        <div className="hse-final-content">
          <span className="hse-eyebrow">OUR SHARED RESPONSIBILITY</span>
          <h2>
            Safe at KSC.
            <br />
            <span>Safe for loved ones.</span>
          </h2>
          <p>
            If you see or encounter any safety issues, inform your
            Site Safety Officer immediately.
          </p>
          <a href="#hse-policy" className="hse-button hse-button-light">
            Back to HSE Policy <span>↑</span>
          </a>
        </div>
        <div className="hse-final-mark">
          <span>HSE</span>
          <strong>2025</strong>
          <small>KNOWLEDGE · SERVICE · COMMITMENT</small>
        </div>
      </section>
    </main>
  );
}
