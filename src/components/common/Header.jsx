import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const userStatus = localStorage.getItem("userAuthenticated");
      setIsAuthenticated(userStatus === "true");
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🛍️ Designify</Link>
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <div className="nav-right">
        {isAuthenticated ? (
          <Link className="nav-button" to="/profile">
            Profile
          </Link>
        ) : (
          <Link className="nav-button" to="/register">
            Register
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
