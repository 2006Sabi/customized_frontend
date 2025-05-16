import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmpassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      setError("Passwords don't match!");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://customizedpplatform-backend.onrender.com/api/register/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Registration failed");

      if (data.success || data.message === "Registration successful") {
        localStorage.setItem("userAuthenticated", "true");
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
          })
        );
        navigate("/");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />

        <input
          name="phone"
          type="text"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={handleChange}
          disabled={isLoading}
        />

        <input
          name="address"
          type="text"
          placeholder="Address"
          required
          value={formData.address}
          onChange={handleChange}
          disabled={isLoading}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength="6"
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
        />

        <input
          name="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          required
          minLength="6"
          value={formData.confirmpassword}
          onChange={handleChange}
          disabled={isLoading}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
