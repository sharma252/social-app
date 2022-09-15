import React from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../../contexts/cart.context";
import CheckoutItem from "../../checkout-item/checkout-item.component";

export default function CheckoutComponent() {
  const { cartItems, cartTotal } = React.useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItems={cartItem} />;
      })}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
}