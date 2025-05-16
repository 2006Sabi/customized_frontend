import React, { useState } from "react";
import { Link } from "react-router-dom"; // Added for Buy button
import "./ProductPage.css";
import tshirtImg from "./images/producttshirt.jpg";
import mugImg from "./images/productmug.jpg";
import posterImg from "./images/productposter.jpg";

function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Customized T-Shirt",
      description: "Color, text, and design of your choice!",
      price: "$25",
      image: tshirtImg,
      category: "tshirt",
    },
    {
      id: 2,
      name: "Personalized Mug",
      description: "Add your name or image to your mug.",
      price: "$15",
      image: mugImg,
      category: "mug",
    },
    {
      id: 3,
      name: "Decorative Poster",
      description: "Customize the size and artwork of your poster.",
      price: "$20",
      image: posterImg,
      category: "poster",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <h2>Explore Our Products</h2>

      <div className="product-navbar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <div className="button-group">
              <button className="add-to-cart-button">Add to Cart</button>
              <Link to="/order" className="buy-button">
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
