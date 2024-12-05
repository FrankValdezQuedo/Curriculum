import React from "react";
import foto from "../imagenes/perfil.jpeg";
import foto1 from "../imagenes/1.jpg";
import foto2 from "../imagenes/fondo.jpg";
import foto3 from "../imagenes/3.jpg";

// Styles
const styles = {
  hero: {
    background: `url(${foto2})`,
    backgroundSize: "cover",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(2px)",
  },
  profile: {
    width: "200px",
    height: "200px",
    border: "4px solid rgba(255, 255, 255, 0.9)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
    position: "relative",
    zIndex: 1,
  },
  decorativeCircle: {
    position: "absolute",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    top: "-10px",
    left: "-10px",
    animation: "rotate 20s linear infinite",
  },
  textContent: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    padding: "2rem",
    backdropFilter: "blur(5px)",
    maxWidth: "800px",
    margin: "0 auto",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
  },
  buttonPrimary: {
    background: "linear-gradient(45deg, #2522ce, #4f4ddb)",
    border: "none",
    boxShadow: "0 4px 15px rgba(37, 34, 206, 0.2)",
  },
  buttonLight: {
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },
};

// Skill Card Component
const SkillCard = ({ icon, title, description }) => (
  <div className="col-md-4">
    <div className="card border-0 shadow-sm h-100 text-center p-4">
      <div className="card-body">
        <div className="display-6 text-primary mb-3">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <h3 className="h4 mb-3">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ imgSrc, title, description, link }) => (
  <div className="col-md-4">
    <div className="card border-0 shadow-sm h-100">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <a
          href={link}
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
      </div>
    </div>
  </div>
);

// Main Body Component
const Body = () => {
  const skills = [
    {
      icon: "code-slash",
      title: "Desarrollo Web",
      description:
        "Especializado en React, Java (Spring Boot), Bootstrap y tecnologías frontend modernas.",
    },
    {
      icon: "palette",
      title: "Diseño UI/UX",
      description:
        "Creación de interfaces intuitivas y experiencias de usuario excepcionales.",
    },
    {
      icon: "speedometer2",
      title: "Optimización",
      description: "Mejora del rendimiento y velocidad en aplicaciones web.",
    },
  ];

  const projects = [
    {
      imgSrc: foto1,
      title: "Pagina web para gestión de Convenios Unjfsc",
      description: "Sistema para gestionar los convenios de la Unjfsc - Huacho",
      link: "https://github.com/FrankValdezQuedo/proyecto-convenios",
    },
    {
      imgSrc: foto2,
      title: "Página de Portafolio",
      description:
        "Mi portafolio web creado con React y Bootstrap para mostrar habilidades y proyectos.",
      link: "https://github.com/FrankValdezQuedo/portfolio",
    },
    {
      imgSrc: foto2,
      title: "E-Commerce 3D",
      description:
        "Plataforma para la venta de productos impresos en 3D, desarrollada con Spring Boot.",
      link: "https://github.com/FrankValdezQuedo/ecommerce-3d",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="inicio" className="position-relative" style={styles.hero}>
        <div style={styles.overlay}></div>
        <div className="container py-5 position-relative">
          <div className="row min-vh-75 align-items-center text-center">
            <div className="col-12">
              <div className="position-relative d-inline-block mb-4">
                <div
                  className="rounded-circle overflow-hidden"
                  style={styles.profile}
                >
                  <img src={foto} alt="Profile" className="img-fluid" />
                </div>
                <div style={styles.decorativeCircle}></div>
              </div>
              <div className="text-content" style={styles.textContent}>
                <h1
                  className="display-4 fw-bold mb-3"
                  style={{ color: "#1a1a1a" }}
                >
                  Frank Developer
                </h1>
                <p className="lead mb-4" style={{ color: "#4a4a4a" }}>
                  Backend Developer & UI/UX Designer
                </p>
                <div className="d-flex justify-content-center gap-3 mb-2">
                  <button
                    className="btn btn-primary px-4 py-2"
                    style={styles.buttonPrimary}
                    onClick={() => window.open("https://wa.me/51947989632")}
                  >
                    Contactar
                  </button>
                  <button
                    className="btn btn-light px-4 py-2"
                    style={styles.buttonLight}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1fNuOAndQmYFrFprwyAxRKY5pEY6zajFW/view?usp=drive_link"
                      )
                    }
                  >
                    Descargar CV
                  </button>
                </div>
                <div className="mt-4 d-flex justify-content-center gap-3">
                  {[
                    {
                      platform: "github",
                      url: "https://github.com/FrankValdezQuedo",
                    },
                    {
                      platform: "linkedin",
                      url: "https://www.linkedin.com/in/fran-luis-valdez-quedo-a304012a7",
                    },
                    { platform: "whatsapp", url: "https://wa.me/51947989632" },
                  ].map(({ platform, url }) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={platform}
                      className="text-dark"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <i className={`bi bi-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="container py-5">
        <h2 className="text-center mb-5">Habilidades</h2>
        <div className="row g-4">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="container py-5">
        <h2 className="text-center mb-5">Proyectos Destacados</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
