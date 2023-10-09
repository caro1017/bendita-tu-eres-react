import ImgHome from "../../components/Images/ImgHome";
import Title from "../../components/Title/Title";
import { Buttons } from "../../components/Button/Buttons";

import { useNavigate } from "react-router";

import "./homePage.css";
import { Images } from "../../components/Images/Images";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ropa");
  };

  return (
    <>
      <div className="containerStyled">
        <div className="contentStyled container">
          <div className="contentTitle">
            <Title title="Belleza" className="textStyled" />
            <Title title="Estilo" className="textStyledCenter" />
            <Title title="Detalle" className="textStyled" />
          </div>

          <div className="contentButton">
            <Buttons onClick={handleClick} text="Comprar" />
          </div>

          <div className="contentIcon">
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
        </div>
        
        <ImgHome
          srcEscritorio={Images.homeDest}
          srcTablet={Images.homeTablet}
          srcMovil= {Images.homeMovil}
        />
      </div>
    </>
  );
};

export default HomePage;
