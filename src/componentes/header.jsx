import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Cierra el menú en dispositivos móviles
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              FLcode
            </a>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
              aria-expanded={isOpen}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => scrollToSection("inicio")}
                    style={{ cursor: "pointer" }}
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => scrollToSection("habilidades")}
                    style={{ cursor: "pointer" }}
                  >
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => scrollToSection("proyectos")}
                    style={{ cursor: "pointer" }}
                  >
                    Proyectos
                  </a>
                </li>
              </ul>

              <div className="d-flex social-icons ms-lg-3">
                {["github", "linkedin", "twitter"].map((icon, index) => (
                  <a href="#" className="social-icon mx-2" key={index}>
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="header-spacer"></div>
    </>
  );
};

export default Header;
