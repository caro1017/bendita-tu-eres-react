/* eslint-disable react/prop-types */
import "./shoppingCart.css";
import { useState } from "react";
import { Buttons } from "../Button/Buttons";

const ShoppingCart = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  // Representa carrito compra
  const [active, setActive] = useState(false);

  // Funcion para eliminar producto
  const onDeleteProduct = (product) => {
    //Filtrar el producto a eliminar
    const results = allProducts.filter((item) => item.id !== product.id);

    // Sumar total de productos
    setTotal(total - product.price * product.quantity);
    // contador de productos
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  // Funcion eliminar todo el carrito
  const onCleanCart = () => {
    setAllProducts([]);
    setCountProducts(0);
    setTotal(0);
  };

  return (
    <>
      <div className="container-cart">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          {/* Icono Carrito compra */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {/* Conteo cantidad productos */}
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        {/* Hover carrito compra */}
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts && allProducts.length ? (
            <>
              <div className="container card-product-container row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>

                    <div className="info-cart-product">
                      <img src={product.imageUrl} alt="producto" />
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">
                        {product.price}
                      </span>
                    </div>

                    <div className="container right">
                      <i
                        className="material-icons right icon-close"
                        onClick={() => onDeleteProduct(product)}
                      >
                        highlight_off
                      </i>
                    </div>
                    
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total = </h3>
                <h3 className="total-pagar">{total}</h3>
              </div>

              <div className="container-button-cart">
                <Buttons text="Vaciar carrito" onClick={onCleanCart} />
              </div>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
