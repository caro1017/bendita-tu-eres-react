/* eslint-disable react/prop-types */
import "./card.css";

const Cards = ({
  product,
  title,
  price,
  urlImg,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    // Si en todos los producto se encuentra un item igual al producto sumar 1
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    // Sumar total de productos
    setTotal(total + product.price * product.quantity);
    // contador de productos
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  
  return (
    <>
      <div className="container col">
        <div className="container col s12 m2">
          <div className="card">
            <div className="card-image materialboxed">
              <img src={urlImg} />

              <button
                className="btn-floating halfway-fab waves-effect card-icon pulse"
                onClick={() => onAddProduct(product)}
              >
                <i className="material-icons">local_grocery_store</i>
              </button>
            </div>

            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>${price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
