import React from "react";
import "./OrderHistory.css";
import blackTshirt from "./blacktshirt.jpg"; 
import mug from "./mug.jpg";
function OrderHistory() {
  const orders = [
    {
      id: "001",
      item: "Black T-shirt",
      status: "Delivered",
      image: blackTshirt,
      details: "Soft cotton T-shirt with customizable print",
    },
    {
      id: "002",
      item: "Mug with Name",
      status: "Shipped",
      image: mug, // Still from public/images
      details: "White ceramic mug with custom name print",
    },
  ];

  return (
    <div className="order-history">
      <h2>Your Orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <img src={order.image} alt={order.item} className="order-image" />
            <div className="order-info">
              <h4>{order.item}</h4>
              <p>{order.details}</p>
              <span className="order-status">{order.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;
