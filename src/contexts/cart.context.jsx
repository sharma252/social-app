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

const removeItemToCart = (cartItem, cartItemToRemove) => {
  const isPresent = cartItem.find((item) => {
    return item.id === cartItemToRemove.id;
  });

  if (isPresent.quantity === 1) {
    return cartItem.filter((Item) => Item.id !== cartItemToRemove.id);
  } else {
    return cartItem.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((Item) => Item.id !== cartItemToClear.id);
};

export const CartContext = React.createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartitems] = React.useState([]);
  const [cartCount, setCartCount] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);

  React.useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  React.useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartitems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (product) => {
    setCartitems(removeItemToCart(cartItems, product));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartitems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
