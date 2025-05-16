import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li className="dropdown">
          <span>Clothing</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/category/clothing/men">Men</Link>
            </li>
            <li>
              <Link to="/category/clothing/women">Women</Link>
            </li>
            <li>
              <Link to="/category/clothing/kids">Kids</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Accessories</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/category/accessories/men">Men</Link>
            </li>
            <li>
              <Link to="/category/accessories/women">Women</Link>
            </li>
            <li>
              <Link to="/category/accessories/kids">Kids</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/category/customize">Customize</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
