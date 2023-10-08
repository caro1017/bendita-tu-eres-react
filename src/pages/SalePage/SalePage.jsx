import { useState } from "react";
import { useCart } from "../../components/CartContext/CartContext";
import { Images } from "../../components/Images/Images";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Card/Cards";
import Footer from "../../components/Footer/Footer";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

import { cardDataSale } from "../../data/data";

const SalePage = () => {
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
      <Header src={Images.headerSale} title="saldos" />

      <main>
        <div className="style-searchBar">
          <SearchBar onCategoryChange={handleCategoryChange} />
        </div>

        <div className="row container container-card">
          {cardDataSale
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
            cardDataSale.filter((card) => card.category === selectedCategory)
              .length === 0 && (
              <div className="container">
                <img src={Images.error} />
              </div>
            )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SalePage;
