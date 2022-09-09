import "./cart-dropdown.scss";
import Button from "../button/button";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go To Checkout</Button>
    </div>
  );
}
