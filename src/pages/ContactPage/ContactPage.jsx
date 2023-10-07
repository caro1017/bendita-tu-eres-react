import ImgHome from "../../components/Images/ImgHome";
import Title from "../../components/Title/Title";
import { Buttons } from "../../components/Button/Buttons";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <>
      <div className="containerStyled">
        <div className="contentStyled">
          <div className="contentTitle">
            <Title title="Horario de" className="textStyled" />
            <Title title="Atención" className="textStyledCenter" />
          </div>
          <div className="contact_horario">
            <Title
              title="L - S / 10:00 a.m. - 7:30 p.m"
              className="textStyledHorario"
            />
          </div>

          <div className="content_button_contact ">
            <Buttons text="Contactenos" />
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
          srcEscritorio="../../../public/header/img_home_contact.png"
          srcTablet="../../../public/header/img_tablet_contact.png"
          srcMovil="../../../public/header/img_movil_contact.png"
        />
      </div>
    </>
  );
};

export default ContactPage;
