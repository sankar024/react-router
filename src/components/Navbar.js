import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {
  const navLinkStyles = (isActive) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const auth = useAuth()
  console.log(auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link to="/" className="navbar-brand">
        React Router
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink style={navLinkStyles} className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={navLinkStyles} className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={navLinkStyles} className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          {auth.user && (<li className="nav-item">
            <NavLink style={navLinkStyles} className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>)}
          
          {!auth.user && ( <li className="nav-item">
            <NavLink style={navLinkStyles} className="nav-link" to="/login">
              Login
            </NavLink>
          </li>)}
        </ul>
      </div>
    </nav>
  );
};
