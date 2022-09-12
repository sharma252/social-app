import "./cart-dropdown.scss";
import Button from "../button/button";
import React from "react";
import CartItem from "../cart-item/cart-item-component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router";

export default function CartDropdown() {
  const { cartItems } = React.useContext(CartContext);
  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
      </div>
      <Button onClick={gotToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
}
