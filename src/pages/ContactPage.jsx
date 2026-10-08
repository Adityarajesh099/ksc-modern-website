import React from "react";

function Arrow({ small = false }) {
  return (
    <span className={small ? "arrow small" : "arrow"}>
      ↗
    </span>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="container contact-hero-inner">
          <div className="contact-hero-kicker">
            <span className="kicker-line"></span>
            <p className="eyebrow light">CONTACT KSC</p>
          </div>

          <h1>
            Let's build
            <br />
            <em>something together.</em>
          </h1>

          <p>
            Tell us about your project, requirement or partnership
            opportunity. Our team will be happy to discuss how KSC can help.
          </p>
        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-main section">
        <div className="container">

          <div className="contact-intro">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>

              <h2>
                Start a
                <br />
                <span>conversation.</span>
              </h2>
            </div>

            <p className="contact-intro-text">
              Whether you are planning a new project, looking for an
              engineering partner, or simply need more information about
              our services, send us your enquiry and our team will get back
              to you.
            </p>
          </div>


          <div className="contact-grid">

            {/* ENQUIRY FORM */}
            <div className="contact-form-card">

              <div className="contact-form-heading">
                <p className="eyebrow">SEND AN ENQUIRY</p>
                <h3>How can we help?</h3>
              </div>

              <form>

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      Company Name
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Your company"
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+966"
                      required
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="enquiryType">
                      Enquiry Type
                    </label>

                    <select id="enquiryType" defaultValue="">
                      <option value="" disabled>
                        Select enquiry type
                      </option>

                      <option value="general">
                        General Enquiry
                      </option>

                      <option value="project">
                        Project Enquiry
                      </option>

                      <option value="quotation">
                        Request for Quotation
                      </option>

                      <option value="partnership">
                        Partnership
                      </option>

                      <option value="careers">
                        Careers
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>


                  <div className="form-group">
                    <label htmlFor="service">
                      Service / Area of Interest
                    </label>

                    <select id="service" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="civil">
                        Civil Construction
                      </option>

                      <option value="electrical">
                        Electrical Works
                      </option>

                      <option value="mechanical">
                        Mechanical Works
                      </option>

                      <option value="architectural">
                        Architectural & Interior Design
                      </option>

                      <option value="equipment">
                        Equipment & Machine Installation
                      </option>

                      <option value="fire">
                        Fire Detection & Fire Fighting
                      </option>

                      <option value="hvac">
                        HVAC Works
                      </option>

                      <option value="fitout">
                        Fitout Works
                      </option>
                    </select>
                  </div>

                </div>


                <div className="form-group">
                  <label htmlFor="location">
                    Project Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    placeholder="City / Region / Country"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    rows="7"
                    placeholder="Tell us about your project or enquiry..."
                    required
                  ></textarea>
                </div>


                <div className="form-group">
                  <label htmlFor="attachment">
                    Attach File
                  </label>

                  <input
                    id="attachment"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />

                  <small>
                    PDF, DOC, DOCX, JPG or PNG
                  </small>
                </div>


                <button
                  type="submit"
                  className="button primary contact-submit"
                >
                  Send Enquiry
                  <Arrow />
                </button>

              </form>

            </div>


            {/* CONTACT INFORMATION */}
            <aside className="contact-info">

              <div className="contact-info-heading">
                <p className="eyebrow">KSC INFORMATION</p>

                <h3>
                  Talk directly
                  <br />
                  <span>with KSC.</span>
                </h3>
              </div>


              <div className="contact-info-list">

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Riyadh%2C%20Saudi%20Arabia"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <span className="contact-info-number">01</span>

                  <div>
                    <strong>Our Location</strong>
                    <p>
                      Riyadh,
                      <br />
                      Kingdom of Saudi Arabia
                    </p>
                  </div>

                  <Arrow small />
                </a>


                <a
                  href="tel:+966510020030"
                  className="contact-info-item"
                >
                  <span className="contact-info-number">02</span>

                  <div>
                    <strong>Call Us</strong>
                    <p>
                      +966 (0) 5100 20030
                    </p>
                  </div>

                  <Arrow small />
                </a>


                <a
                  href="mailto:sales@ksc-sa.com"
                  className="contact-info-item"
                >
                  <span className="contact-info-number">03</span>

                  <div>
                    <strong>Email Us</strong>
                    <p>
                      sales@ksc-sa.com
                    </p>
                  </div>

                  <Arrow small />
                </a>


                <a
                  href="https://wa.me/+966558156899"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <span className="contact-info-number">04</span>

                  <div>
                    <strong>WhatsApp</strong>
                    <p>
                      Start a conversation
                    </p>
                  </div>

                  <Arrow small />
                </a>

              </div>


              <div className="contact-response">
                <span className="contact-response-dot"></span>

                <div>
                  <strong>Project enquiries</strong>

                  <p>
                    Send us your requirements and our team
                    will review your enquiry.
                  </p>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </section>


      {/* LOCATION */}
      <section className="contact-location section">
  <div className="container">

    <div className="contact-location-heading">
      <div>
        <p className="eyebrow">FIND KSC</p>

        <h2>
          Visit our
          <br />
          <span>office.</span>
        </h2>
      </div>

      <p>
        Our office is located in Riyadh, Kingdom of Saudi Arabia.
        Contact us before visiting so our team can assist you.
      </p>
    </div>


    <div className="location-experience">

      {/* LEFT INFORMATION PANEL */}

      <div className="location-panel">

        <div className="location-panel-top">
          <span>KSC LOCATION</span>

          <div className="location-status">
            <i></i>
            RIYADH, SAUDI ARABIA
          </div>
        </div>


        <div className="location-panel-main">

          <div className="location-big-text">
            RIYADH
          </div>

          <div className="location-content">

            <p className="location-label">
              HEAD OFFICE
            </p>

            <h3>
              Khamis Al Sharjah
              <br />
              Contracting Co.
            </h3>

            <p className="location-address">
              Riyadh,
              <br />
              Kingdom of Saudi Arabia
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Khamis%20Al%20Sharjah%20Contracting%20Co%2C%20Riyadh%2C%20Saudi%20Arabia"
              target="_blank"
              rel="noreferrer"
              className="location-map-link"
            >
              <span>OPEN GOOGLE MAPS</span>

              <strong>↗</strong>
            </a>

          </div>

        </div>


        <div className="location-panel-bottom">

      

          

        </div>

      </div>


      {/* MAP */}

      <div className="location-map-frame">

        <iframe
          title="KSC Riyadh Location"
          src="https://www.google.com/maps?q=Khamis%20Al%20Sharjah%20Contracting%20Co%2C%20Riyadh%2C%20Saudi%20Arabia&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


        {/* MAP LABEL */}

        <div className="map-coordinate">

          <span>LOCATION</span>

          <strong>
            RIYADH
          </strong>

        </div>


        {/* LOCATION MARKER */}

        <div className="map-location-marker">

          <span className="marker-ring"></span>

          <span className="marker-dot"></span>

        </div>


        {/* MAP CORNER */}

        <div className="map-corner-label">
          KSC / 24°N
        </div>

      </div>

    </div>

  </div>
</section>


      {/* FINAL CTA */}
      <section className="contact-final section">

        <div className="container contact-final-inner">

          <p className="eyebrow light">
            LET'S WORK TOGETHER
          </p>

          <h2>
            Have a project
            <br />
            <em>in mind?</em>
          </h2>

          <p>
            Let's discuss your requirements and explore how KSC
            can support your next project.
          </p>

          <a
            href="mailto:info@ksc-sa.com"
            className="button white"
          >
            Start a Conversation
            <Arrow />
          </a>

        </div>

      </section>

    </div>
  );
}