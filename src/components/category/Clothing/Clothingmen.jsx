import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClothingMen.css";

import dress1 from "./images/men/men-dress-1.jpg";
import dress2 from "./images/men/men-dress-2.jpg";
import dress3 from "./images/men/men-dress-3.jpg";
import dress4 from "./images/men/men-dress-4.jpg";
import dress5 from "./images/men/men-dress-5.jpg";
import dress6 from "./images/men/men-dress-6.jpg";
import dress7 from "./images/men/men-dress-7.jpg";
import dress8 from "./images/men/men-dress-8.jpg";

const allDresses = [
  {
    id: 1,
    name: "Casual Shirt",
    price: "$30",
    image: dress1,
    category: "shirts",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: "$31",
    image: dress2,
    category: "shirts",
  },
  { id: 3, name: "Jeans Pant", price: "$32", image: dress3, category: "pants" },
  {
    id: 4,
    name: "Chinos Pant",
    price: "$33",
    image: dress4,
    category: "pants",
  },
  {
    id: 5,
    name: "Cotton Shorts",
    price: "$34",
    image: dress5,
    category: "shorts",
  },
  {
    id: 6,
    name: "Denim Shorts",
    price: "$35",
    image: dress6,
    category: "shorts",
  },
  { id: 7, name: "Hoodie", price: "$36", image: dress7, category: "hoodies" },
  { id: 8, name: "Blazer", price: "$37", image: dress8, category: "blazers" },
];

const ClothingMen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDresses = allDresses.filter((dress) => {
    const matchCategory =
      selectedCategory === "all" || dress.category === selectedCategory;
    const matchSearch = dress.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
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
    <div className="clothing-men-page">
      <h2>Men's Collection</h2>

      <div className="men-navbar">
        {["all", "shirts", "pants", "shorts", "hoodies", "blazers"].map(
          (cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          )
        )}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="men-grid">
        {filteredDresses.map((dress) => (
          <div className="men-card" key={dress.id}>
            <img src={dress.image} alt={dress.name} />
            <h3>{dress.name}</h3>
            <p className="price">{dress.price}</p>
            <div className="button-group">
                          <button
                            className="add-to-cart"
                            onClick={() => handleAddToCart(dress)} // <-- fixed here
                          >
                            Add to Cart
                          </button>
                          <Link to="/order" className="buy-button">
                            Buy
                          </Link>{" "}
                          {/* optional: Link to buy page */}
                        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingMen;
