import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Customize.css";

const Customize = () => {
  const [step, setStep] = useState(1);
  const [productType, setProductType] = useState("");
  const [options, setOptions] = useState({
    color: "",
    size: "",
    material: "",
    sleeveLength: "",
    handleColor: "",
  });
  const [customText, setCustomText] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("productType", productType);
      formData.append("color", options.color);
      formData.append("size", options.size);
      formData.append("material", options.material);
      formData.append("sleeveLength", options.sleeveLength);
      formData.append("handleColor", options.handleColor);
      formData.append("customText", customText);
      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post(
        "https://customizedpplatform-backend.onrender.com/api/customize",
        formData
      );

      alert("🎉 Order placed successfully!");
      console.log("Order Response:", res.data);
      navigate("/orders"); // Navigate to order page
    } catch (error) {
      console.error("Order Error:", error);
      alert("Something went wrong while placing the order.");
    }
  };

  return (
    <div className="customize-page elegant">
      <div className="customizable-products">
        <h3>Available Customizable Products</h3>
        <ul>
          <li>T-shirt</li>
          <li>Mug</li>
          <li>Phone Case</li>
          <li>Hoodie</li>
          <li>Cap</li>
          <li>Tote Bag</li>
        </ul>
      </div>

      <div className="customize-card">
        <h2>🎨 Customize Your Product</h2>
        <p className="instructions">
          Let's craft your perfect design in just 5 steps!
        </p>

        {step === 1 && (
          <div className="step fade-in">
            <h3>Step 1: Pick Your Product</h3>
            <div className="options">
              {[
                "T-shirt",
                "Mug",
                "Phone Case",
                "Hoodie",
                "Cap",
                "Tote Bag",
              ].map((type) => (
                <button
                  key={type}
                  className={`option-btn ${
                    productType === type ? "selected" : ""
                  }`}
                  onClick={() => setProductType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step fade-in">
            <h3>Step 2: Customize Look</h3>
            <input
              type="text"
              placeholder="Color (e.g., Black, Red)"
              value={options.color}
              onChange={(e) =>
                setOptions({ ...options, color: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Size (e.g., M, L, XL)"
              value={options.size}
              onChange={(e) => setOptions({ ...options, size: e.target.value })}
            />
            <input
              type="text"
              placeholder="Material (e.g., Cotton, Ceramic)"
              value={options.material}
              onChange={(e) =>
                setOptions({ ...options, material: e.target.value })
              }
            />

            {["T-shirt", "Hoodie"].includes(productType) && (
              <input
                type="text"
                placeholder="Sleeve Length (e.g., Short, Long)"
                value={options.sleeveLength}
                onChange={(e) =>
                  setOptions({ ...options, sleeveLength: e.target.value })
                }
              />
            )}

            {productType === "Mug" && (
              <input
                type="text"
                placeholder="Handle Color"
                value={options.handleColor}
                onChange={(e) =>
                  setOptions({ ...options, handleColor: e.target.value })
                }
              />
            )}
          </div>
        )}

        {step === 3 && (
          <div className="step fade-in">
            <h3>Step 3: Add Your Text</h3>
            <input
              type="text"
              placeholder="Add your name, quote or message"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="step fade-in">
            <h3>Step 4: Upload Image</h3>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="preview-image elegant-preview"
              />
            )}
          </div>
        )}

        {step === 5 && (
          <div className="step fade-in">
            <h3>Step 5: Final Preview & Order</h3>
            <div className="preview-box elegant-preview">
              <p>
                <strong>Product:</strong> {productType}
              </p>
              <p>
                <strong>Color:</strong> {options.color}
              </p>
              <p>
                <strong>Size:</strong> {options.size}
              </p>
              <p>
                <strong>Material:</strong> {options.material}
              </p>
              {options.sleeveLength && (
                <p>
                  <strong>Sleeve Length:</strong> {options.sleeveLength}
                </p>
              )}
              {options.handleColor && (
                <p>
                  <strong>Handle Color:</strong> {options.handleColor}
                </p>
              )}
              <p>
                <strong>Custom Text:</strong> {customText}
              </p>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Final Preview"
                  className="preview-image"
                />
              )}
            </div>
            <button className="order-btn" onClick={handleSubmit}>
              Place Order
            </button>
          </div>
        )}

        <div className="navigation-buttons">
          {step > 1 && (
            <button onClick={handleBack} className="nav-btn">
              Back
            </button>
          )}
          {step < 5 && (
            <button onClick={handleNext} className="nav-btn">
              Next
            </button>
          )}
        </div>
      </div>

      <div className="live-summary">
        <h4>Live Summary</h4>
        <p>
          <strong>Product:</strong> {productType}
        </p>
        <p>
          <strong>Color:</strong> {options.color}
        </p>
        <p>
          <strong>Size:</strong> {options.size}
        </p>
        <p>
          <strong>Material:</strong> {options.material}
        </p>
        {options.sleeveLength && (
          <p>
            <strong>Sleeve:</strong> {options.sleeveLength}
          </p>
        )}
        {options.handleColor && (
          <p>
            <strong>Handle:</strong> {options.handleColor}
          </p>
        )}
        <p>
          <strong>Text:</strong> {customText}
        </p>
      </div>
    </div>
  );
};

export default Customize;
