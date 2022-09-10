import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const togglesCartOpen = () => setIsCartOpen(!isCartOpen);

  const itemQty = cartItems.reduce((acc, curQty) => acc + curQty.quantity, 0);

  return (
    <div className="cart-icon-container" onClick={togglesCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemQty}</span>
    </div>
  );
}
