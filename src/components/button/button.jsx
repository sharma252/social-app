import React from "react";
import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  goggle: "google-sign-in",
  inverted: "inverted",
};

export default function button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
