import React from "react";
import "./product-card.style.scss";
import Button from "../button/button";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} className="img" alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
}
