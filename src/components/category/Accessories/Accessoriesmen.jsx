import React, { useState } from "react";
import "./AccessoriesMen.css";

// Sample images
import product1 from "./images/men/men-accessory-1.jpg";
import product2 from "./images/men/men-accessory-2.jpg";
import product3 from "./images/men/men-accessory-3.jpg";
import product4 from "./images/men/men-accessory-4.jpg";
import product5 from "./images/men/men-accessory-5.jpg";
import product6 from "./images/men/men-accessory-6.jpg";

const products = [
  {
    id: 1,
    name: "Leather Wallet",
    price: "Rs: 850",
    image: product1,
    category: "Wallets & Belts",
  },
  {
    id: 2,
    name: "Formal Watch",
    price: "Rs: 1500",
    image: product2,
    category: "Watches",
  },
  {
    id: 3,
    name: "Sunglasses",
    price: "Rs: 700",
    image: product3,
    category: "Sunglasses & Eyewear",
  },
  {
    id: 4,
    name: "Cufflink Set",
    price: "Rs: 450",
    image: product4,
    category: "Cufflinks & Tie Pins",
  },
  {
    id: 5,
    name: "Classic Cap",
    price: "Rs: 300",
    image: product5,
    category: "Hats & Caps",
  },
  {
    id: 6,
    name: "Gym Gloves",
    price: "Rs: 600",
    image: product6,
    category: "Fitness Accessories",
  },
];

const categories = [
  "All",
  "Wallets & Belts",
  "Watches",
  "Sunglasses & Eyewear",
  "Cufflinks & Tie Pins",
  "Hats & Caps",
  "Fitness Accessories",
];

const AccessoriesMen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check for duplicates
    const alreadyExists = existingCart.some((item) => item.id === product.id);

    if (alreadyExists) {
      alert(`${product.name} is already in your cart!`);
      return;
    }

    const updatedCart = [...existingCart, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="accessories-men-container">
      <h2>Men's Accessories</h2>

      <div className="men-navbar">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`men-nav-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <input
          className="men-search"
          type="text"
          placeholder="Search accessories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="men-grid">
        {filteredProducts.map((item) => (
          <div className="men-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p className="accessory-category">{item.category}</p>

            <div className="button-group">
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button className="buy-now">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesMen;
