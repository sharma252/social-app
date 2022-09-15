import Button from "../button/button";
import React from "react";
import CartItem from "../cart-item/cart-item-component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.jsx";

export default function CartDropdown() {
  const { cartItems } = React.useContext(CartContext);
  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
}
