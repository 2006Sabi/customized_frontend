import React from "react";
import "./Wishlist.css";
import image1 from "./wishlist1.jpg";
import image2 from "./wishlist2.jpg";

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "Custom Poster",
      image: image1,
      details: "Customized poster with unique design",
    },
    {
      id: 2,
      name: "Engraved Keychain",
      image: image2,
      details: "Stainless steel keychain with engraved name",
    },
  ];

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <ul className="wishlist-list">
        {wishlistItems.map((item) => (
          <li key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} className="wishlist-image" />
            <div className="wishlist-info">
              <h4>{item.name}</h4>
              <p>{item.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
