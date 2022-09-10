import React from "react";
import "./product-card.style.scss";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = React.useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} className="img" alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
}
