import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((acc, item) => {
    // Remove "Rs:" if it exists and convert price to number
    const numericPrice = parseFloat(item.price.replace("Rs:", "").trim());
    return acc + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>
                    {item.details || item.category || "No details available"}
                  </p>
                  <span className="cart-price">{item.price}</span>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: Rs {total}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
