import Title from "../Title/Title";
import "./header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ src, title }) => {
  return (
    <>
      <div className="container-header">
        <img src={src} className="styleImg" />
        <Title title={title} className="styleTitle" />
      </div>
    </>
  );
};

export default Header;
