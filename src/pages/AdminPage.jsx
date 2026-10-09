import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const services = [
  {
    slug: "civil-construction",
    number: "01",
    name: "Civil Construction",
  },
  {
    slug: "electrical-works",
    number: "02",
    name: "Electrical Works",
  },
  {
    slug: "mechanical-works",
    number: "03",
    name: "Mechanical Works",
  },
  {
    slug: "architectural-interior-design",
    number: "04",
    name: "Architectural & Interior Design",
  },
  {
    slug: "equipment-machine-installations",
    number: "05",
    name: "Equipment & Machine Installations",
  },
  {
    slug: "fire-detection-fire-fighting",
    number: "06",
    name: "Fire Detection & Fire Fighting System",
  },
  {
    slug: "hvac-works",
    number: "07",
    name: "HVAC Works",
  },
  {
    slug: "fitout-works",
    number: "08",
    name: "Fitout Works",
  },
];

export default function AdminPage() {
const [activeSection, setActiveSection] = useState("dashboard");
const [showHomepageServiceImages, setShowHomepageServiceImages] = useState(false);
const [session, setSession] = useState(null);
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [loginError, setLoginError] = useState("");
const [checkingSession, setCheckingSession] = useState(true);
const [projects, setProjects] = useState([]);
const [adminSlideIndexes, setAdminSlideIndexes] = useState({});

useEffect(() => {
  const interval = setInterval(() => {
    setProjects((currentProjects) => {
      setAdminSlideIndexes((currentIndexes) => {
        const nextIndexes = { ...currentIndexes };

        currentProjects.forEach((project) => {
          const count = (project.images || []).length;

          if (count > 1) {
            nextIndexes[project.id] =
              ((currentIndexes[project.id] || 0) + 1) % count;
          }
        });

        return nextIndexes;
      });

      return currentProjects;
    });
  }, 4000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const loadProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Could not load projects:", error.message);
      return;
    }

    const projectsWithImages = await Promise.all(
      (data || []).map(async (project) => {
        const images = await Promise.all(
          (project.images || []).map(async (image) => {
            const { data: signedData, error: signedError } =
              await supabase.storage
                .from("project-images")
                .createSignedUrl(image.path, 3600);

            if (signedError) {
              console.error("Could not load image:", signedError.message);
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

  if (session) {
    loadProjects();
  }
}, [session]);
const [projectStatus, setProjectStatus] = useState("Ongoing");
const [showProjectForm, setShowProjectForm] = useState(false);
const [editingProject, setEditingProject] = useState(null);
const [selectedService, setSelectedService] = useState(
    "civil-construction"
  );

const [serviceImageFiles, setServiceImageFiles] = useState({});
const [serviceImageUrls, setServiceImageUrls] = useState({});
const [savingServiceImage, setSavingServiceImage] = useState(false); 

const handleSaveServiceImage = async () => {
  const file = serviceImageFiles[selectedService];

  if (!file) {
    alert("Please choose an image first.");
    return;
  }

  setSavingServiceImage(true);

  try {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    const filePath = `${selectedService}/${Date.now()}.${fileExtension}`;

    const { error: uploadError } = await supabase.storage
      .from("homepage-service-images")
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
      });

    if (uploadError) throw uploadError;

    const { error: databaseError } = await supabase
      .from("homepage_service_images")
      .upsert(
        {
          service_slug: selectedService,
          image_path: filePath,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "service_slug" }
      );

    if (databaseError) throw databaseError;

    alert("Service image saved successfully!");
    setServiceImageFiles((current) => ({
      ...current,
      [selectedService]: null,
    }));
  } catch (error) {
    console.error("Error saving service image:", error);
    alert(`Failed to save image: ${error.message}`);
  } finally {
    setSavingServiceImage(false);
  }
};

const handleDeleteServiceImage = async () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this service image?"
  );

  if (!confirmed) return;

  setSavingServiceImage(true);

  try {
    const { data: imageRecord, error: fetchError } = await supabase
      .from("homepage_service_images")
      .select("image_path")
      .eq("service_slug", selectedService)
      .maybeSingle();

    if (fetchError) throw fetchError;

    if (!imageRecord) {
      alert("No saved image exists for this service.");
      return;
    }

    const { error: storageError } = await supabase.storage
      .from("homepage-service-images")
      .remove([imageRecord.image_path]);

    if (storageError) throw storageError;

    const { error: deleteError } = await supabase
      .from("homepage_service_images")
      .delete()
      .eq("service_slug", selectedService);

    if (deleteError) throw deleteError;

    setServiceImageUrls((current) => ({
      ...current,
      [selectedService]: "",
    }));

    setServiceImageFiles((current) => ({
      ...current,
      [selectedService]: null,
    }));

    alert("Service image deleted successfully!");
  } catch (error) {
    console.error("Error deleting service image:", error);
    alert(`Failed to delete image: ${error.message}`);
  } finally {
    setSavingServiceImage(false);
  }
};

useEffect(() => {
  if (!showProjectForm) return;

  document.getElementById("projectName").value =
    editingProject?.name || "";

  document.getElementById("projectLocation").value =
    editingProject?.location || "";

  document.getElementById("projectClient").value =
    editingProject?.client || "";

  document.getElementById("projectStartDate").value =
    editingProject?.start_date || "";

  document.getElementById("projectDescription").value =
    editingProject?.description || "";

  document.getElementById("projectScope").value =
    (editingProject?.scope || []).join("\n");

  setProjectStatus(editingProject?.status || "Ongoing");
}, [showProjectForm, editingProject]);


useEffect(() => {
  let mounted = true;

  supabase.auth.getSession().then(({ data, error }) => {
    if (!mounted) return;
    if (error) setLoginError(error.message);
    setSession(data?.session ?? null);
    setCheckingSession(false);
  });

  const { data: authListener } = supabase.auth.onAuthStateChange(
    (_event, currentSession) => {
      setSession(currentSession);
      setCheckingSession(false);
    }
  );

  return () => {
    mounted = false;
    authListener.subscription.unsubscribe();
  };
}, []);

const handleAdminLogin = async (event) => {
  event.preventDefault();
  setLoginError("");

  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginEmail,
    password: loginPassword,
  });

  if (error) {
    setLoginError(error.message);
    return;
  }

  setSession(data.session);
};

const handleAdminLogout = async () => {
  await supabase.auth.signOut();
  setSession(null);
};

if (checkingSession) {
  return (
    <main className="ksc-admin">
      <div className="ksc-admin-contact-card">
        <h3>Checking administrator session...</h3>
      </div>
    </main>
  );
}


if (!session) {
  return (
    <main className="ksc-admin">
      <div
        className="ksc-admin-contact-card"
        style={{
          maxWidth: "460px",
          margin: "80px auto",
          width: "100%",
        }}
      >
        <span className="eyebrow">KSC / SECURE ACCESS</span>
        <h2>Administrator Login</h2>
        <p>Sign in to manage KSC website content.</p>

        <form onSubmit={handleAdminLogin}>
          <div className="ksc-admin-form-field">
            <label>Email Address</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="ksc-admin-form-field">
            <label>Password</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {loginError && (
            <p role="alert" style={{ color: "#b42318" }}>
              {loginError}
            </p>
          )}

          <button
            className="ksc-admin-primary-button"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}


  const menuItems = [
    {
      id: "dashboard",
      number: "01",
      title: "Dashboard",
    },
    {
      id: "projects",
      number: "02",
      title: "Projects",
    },
    {
      id: "homepage",
      number: "03",
      title: "Homepage",
    },
    {
      id: "services",
      number: "04",
      title: "Services",
    },
    {
      id: "contact",
      number: "05",
      title: "Contact & Quote",
    },
  ];

  return (
    
    <main className="ksc-admin">

      <aside className="ksc-admin-sidebar">

        <div className="ksc-admin-brand">
          <img src="/images/logo.png" alt="KSC" />
          <span>ADMIN</span>
        </div>

        <nav className="ksc-admin-nav">

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={
                activeSection === item.id
                  ? "ksc-admin-nav-item active"
                  : "ksc-admin-nav-item"
              }
              onClick={() => setActiveSection(item.id)}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </button>
          ))}

        </nav>

        <div className="ksc-admin-sidebar-bottom">
          <span>KSC CONTRACTING CO.</span>
          <small>Content Management</small>
        </div>

      </aside>


      <section className="ksc-admin-main">

        <header className="ksc-admin-header">

          <div>
            <span className="eyebrow">KSC / ADMINISTRATION</span>

            <h1>
              {activeSection === "dashboard" && "Website Dashboard"}
              {activeSection === "projects" && "Project Management"}
              {activeSection === "homepage" && "Homepage Management"}
              {activeSection === "services" && "Services Management"}
              {activeSection === "contact" && "Contact & Quote"}
            </h1>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="ksc-admin-view-site"
          >
            View Website ↗
          </a>
          <button
            type="button"
            className="ksc-admin-secondary-button"
            onClick={handleAdminLogout}
            >
            Sign Out
            </button>

        </header>


        {activeSection === "dashboard" && (
          <section className="ksc-admin-dashboard">

            <div className="ksc-admin-welcome">
              <span className="eyebrow">CONTENT CONTROL</span>

              <h2>
                Manage your website
                <br />
                <span>from one place.</span>
              </h2>

              <p>
                Upload project images, manage service imagery,
                update homepage content and control the Get a Quote
                contact email without editing the website code.
              </p>
            </div>


            <div className="ksc-admin-stats">

              <div className="ksc-admin-stat">
                <span>PROJECTS</span>
                <strong>0</strong>
                <small>Ongoing & Completed</small>
              </div>

              <div className="ksc-admin-stat">
                <span>SERVICES</span>
                <strong>08</strong>
                <small>Service Pages</small>
              </div>

              <div className="ksc-admin-stat">
                <span>HERO IMAGES</span>
                <strong>00</strong>
                <small>Homepage Slides</small>
              </div>

              <div className="ksc-admin-stat">
                <span>STATUS</span>
                <strong>LIVE</strong>
                <small>Website Content</small>
              </div>

            </div>


            <div className="ksc-admin-dashboard-grid">

              <button
                onClick={() => setActiveSection("projects")}
                className="ksc-admin-card"
              >
                <span>01</span>
                <h3>Manage Projects</h3>
                <p>
                  Add ongoing and completed projects with
                  multiple project images.
                </p>
                <strong>Open →</strong>
              </button>


              <button
                onClick={() => setActiveSection("homepage")}
                className="ksc-admin-card"
              >
                <span>02</span>
                <h3>Manage Homepage</h3>
                <p>
                  Control the main hero and service images
                  displayed on the homepage.
                </p>
                <strong>Open →</strong>
              </button>


              <button
                onClick={() => setActiveSection("services")}
                className="ksc-admin-card"
              >
                <span>03</span>
                <h3>Manage Services</h3>
                <p>
                  Upload hero and construction images for
                  every KSC service.
                </p>
                <strong>Open →</strong>
              </button>


              <button
                onClick={() => setActiveSection("contact")}
                className="ksc-admin-card"
              >
                <span>04</span>
                <h3>Contact & Quote</h3>
                <p>
                  Update the email address used for
                  Get a Quote and contact enquiries.
                </p>
                <strong>Open →</strong>
              </button>

            </div>

          </section>
        )}


        {activeSection === "projects" && (
          <section className="ksc-admin-section">

            <div className="ksc-admin-section-heading">
              <div>
                <span className="eyebrow">PROJECT MANAGEMENT</span>
                <h2>Projects</h2>
              </div>

                <button
                className="ksc-admin-primary-button"
                onClick={() => setShowProjectForm(true)}
                >
                + Add Project
                </button>
            </div>


        


            {showProjectForm && (
  <div className="ksc-admin-contact-card">
    <h3>{editingProject ? "Edit Project" : "Add New Project"}</h3>

    <div className="ksc-admin-form-field">
      <label>Project Name</label>
      <input id="projectName" type="text" placeholder="Project name" />
    </div>

    <div className="ksc-admin-form-field">
      <label>Project Location</label>
      <input id="projectLocation" type="text" placeholder="Project location" />
    </div>

    <div className="ksc-admin-form-field">
  <label>Client Name</label>
  <input
    id="projectClient"
    type="text"
    placeholder="Client name"
  />
</div>

<div className="ksc-admin-form-field">
  <label>Start Date / Year</label>
  <input
    id="projectStartDate"
    type="text"
    placeholder="e.g. 2026"
  />
</div>

<div className="ksc-admin-form-field">
  <label>Project Description</label>
  <textarea
    id="projectDescription"
    placeholder="Describe the project"
    rows={3}
  />
</div>

<div className="ksc-admin-form-field">
  <label>Scope of Work</label>
  <textarea
    id="projectScope"
    placeholder="Enter each scope item on a new line"
    rows={4}
  />
</div>

    <div className="ksc-admin-form-field">
      <label>Project Status</label>
      <select
        value={projectStatus}
        onChange={(e) => setProjectStatus(e.target.value)}
      >
        <option value="Ongoing">Ongoing</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    <div className="ksc-admin-form-field">
      <label>Project Images</label>
      <input id="projectImages" type="file" accept="image/*" multiple />
      {editingProject && (
  <div className="ksc-admin-form-field">
    <label>Existing Project Images</label>

    {(editingProject.images || []).map((image, index) => (
      <div
        key={image.path || image.url || index}
        style={{ marginBottom: "16px" }}
      >
        <img
          src={image.url}
          alt={`${editingProject.name} ${index + 1}`}
          style={{
            width: "100%",
            maxWidth: "260px",
            height: "150px",
            objectFit: "cover",
            display: "block",
            marginBottom: "8px",
            borderRadius: "8px",
          }}
        />

        <button
          type="button"
          className="ksc-admin-secondary-button"
          onClick={() => {
            const updatedImages = (editingProject.images || []).filter(
              (_, imageIndex) => imageIndex !== index
            );

            setEditingProject({
              ...editingProject,
              images: updatedImages,
            });
          }}
        >
          Remove Image
        </button>
      </div>
    ))}
  </div>
)}
    </div>

    <button
      className="ksc-admin-primary-button"
      onClick={async () => {
        const name = document.getElementById("projectName").value.trim();
        const location = document.getElementById("projectLocation").value.trim();
        const client = document.getElementById("projectClient").value.trim();
        const startDate = document.getElementById("projectStartDate").value.trim();
        const description = document.getElementById("projectDescription").value.trim();

        const scope = document
          .getElementById("projectScope")
          .value.split("\n")
          .map((item) => item.trim())
          .filter(Boolean);

        const files = Array.from(
          document.getElementById("projectImages").files
        );

        if (!name || !location) {
          alert("Please enter the project name and location.");
          return;
        }

        try {
            const uploadedImages = [];

            for (const file of files) {
                const filePath = `${crypto.randomUUID()}-${file.name}`;

                const { error: uploadError } = await supabase.storage
                .from("project-images")
                .upload(filePath, file);

                if (uploadError) {
                throw uploadError;
                }

                const { data: imageData, error: urlError } = await supabase.storage
                    .from("project-images")
                    .createSignedUrl(filePath, 3600);

                    if (urlError) {
                    throw urlError;
                    }

                uploadedImages.push({
                name: file.name,
                path: filePath,
                url: imageData.signedUrl,
                });
            }

            const remainingImages = editingProject
              ? editingProject.images || []
              : [];

            const projectData = {
              name,
              location,
              client,
              start_date: startDate,
              description,
              scope,
              status: projectStatus,
              images: [...remainingImages, ...uploadedImages].map(
                ({ name, path }) => ({ name, path })
              ),
            };

            const { data: savedProject, error: saveError } = editingProject
              ? await supabase
                  .from("projects")
                  .update(projectData)
                  .eq("id", editingProject.id)
                  .select()
                  .single()
              : await supabase
                  .from("projects")
                  .insert(projectData)
                  .select()
                  .single();

            if (saveError) {
                throw saveError;
            }

            if (editingProject) {
              const remainingPaths = new Set(
                projectData.images.map((image) => image.path)
              );

              const removedPaths = (editingProject.images || [])
                .filter((image) => image.path && !remainingPaths.has(image.path))
                .map((image) => image.path);

              if (removedPaths.length > 0) {
                const { error: removalError } = await supabase.storage
                  .from("project-images")
                  .remove(removedPaths);

                if (removalError) {
                  console.error("Could not remove old images:", removalError.message);
                }
              }
            }

            const refreshedProject = {
              ...savedProject,
              images: await Promise.all(
                (savedProject.images || []).map(async (image) => {
                  const { data: signedData, error: signedError } =
                    await supabase.storage
                      .from("project-images")
                      .createSignedUrl(image.path, 3600);

                  if (signedError) {
                    console.error("Could not refresh image:", signedError.message);
                    return { ...image, url: "" };
                  }

                  return { ...image, url: signedData.signedUrl };
                })
              ),
            };

            setProjects((current) =>
              editingProject
                ? current.map((project) =>
                    project.id === refreshedProject.id ? refreshedProject : project
                  )
                : [refreshedProject, ...current]
            );

            setShowProjectForm(false);
            setEditingProject(null);

            alert("Project saved successfully!");
            } catch (error) {
            console.error("Project save failed:", error);
            alert(`Could not save project: ${error.message}`);
            }
      }}
    >
      Save Project
    </button>

    <button
      className="ksc-admin-secondary-button"
      onClick={() => setShowProjectForm(false)}
    >
      Cancel
    </button>
  </div>
)}



            {projects.length === 0 ? (
                <div className="ksc-admin-empty">
                    <div className="ksc-admin-empty-icon">+</div>
                    <h3>No projects added yet</h3>
                    <p>
                    Add your first ongoing or completed project with
                    project information and images.
                    </p>
                    <button
                    className="ksc-admin-primary-button"
                    onClick={() => setShowProjectForm(true)}
                    >
                    Add Project
                    </button>
                </div>
                ) : (
                <div className="ksc-admin-management-grid">
                    {projects.map((project) => (
                    <div className="ksc-admin-management-card" key={project.id}>

                        <div className="admin-project-slideshow">
                          {(project.images || []).map((image, index) => (
                            <img
                              key={image.path || image.url || index}
                              src={image.url}
                              alt={`${project.name} ${index + 1}`}
                              loading={index === 0 ? "eager" : "lazy"}
                              decoding="async"
                              fetchPriority={index === 0 ? "high" : "auto"}
                              className={`admin-project-slide ${
                                index === (adminSlideIndexes[project.id] || 0)
                                  ? "active"
                                  : ""
                              }`}
                            />
                          ))}

                          {(project.images || []).length > 1 && (
                            <span className="admin-project-slideshow-counter">
                              {(adminSlideIndexes[project.id] || 0) + 1} / {project.images.length}
                            </span>
                          )}
                        </div>

                        <h3>{project.name}</h3>
                        <p>{project.location}</p>
                        <span className={`ksc-project-status ${project.status === "Completed" ? "completed" : "ongoing"}`}>
                        {project.status}
                        </span>

                        <div className="admin-project-actions">
                        <button
                          type="button"
                          className="ksc-admin-secondary-button"
                          onClick={() => {
                            setEditingProject(project);
                            setShowProjectForm(true);
                          }}
                        >
                          Edit Project
                        </button>

                        <button
                            className="ksc-admin-secondary-button"
                            onClick={async () => {
                                if (!window.confirm("Are you sure you want to permanently delete this project?")) {
                                    return;
                                }

                                try {
                                    for (const image of project.images || []) {
                                    if (image.path) {
                                        const { error: imageError } = await supabase.storage
                                        .from("project-images")
                                        .remove([image.path]);

                                        if (imageError) {
                                        throw imageError;
                                        }
                                    }
                                    }

                                    const { error } = await supabase
                                    .from("projects")
                                    .delete()
                                    .eq("id", project.id);

                                    if (error) {
                                    throw error;
                                    }

                                    setProjects((current) =>
                                    current.filter((item) => item.id !== project.id)
                                    );

                                    alert("Project deleted successfully.");
                                } catch (error) {
                                    console.error("Project deletion failed:", error);
                                    alert(`Could not delete project: ${error.message}`);
                                }
                                }}
                            >
                            Delete Project
                        </button>
                        </div>
                    </div>  
                    ))}
                </div>
                )}

          </section>
        )}



        {activeSection === "homepage" && (
          <section className="ksc-admin-section">
            {showHomepageServiceImages ? (
              <>
                <div className="ksc-admin-section-heading">
                  <div>
                    <span className="eyebrow">HOMEPAGE / SERVICES</span>
                    <h2>Homepage Service Images</h2>
                    <p>
                      Manage the eight images displayed in the homepage Services section.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="ksc-admin-secondary-button"
                    onClick={() => setShowHomepageServiceImages(false)}
                  >
                    ← Back to Homepage
                  </button>
                </div>

                <div className="ksc-admin-service-selector">
                  {services.map((serviceItem) => (
                    <button
                      key={serviceItem.slug}
                      type="button"
                      className={
                        selectedService === serviceItem.slug ? "active" : ""
                      }
                      onClick={() => setSelectedService(serviceItem.slug)}
                    >
                      <span>{serviceItem.number}</span>
                      {serviceItem.name}
                    </button>
                  ))}
                </div>

                <div className="ksc-admin-contact-card">
                  <span className="eyebrow">SELECTED SERVICE</span>
                  <h3>{services.find((item) => item.slug === selectedService)?.name}</h3>

                  <p>
                    Upload an image for {services.find(
                      (item) => item.slug === selectedService
                    )?.name}.
                  </p>

                  <label className="ksc-admin-upload">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          setServiceImageFiles((current) => ({
                            ...current,
                            [selectedService]: file,
                          }));
                          setServiceImageUrls((current) => ({
                            ...current,
                            [selectedService]: URL.createObjectURL(file),
                          }));
                        }
                      }}
                    />
                    <span>+</span>
                    <strong>Choose Service Image</strong>
                    <small>JPG, PNG, WEBP</small>
                  </label>

                  {serviceImageUrls[selectedService] && (
                    <img
                      src={serviceImageUrls[selectedService]}
                      alt="Selected service preview"
                      style={{
                        width: "100%",
                        maxWidth: "420px",
                        height: "240px",
                        objectFit: "cover",
                        marginTop: "20px",
                      }}
                    />
                  )}

                  <button
                    type="button"
                    className="ksc-admin-secondary-button"
                    onClick={handleSaveServiceImage}
                    disabled={savingServiceImage}
                  >
                    {savingServiceImage ? "Saving..." : "Save Service Image"}
                  </button>

                  <button
                    type="button"
                    className="ksc-admin-secondary-button"
                    onClick={handleDeleteServiceImage}
                    disabled={savingServiceImage}
                    style={{
                      marginTop: "12px",
                      marginLeft: "12px",
                      borderColor: "#b42318",
                      color: "#b42318",
                    }}
                  >
                    {savingServiceImage ? "Please wait..." : "Delete Image"}
                  </button>

                </div>
              </>
            ) : (
              <>
                <div className="ksc-admin-section-heading">
                  <div>
                    <span className="eyebrow">HOMEPAGE</span>
                    <h2>Homepage Images</h2>
                  </div>
                </div>

                <div className="ksc-admin-management-grid">
                  <div className="ksc-admin-management-card">
                    <span className="eyebrow">01 / MAIN HERO</span>
                    <h3>Main Hero Images</h3>
                    <p>
                      Upload and manage the images used in the main homepage hero slideshow.
                    </p>

                    <label className="ksc-admin-upload">
                      <input type="file" accept="image/*" multiple />
                      <span>+</span>
                      <strong>Upload Hero Images</strong>
                      <small>JPG, JPEG, PNG, WEBP</small>
                    </label>
                  </div>

                  <div className="ksc-admin-management-card">
                    <span className="eyebrow">02 / SERVICES</span>
                    <h3>Homepage Service Images</h3>
                    <p>
                      Manage the eight service images displayed in the main Services section.
                    </p>

                    <button
                      type="button"
                      className="ksc-admin-secondary-button"
                      onClick={() => setShowHomepageServiceImages(true)}
                    >
                      Manage Service Images →
                    </button>
                  </div>
                </div>
              </>
            )}
          </section>
        )}


        {activeSection === "services" && (
          <section className="ksc-admin-section">

            <div className="ksc-admin-section-heading">
              <div>
                <span className="eyebrow">SERVICE MANAGEMENT</span>
                <h2>Service Images</h2>
              </div>
            </div>


            <div className="ksc-admin-service-selector">

              {services.map((serviceItem) => (
                <button
                  key={serviceItem.slug}
                  className={
                    selectedService === serviceItem.slug
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedService(serviceItem.slug)
                  }
                >
                  <span>{serviceItem.number}</span>
                  {serviceItem.name}
                </button>
              ))}

            </div>


            <div className="ksc-admin-service-title">

              <span className="eyebrow">
                SELECTED SERVICE
              </span>

              <h2>
                {
                  services.find(
                    (item) =>
                      item.slug === selectedService
                  )?.name
                }
              </h2>

            </div>


            <div className="ksc-admin-management-grid">

              <div className="ksc-admin-management-card">

                <span className="eyebrow">
                  SERVICE HERO
                </span>

                <h3>Hero Images</h3>

                <p>
                  These images appear in the large hero
                  slideshow at the top of this service page.
                </p>

                <label className="ksc-admin-upload">

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                  />

                  <span>+</span>

                  <strong>
                    Upload Hero Images
                  </strong>

                  <small>
                    Multiple images supported
                  </small>

                </label>

              </div>


              <div className="ksc-admin-management-card">

                <span className="eyebrow">
                  CONSTRUCTION
                </span>

                <h3>Construction Images</h3>

                <p>
                  Upload the project and construction
                  images shown in the service detail slideshow.
                </p>

                <label className="ksc-admin-upload">

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                  />

                  <span>+</span>

                  <strong>
                    Upload Construction Images
                  </strong>

                  <small>
                    Multiple images supported
                  </small>

                </label>

              </div>


              <div className="ksc-admin-management-card">

                <span className="eyebrow">
                  EXPLORE SERVICES
                </span>

                <h3>Explore Service Image</h3>

                <p>
                  Set the image used when this service
                  appears in Explore Other Services.
                </p>

                <label className="ksc-admin-upload">

                  <input
                    type="file"
                    accept="image/*"
                  />

                  <span>+</span>

                  <strong>
                    Upload Explore Image
                  </strong>

                  <small>
                    One image
                  </small>

                </label>

              </div>

            </div>

          </section>
        )}


        {activeSection === "contact" && (
          <section className="ksc-admin-section">

            <div className="ksc-admin-section-heading">

              <div>
                <span className="eyebrow">
                  CONTACT SETTINGS
                </span>

                <h2>Get a Quote</h2>
              </div>

            </div>


            <div className="ksc-admin-contact-card">

              <span className="eyebrow">
                QUOTE EMAIL
              </span>

              <h3>
                Where should website enquiries be sent?
              </h3>

              <p>
                This email will be used by the Get a Quote
                and contact buttons across the website.
              </p>


              <div className="ksc-admin-form-field">

                <label>
                  Get a Quote Email Address
                </label>

                <input
                  type="email"
                  placeholder="sales@ksc-sa.com"
                  defaultValue="sales@ksc-sa.com"
                />

              </div>


              <button className="ksc-admin-primary-button">
                Save Email Address
              </button>

            </div>

          </section>
        )}

      </section>

    </main>
  );
}