import { Link } from "react-router-dom";
import "./footer.css";

const menuItemsLeft = [
  { label: "Ropa", path: "/ropa" },
  { label: "Linea Sol", path: "/lineaSol" },
];

const menuItemsRight = [
  { label: "Saldos", path: "/saldos" },
  { label: "Contactenos", path: "/contactenos" },
];

const Footer = () => {
  const renderMenuItemsLeft = () => {
    // Crear menu con un map
    return menuItemsLeft.map((item, index) => (
      <ul className="style-ul" key={index}>
        <li>
          <Link to={item.path}>{item.label}</Link>
        </li>
      </ul>
    ));
  };

  const renderMenuItemsRight = () => {
    // Crear menu con un map
    return menuItemsRight.map((item, index) => (
      <ul className="style-ul" key={index}>
        <li>
          <Link to={item.path}>{item.label}</Link>
        </li>
      </ul>
    ));
  };

  return (
    <>
      <div className="container">
        <div className="container row container-nav">
          <div className="left">{renderMenuItemsLeft()}</div>
          <img
            className="style_logo_footer"
            src="../../../public/logo/LogoBendita.svg"
            alt="logo"
          />
          <div className="right">{renderMenuItemsRight()}</div>
        </div>

        <div className="content-icon-footer">
          <a href="https://api.whatsapp.com/send?phone=0573173720435&text=Hola, Nececito mas informacion!">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/benditatueres_tienda_/?hl=es">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://goo.gl/maps/13jjnRnEhysNhwiL8">
            <i className="bx bx-map"></i>
          </a>
        </div>

        <div className="container container-autor">
          <a href="https://github.com/caro1017">
            <p>
              Copyright © 2022 by <span>Carolina Uribe Botero</span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
