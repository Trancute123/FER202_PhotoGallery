import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #FF512F, #DD2476)", // Cam sang hồng tím
        padding: "15px 30px",
        display: "flex",
        gap: "20px",
        borderBottom: "4px solid #bb1c5a",
        borderRadius: "0 0 15px 15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <NavLink
        to="/gallery"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#f0f0f0",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px",
          padding: "5px 10px",
          borderRadius: "6px",
          backgroundColor: isActive ? "#bb1c5a" : "transparent",
          transition: "all 0.3s ease",
        })}
      >
        Gallery
      </NavLink>

      <NavLink
        to="/filter"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#f0f0f0",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px",
          padding: "5px 10px",
          borderRadius: "6px",
          backgroundColor: isActive ? "#bb1c5a" : "transparent",
          transition: "all 0.3s ease",
        })}
      >
        Filter
      </NavLink>

      <NavLink
        to="/favorites"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#f0f0f0",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px",
          padding: "5px 10px",
          borderRadius: "6px",
          backgroundColor: isActive ? "#bb1c5a" : "transparent",
          transition: "all 0.3s ease",
        })}
      >
        Favorites
      </NavLink>
    </div>
  );
};

export default Header;
