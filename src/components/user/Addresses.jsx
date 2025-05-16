import React, { useState, useEffect } from "react";
import "./Addresses.css";
import AddNewAddress from "./AddNewAddress";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const storedAddresses =
      JSON.parse(localStorage.getItem("userAddresses")) || [];
    setAddresses(storedAddresses);
  }, []);

  const handleAddAddress = (newAddress) => {
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    localStorage.setItem("userAddresses", JSON.stringify(updatedAddresses));
  };

  return (
    <div className="addresses-container">
      <h2>My Addresses</h2>

      <div className="address-list">
        {addresses.length === 0 ? (
          <p>No addresses added yet.</p>
        ) : (
          addresses.map((address, index) => (
            <div key={index} className="address-card">
              <p>
                 {address.name}
              </p>
              <p>
                {address.mobile}
              </p>
              <p>
               {address.houseNo}
              </p>
              <p>
               {address.roadName}
              </p>
              <p>
               {address.city}
              </p>
              <p>
              {address.state}
              </p>
              <p>
                {address.pincode}
              </p>
            </div>
          ))
        )}
      </div>

      <AddNewAddress onSave={handleAddAddress} />
    </div>
  );
};

export default Addresses;
