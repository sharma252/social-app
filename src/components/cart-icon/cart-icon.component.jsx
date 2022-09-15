import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const togglesCartOpen = () => setIsCartOpen(!isCartOpen);

  const itemQty = cartItems.reduce((acc, curQty) => acc + curQty.quantity, 0);

  return (
    <CartIconContainer onClick={togglesCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{itemQty}</ItemCount>
    </CartIconContainer>
  );
}
