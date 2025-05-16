import React, { useState } from "react";
import { Link } from "react-router-dom"; // For "Buy" button
import "./Clothingkids.css";

// Import images
import kids1 from "./images/kids/kids-dress-1.jpg";
import kids2 from "./images/kids/kids-dress-2.jpg";
import kids3 from "./images/kids/kids-dress-3.jpg";
import kids4 from "./images/kids/kids-dress-4.jpg";
import kids5 from "./images/kids/kids-dress-5.jpg";
import kids6 from "./images/kids/kids-dress-6.jpg";
import kids7 from "./images/kids/kids-dress-7.jpg";
import kids8 from "./images/kids/kids-dress-8.jpg";

const kidsDresses = [
  {
    id: 1,
    name: "T-Shirt & Shorts",
    price: "Rs: 300",
    image: kids1,
    category: "tshirts",
  },
  {
    id: 2,
    name: "Frock with Bow",
    price: "Rs: 500",
    image: kids2,
    category: "frocks",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: "Rs: 599",
    image: kids3,
    category: "jeans",
  },
  {
    id: 4,
    name: "Ethnic Kurta Set",
    price: "Rs: 699",
    image: kids4,
    category: "ethnic",
  },
  {
    id: 5,
    name: "Printed T-Shirt",
    price: "Rs: 899",
    image: kids5,
    category: "tshirts",
  },
  {
    id: 6,
    name: "Party Frock",
    price: "Rs: 1299",
    image: kids6,
    category: "frocks",
  },
  {
    id: 7,
    name: "Casual Jeans",
    price: "Rs: 988",
    image: kids7,
    category: "jeans",
  },
  {
    id: 8,
    name: "Festive Wear",
    price: "Rs: 1500",
    image: kids8,
    category: "ethnic",
  },
];

const ClothingKids = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDresses = kidsDresses.filter((dress) => {
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
    <div className="clothing-kids-page">
      <h2>Kids' Collection</h2>

      <div className="kids-navbar">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("tshirts")}>T-Shirts</button>
        <button onClick={() => setSelectedCategory("frocks")}>Frocks</button>
        <button onClick={() => setSelectedCategory("jeans")}>Jeans</button>
        <button onClick={() => setSelectedCategory("ethnic")}>
          Ethnic Wear
        </button>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <div className="kids-grid">
        {filteredDresses.map((dress) => (
          <div className="kids-card" key={dress.id}>
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

export default ClothingKids;
