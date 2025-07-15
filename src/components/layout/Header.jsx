import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Gallery</NavLink> |{" "}
        <NavLink to="/filter">Filter</NavLink> |{" "}
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
}
