import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import "../routes/navigation.scss";

function Navigation() {
  return (
    <React.Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="./">
            Shop
          </Link>
          <Link className="nav-link" to="./authentication">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default Navigation;
