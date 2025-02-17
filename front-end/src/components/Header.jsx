import React from "react";
import logoac from "../assets/logo/ac-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoac} alt="Logo da AC Sounds" />
      </Link>

      <Link to="/" className="header__link">
        <h1>AC Sounds</h1>
      </Link>
    </div>
  );
};

export default Header;
