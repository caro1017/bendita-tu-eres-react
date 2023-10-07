import { BrowserRouter as Router } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { CartProvider } from "./components/CartContext/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Menu />
      </CartProvider>
    </Router>
  );
}

export default App;
