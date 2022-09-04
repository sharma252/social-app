import React from "react";
import SignInComp from "../signInComp/signInComp";
import SignUpForm from "../signUpComp/signUpComp";
import "./authentication.style.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInComp />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
