import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiBaseUrl = "https://customizedpplatform-backend.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${apiBaseUrl}/api/login`, {
        email,
        password,
      });

      console.log("API Response:", response.data);

      // Check for successful login message
      if (response.data.message === "Login successful") {
        localStorage.setItem("userAuthenticated", "true");
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));

        // Trigger storage event for other tabs/windows
        window.dispatchEvent(new Event("storage"));

        // Navigate to home page
        navigate("/");
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />

        <div className="options">
          <label>
            <input type="checkbox" disabled={isLoading} /> Remember me
          </label>
          <a href="/forgot-password" className="forgot-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
