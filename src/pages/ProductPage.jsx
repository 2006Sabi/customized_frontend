import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (!cartItems.find((item) => item._id === product._id)) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, product])
      );
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };

  if (id) {
    const product = products.find((p) => p._id === id);

    if (!product) {
      return (
        <div className="product-page">
          <h2>Product Not Found</h2>
        </div>
      );
    }

    return (
      <div className="product-detail">
        <div className="product-detail-image">
          {/* Assuming you'll have an image field in your product model */}
          {/* <img src={product.image} alt={product.name} /> */}
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-rating">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </div>
          <p className="price">Rs: {product.price}</p>
          <div className="product-sizes">
            {product.sizes.map((size) => (
              <span key={size} className="size-tag">
                {size}
              </span>
            ))}
          </div>
          <div className="button-group">
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/checkout" className="buy-button">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <div key={product._id} className="product-card">
            {/* <img src={product.image} alt={product.name} className="product-img" /> */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-rating">
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </div>
            <p className="price">Rs: {product.price}</p>
            <div className="product-sizes">
              {product.sizes.map((size) => (
                <span key={size} className="size-tag">
                  {size}
                </span>
              ))}
            </div>
            <div className="button-group">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <Link to="/checkout" className="buy-button">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
