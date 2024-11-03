import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Columna de Información de la Empresa */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-4 fw-bold">Sobre Nosotros</h5>
            <p className="mb-4">
              Somos una empresa dedicada al desarrollo de soluciones
              tecnológicas innovadoras para nuestros clientes.
            </p>
            <div className="d-flex gap-3 mb-4">
              <a href="#" className="text-white hover:text-primary">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="hover:scale-110 transition-transform"
                  size="lg"
                />
              </a>
              <a href="#" className="text-white hover:text-primary">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="hover:scale-110 transition-transform"
                  size="lg"
                />
              </a>
              <a href="#" className="text-white hover:text-primary">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="hover:scale-110 transition-transform"
                  size="lg"
                />
              </a>
              <a href="#" className="text-white hover:text-primary">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:scale-110 transition-transform"
                  size="lg"
                />
              </a>
            </div>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-4 fw-bold">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#inicio"
                  className="text-white text-decoration-none hover:text-primary"
                >
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#servicios"
                  className="text-white text-decoration-none hover:text-primary"
                >
                  Servicios
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#proyectos"
                  className="text-white text-decoration-none hover:text-primary"
                >
                  Proyectos
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contacto"
                  className="text-white text-decoration-none hover:text-primary"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna de Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-4 fw-bold">Contacto</h5>
            <div className="mb-3">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" />
              <span>123 Calle Principal, Ciudad, País</span>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <span>info@tuempresa.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior con copyright */}
      <div className="border-top border-secondary mt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
                reservados.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <button
                onClick={scrollToTop}
                className="btn btn-outline-light btn-sm"
                aria-label="Volver arriba"
              >
                <FontAwesomeIcon icon={faAnglesUp} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
