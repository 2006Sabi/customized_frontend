import React, { useState } from "react";
import "./AddNewAddress.css";

const AddNewAddress = ({ onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    houseNo: "",
    roadName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field.trim() === "")) {
      alert("Please fill in all the fields!");
      return;
    }
    onSave(formData); // Send formData to AddressesPage
    setFormData({
      name: "",
      mobile: "",
      pincode: "",
      state: "",
      city: "",
      houseNo: "",
      roadName: "",
    });
    alert("Address Saved Successfully!");
  };

  return (
    <div className="address-form-container">
      <h2>Add New Address</h2>
      <form className="address-form" onSubmit={handleSave}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="houseNo"
          placeholder="House No. / Building Name"
          value={formData.houseNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="roadName"
          placeholder="Road Name, Area, Colony"
          value={formData.roadName}
          onChange={handleChange}
        />

        <button type="submit">Save Address</button>
      </form>
    </div>
  );
};

export default AddNewAddress;
