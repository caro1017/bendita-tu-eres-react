import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <CartContext.Provider
      value={{ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}