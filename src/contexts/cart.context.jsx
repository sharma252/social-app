import React from "react";

const addCartItem = (cartItems, productToAdd) => {
  //Find if cart already contain the item
  const isPresent = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  //If yes increase the quantity of the item
  if (isPresent) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //Otherwise add the product to the cart
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = React.createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartitems] = React.useState([]);

  const addItemToCart = (product) => {
    setCartitems(addCartItem(cartItems, product));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
