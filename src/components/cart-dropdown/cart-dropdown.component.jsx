import "./cart-dropdown.scss";
import Button from "../button/button";
import React from "react";
import CartItem from "../cart-item/cart-item-component";
import { CartContext } from "../../contexts/cart.context";

export default function CartDropdown() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
}
