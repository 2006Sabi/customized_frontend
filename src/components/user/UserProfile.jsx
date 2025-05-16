import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {   
      const storedUser = JSON.parse(localStorage.getItem("userInfo"));

      if (storedUser?._id) {
        try {
          const response = await axios.get(
            `https://customizedpplatform-backend.onrender.com/api/user/${storedUser._id}`
          );
          if (response.data?.success) {
            setUserInfo(response.data.user);
          } else {
            console.warn("⚠️ Failed to fetch user:", response.data.message);
            navigate("/login");
          }
        } catch (error) {
          console.error("❌ Error fetching user profile:", error);
          navigate("/login");
        }
      } else {
        console.warn("⚠️ No user info in localStorage.");
        navigate("/login");
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userAuthenticated");
    localStorage.removeItem("userInfo");
    navigate("/login");
    window.dispatchEvent(new Event("storage"));
  };

  // Show loading or prevent unauthorized access
  if (!userInfo) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <aside className="profile-sidebar">
        <ul>
          <li className="active">My Profile</li>
          <li onClick={() => navigate("/orders")}>Orders</li>
          <li onClick={() => navigate("/cart")}>Cart</li>
          <li onClick={() => navigate("/addresses")}>Addresses</li>
          <li onClick={() => navigate("/wishlist")}>Wishlist</li>
          <li onClick={handleLogout} style={{ color: "red" }}>
            Logout
          </li>
        </ul>
      </aside>

      <main className="profile-content">
        <h2>Personal Information</h2>
        <div className="profile-section">
          <div className="profile-row">
            <label>Name:</label>
            <span>{userInfo.name}</span>
          </div>
          <div className="profile-row">
            <label>Email:</label>
            <span>{userInfo.email}</span>
          </div>
          <div className="profile-row">
            <label>Phone:</label>
            <span>{userInfo.phone}</span>
          </div>
          <div className="profile-row">
            <label>Address:</label>
            <span>{userInfo.address}</span>
          </div>
        </div>
        <button className="edit-btn" onClick={() => navigate("/profile/edit")}>
          Edit Profile
        </button>
      </main>
    </div>
  );
};

export default UserProfile;
