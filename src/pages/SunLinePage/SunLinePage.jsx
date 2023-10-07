import { useState } from "react";
import { useCart } from "../../components/CartContext/CartContext";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Card/Cards";
import Footer from "../../components/Footer/Footer";

import { cardDataSunLine } from "../../data/data";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";


const SunLinePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts } = useCart();

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <ShoppingCart
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Header src="../../../public/header/imgLineaSol.png" title="bikini" />

      <main>
        <div className="style-searchBar">
          <SearchBar onCategoryChange={handleCategoryChange} />
        </div>
        
        <div className="row container container-card">
          {cardDataSunLine
            .filter(
              (card) =>
                selectedCategory === "" || card.category === selectedCategory
            )
            .map((card, index) => (
              <div className="col-card" key={index}>
                <Cards
                  product={card}
                  title={card.title}
                  price={card.price}
                  urlImg={card.imageUrl}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              </div>
            ))}
          {selectedCategory !== "" &&
            cardDataSunLine.filter((card) => card.category === selectedCategory)
              .length === 0 && (
              <div className="container">
                <img src="../../../public/error/Error2.svg" />
              </div>
            )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SunLinePage;
