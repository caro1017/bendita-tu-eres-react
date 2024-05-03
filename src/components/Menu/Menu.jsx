import { useState, useEffect } from "react";

import { Link, Route, Routes } from "react-router-dom";
import ClothingPage from "../../pages/ClothingPage/ClothingPage";
import HomePage from "../../pages/HomePage/HomePage";
import SalePage from "../../pages/SalePage/SalePage";
import SunLinePage from "../../pages/SunLinePage/SunLinePage";
import ContactPage from "../../pages/ContactPage/ContactPage";

import "./Menu.css";
import { Images } from "../Images/Images";

const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "Ropa", path: "/ropa" },
  { label: "Linea Sol", path: "/lineaSol" },
  { label: "Saldos", path: "/saldos" },
  { label: "Contactenos", path: "/contactenos" },
];

export const Menu = () => {
  // Representa menu hamburguesa
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Inicializar el botón de hamburguesa
    const sideNav = document.querySelector(".sidenav");
    // eslint-disable-next-line no-undef
    M.Sidenav.init(sideNav, {});
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const renderMenuItems = () => {
    // Crear menu con un map
    return menuItems.map((item, index) => (
      <li key={index}>
        <Link to={item.path}>{item.label}</Link>
      </li>
    ));
  };

  return (
    <>
      <nav className="nav-style nav-wrapper">
        {/* Logo */}
        <Link to="/" className="brand-logo">
          <img src={Images.logo} alt="Logo" />
        </Link>
        {/* Menu hamburguesa */}
        <Link to="#" data-target="mobile-demo" className="sidenav-trigger left">
          <i className="material-icons icon-menu" onClick={handleToggle}>
            menu
          </i>
        </Link>
        {/* Contenido menu escritorio */}
        <ul id="nav-mobile" className="hide-on-med-and-down nav-link">
          {/* Li Menu */}
          {renderMenuItems()}
        </ul>
      </nav>
      {/* Contenido menu movil */}
      <ul
        className={`sidenav ${open ? "open-menu" : "close-menu"} nav-link`}
        id="mobile-demo"
      >
        {renderMenuItems()}
      </ul>
      {/* Definir rutas */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/ropa" element={<ClothingPage />} />
        <Route path="/lineaSol" element={<SunLinePage />} />
        <Route path="/saldos" element={<SalePage />} />
        <Route path="/contactenos" element={<ContactPage />} />
      </Routes>
    </>
  );
};
