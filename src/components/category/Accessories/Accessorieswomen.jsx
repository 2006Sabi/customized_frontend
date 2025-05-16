import React, { useState } from "react";
import "./AccessoriesWomen.css";

// Sample images (make sure these exist in the correct path)
import product1 from "./images/women/women-asscessory-1.jpg";
import product2 from "./images/women/women-asscessory-2.jpg";
import product3 from "./images/women/women-asscessory-3.jpg";
import product4 from "./images/women/women-asscessory-4.jpg";
import product5 from "./images/women/women-asscessory-5.jpg";
import product6 from "./images/women/women-asscessory-6.jpg";

const products = [
  {
    id: 1,
    name: "Makeup Kit",
    price: "Rs: 1200",
    image: product1,
    category: "Beauty & Makeup Accessories",
  },
  {
    id: 2,
    name: "Necklace Set",
    price: "Rs: 900",
    image: product2,
    category: "Fashion Accessories",
  },
  {
    id: 3,
    name: "Mini Handbag",
    price: "Rs: 1100",
    image: product3,
    category: "Handbags & Wallets",
  },
  {
    id: 4,
    name: "Winter Scarf",
    price: "Rs: 550",
    image: product4,
    category: "Clothing Accessories",
  },
  {
    id: 5,
    name: "Stylish Heels",
    price: "Rs: 1800",
    image: product5,
    category: "Footwear",
  },
  {
    id: 6,
    name: "Hair Clip Set",
    price: "Rs: 250",
    image: product6,
    category: "Hair Accessories",
  },
];

const categories = [
  "All",
  "Beauty & Makeup Accessories",
  "Fashion Accessories",
  "Handbags & Wallets",
  "Clothing Accessories",
  "Footwear",
  "Hair Accessories",
];

const AccessoriesWomen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
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
    <div className="accessories-women-container">
      <h2>Women's Accessories</h2>

      <div className="accessories-navbar">
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="accessories-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="accessories-card" key={item.id}>
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
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AccessoriesWomen;