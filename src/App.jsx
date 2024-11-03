import React from "react";
import "./estilos/style.css";
import Header from "./componentes/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./componentes/body";
import Footer from "./componentes/footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
