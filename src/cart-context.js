import { useState, useContext, createContext } from "react";

const defaultValue = { items: 10, logger: () => console.log("carting") };
const CartContext = createContext(defaultValue);

let CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((cartCount) => cartCount + 1);
  }

  return (
    //This value will override defaultValue
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

let useCart = () => useContext(CartContext);

export { useCart, CartProvider };
