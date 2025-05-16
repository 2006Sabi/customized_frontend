import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Common Components
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Auth Pages
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";

// User Pages
import UserProfile from "./components/user/UserProfile";
import OrderHistory from "./components/user/OrderHistory";
import Cart from "./components/user/Cart";
import Wishlist from "./components/user/Wishlist";
import Addresses from "./components/user/Addresses";

// Main Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

// Clothing Category Pages
import ClothingWomen from "./components/category/Clothing/Clothingwomen";
import ClothingMen from "./components/category/Clothing/ClothingMen";
import ClothingKids from "./components/category/Clothing/ClothingKids";

//Asscessory Category pages
import AccessoriesWomen from "./components/category/Accessories/Accessorieswomen";
import AccessoriesMen from "./components/category/Accessories/Accessoriesmen";
import AccessoriesKids from "./components/category/Accessories/Accessorieskids";

//Aboutus Category page
import Aboutus from "./components/category/Aboutus/AboutUs";
//Customize Category page
import Customize from "./components/category/Customize/Customize";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* Auth Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* User Routes */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/addresses" element={<Addresses />} />

            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />

            {/* Clothing Category Routes */}
            <Route
              path="/category/clothing/women"
              element={<ClothingWomen />}
            />
            <Route path="/category/clothing/men" element={<ClothingMen />} />
            <Route path="/category/clothing/kids" element={<ClothingKids />} />

            {/* Asscessory Category Routes */}
            <Route
              path="/category/accessories/women"
              element={<AccessoriesWomen />}
            />
            <Route
              path="/category/accessories/men"
              element={<AccessoriesMen />}
            />
            <Route
              path="/category/accessories/kids"
              element={<AccessoriesKids />}
            />

            {/* Aboutus Category routes */}
            <Route path="/about" element={<Aboutus />} />

            {/* Customize Category Routes */}
            <Route path="/category/customize" element={<Customize />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
