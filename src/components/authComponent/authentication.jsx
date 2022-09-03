import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase";

import SignUpForm from "../signUpComp/signUpComp";

function Authentication() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm />
    </div>
  );
}

export default Authentication;
