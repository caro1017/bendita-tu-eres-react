import "./imgHome.css"

// eslint-disable-next-line react/prop-types
const ImgHome = ({srcEscritorio, srcTablet, srcMovil}) => {
  return (
    <>
      <div>
        {/* Imagen para escritorio */}
        <img
          src={srcEscritorio}
          alt="img_desktop"
          className="desktop-image right materialboxed imageStyle"
        />

        {/* Imagen para tablet */}
        <img
          src={srcTablet}
          alt="img_tablet"
          className="tablet-image right materialboxed imageStyle"
        />

        {/* Imagen para móvil */}
        <img
          src={srcMovil}
          alt="img_mobile"
          className="mobile-image right materialboxed imageStyle"
        />
      </div>
    </>
  );
};

export default ImgHome;
