// src/App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import CartPage from "./pages/CartPage";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import ForgotPassword from "./pages/ForgotPassword";
import ProfileLayout from "./components/Profile/ProfileLayout";
import AllAddresses from "./components/Profile/AllAddresses";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot_password" element={<ForgotPassword />} />
          {/* <Route path="profile" element={<Profile />} />
          
          <Route path="profile_layout" element={<ProfileLayout />} />   */}

          {/* Profile Section with Nested Routes */}
          <Route path="profile_layout" element={<ProfileLayout />}>
            <Route index element={<Profile />} /> {/* Default route */}
            <Route path="address" element={<AllAddresses />} />
          </Route>  

          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />}/>
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrderPage />} />
        </Route>
          {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage/>}/>
          <Route path="users" element={<UserManagement/>}/>
          <Route path="products" element={<ProductManagement/>}/>
          <Route path="products/:id/edit" element={<EditProductPage/>}/>
          <Route path="orders" element={<OrderManagement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
