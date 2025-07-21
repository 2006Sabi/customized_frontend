import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import tshirt from "./tshirt.jpg";
import mug from "./mug.jpg";
import notebook from "./notebook.jpg";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart && savedCart.length > 0) {
      setCartItems(savedCart);
    } else {
      const mockCartItems = [
        {
          id: 1,
          name: "Custom T-Shirt",
          price: "Rs: 799",
          image: tshirt,
          details: "High-quality custom printed t-shirt.",
        },
        {
          id: 2,
          name: "Personalized Mug",
          price: "Rs: 499",
          image: mug,
          details: "A perfect gift for your loved ones.",
        },
        {
          id: 3,
          name: "Designer Notebook",
          price: "Rs: 349",
          image: notebook,
          details: "A notebook with a custom cover design.",
        },
      ];
      setCartItems(mockCartItems);
    }
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/Rs:|,/g, "").trim());
    return acc + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <Link to={`/product/${item.id}`} className="cart-item-link">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                </Link>
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: Rs {total.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
