// src/App.jsx
import React, { useState } from "react";
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

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
    city: "",
    state:"",
    postalCode: "",
    country: "",
    phone: "",
    altPhone: "",
    addressType:""
  });
  const [savedAddresses, setSavedAddresses] = useState([
    {
      address: "Opposite to railway Quatars, Near Radha Krishna Mandir , Daily Bazzar",
      addressType: "Home",
      altPhone: "9878754356",
      city: "Naharkatia",
      country: "India",
      firstName: "Shivam",
      landmark: "Radha Krishna Mandir",
      lastName: "Lodh",
      phone: "0987654321",
      postalCode: "098765",
      state: "Assam",
    },
    {
      address: "BTM, 1st Stage, tavarekare Road, Old Madiwal, Gangothri Circle",
      addressType: "Others",
      altPhone: "9878754356",
      city: "Bengaluru",
      country: "India",
      firstName: "Shivam",
      landmark: "Gangothri Bar and Restaurent",
      lastName: "Lodh",
      phone: "0987654321",
      postalCode: "098765",
      state: "Karnataka",
    },
  ]);



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
            <Route path="address" element={<AllAddresses shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} savedAddresses={savedAddresses} setSavedAddresses={setSavedAddresses}/>} />
          </Route>  

          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} savedAddresses={savedAddresses} setSavedAddresses={setSavedAddresses}/>} />
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
