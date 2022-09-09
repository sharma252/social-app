import React from "react";

export const CartContext = React.createContext({
  isCartOpen: false,
  setCartOpen: () => {},
});

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
