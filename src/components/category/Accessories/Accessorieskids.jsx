import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccessoriesKids.css";

// Sample product images
import product1 from "./images/kids/kids-accessory-1.jpg";
import product2 from "./images/kids/kids-accessory-2.jpg";
import product3 from "./images/kids/kids-accessory-3.jpg";
import product4 from "./images/kids/kids-accessory-4.jpg";
import product5 from "./images/kids/kids-accessory-5.jpg";
import product6 from "./images/kids/kids-accessory-6.jpg";

const products = [
  {
    id: 1,
    name: "Colorful Cap",
    price: "Rs: 300",
    image: product1,
    category: "Clothing Accessories",
  },
  {
    id: 2,
    name: "Toy Wrist Watch",
    price: "Rs: 450",
    image: product2,
    category: "Fashion Accessories",
  },
  {
    id: 3,
    name: "Mini Backpack",
    price: "Rs: 600",
    image: product3,
    category: "Bags & Wallets",
  },
  {
    id: 4,
    name: "Cartoon Socks",
    price: "Rs: 150",
    image: product4,
    category: "Clothing Accessories",
  },
  {
    id: 5,
    name: "Rainy Sandals",
    price: "Rs: 550",
    image: product5,
    category: "Footwear",
  },
  {
    id: 6,
    name: "Hair Clip Set",
    price: "Rs: 200",
    image: product6,
    category: "Hair Accessories",
  },
];

const categories = [
  "All",
  "Fashion Accessories",
  "Bags & Wallets",
  "Clothing Accessories",
  "Footwear",
  "Hair Accessories",
];

const AccessoriesKids = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    // Fetch existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new product
    const updatedCart = [...existingCart, product];

    // Save back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="accessories-kids-container">
      <h2>Kids' Accessories</h2>

      <div className="kids-navbar">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`accessories-nav-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}

        <input
          className="accessories-search"
          type="text"
          placeholder="Search accessories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="accessories-grid">
        {filteredProducts.map((item) => (
          <div className="accessories-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="accessory-category">{item.category}</p>
            <div className="button-group">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <Link to="/order" className="buy-button">
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesKids;
