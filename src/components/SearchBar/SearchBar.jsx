import { useEffect, useState } from "react";
import { Buttons } from "../Button/Buttons";
import "./searchBar.css";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onCategoryChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Inicializa el elemento select de Materialize
    const selectElement = document.querySelector("select");
    window.M.FormSelect.init(selectElement);
  }, []);

  const handleSelectChange = (e) => {
    // Actualiza el estado con la opción seleccionada
    setSelectedOption(e.target.value);
  };

  const handleSearchClick = () => {
    // Llama a la función proporcionada desde ClothingPage con la opción seleccionada
    onCategoryChange(selectedOption);
  };

  return (
    <>
      <div className="container">
        <div className="input-field container style-select">
          <select
            className="custom-select"
            defaultValue=""
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Buscar Categoria
            </option>
            <option value="vestido">Vestido</option>
            <option value="pantalon">Pantalon</option>
            <option value="blusas">Blusas</option>
            <option value="cropTop">Crop Top</option>
            <option value="bikini">Bikini</option>
          </select>

          <div className="custom-select-icon">
            <Buttons icon="search" onClick={handleSearchClick}></Buttons>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
