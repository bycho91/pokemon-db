import React from "react";
import "./Navbar.scss";
import { SiPokemon } from "react-icons/si";
import { FcSearch } from "react-icons/fc";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container section-padding">
      <div className="logo">
        <Link to="/">
          <SiPokemon size="8rem" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="search pokemon..." />
        <FcSearch id="search-icon" size="2rem" />
      </div>
    </div>
  );
};

export default Navbar;
