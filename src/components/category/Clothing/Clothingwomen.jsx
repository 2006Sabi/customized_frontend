import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClothingWomen.css";

import dress1 from "./images/women/women-dress-1.jpg";
import dress2 from "./images/women/women-dress-2.jpg";
import dress3 from "./images/women/women-dress-3.jpg";
import dress4 from "./images/women/women-dress-4.jpg";
import dress5 from "./images/women/women-dress-5.jpg";
import dress6 from "./images/women/women-dress-6.jpg";
import dress7 from "./images/women/women-dress-7.jpg";
import dress8 from "./images/women/women-dress-8.jpg";

const allDresses = [
  {
    id: 1,
    name: "Elegant Frock",
    price: "Rs: 400",
    image: dress1,
    category: "frocks",
  },
  {
    id: 2,
    name: "Cute Top",
    price: "Rs: 350",
    image: dress2,
    category: "frocks",
  },
  {
    id: 3,
    name: "Black Heart Top",
    price: "Rs: 450",
    image: dress3,
    category: "tops",
  },
  { id: 4, name: "Tops", price: "Rs: 500", image: dress4, category: "tops" },
  {
    id: 5,
    name: "Formal Wear",
    price: "Rs: 800",
    image: dress5,
    category: "shirts",
  },
  {
    id: 6,
    name: "Formals",
    price: "Rs: 600",
    image: dress6,
    category: "shirts",
  },
  {
    id: 7,
    name: "Formals",
    price: "Rs: 500",
    image: dress7,
    category: "shirts",
  },
  {
    id: 8,
    name: "Shirt with Pant",
    price: "Rs: 250",
    image: dress8,
    category: "shirts",
  },
];

const ClothingWomen = () => {
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
    <div className="clothing-women-page">
      <h2>Women's Collection</h2>

      <div className="women-navbar">
        {["all", "tops", "frocks", "shirts"].map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="women-grid">
        {filteredDresses.map((dress) => (
          <div className="women-card" key={dress.id}>
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

export default ClothingWomen;
