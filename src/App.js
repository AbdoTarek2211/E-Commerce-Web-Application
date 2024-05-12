import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import OurStore from "./Pages/Store/OurStore.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import Login from "./Pages/Login/Login.jsx";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import ResetPassword from "./Pages/ResetPassword/ResetPassword.jsx";
import BlogDetails from "./Pages/BlogDetails/BlogDetails.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy.jsx";
import ShippingPolicy from "./Pages/ShippingPolicy/ShippingPolicy.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions.jsx";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import { PrivateRoutes } from "./routing/privateRoutes.js";
import { OpenRoutes } from "./routing/openRoutes.js";
import Orders from "./Pages/Orders/Orders.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="store/product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route
              path="wishlist"
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path="signup"
              element={
                <OpenRoutes>
                  <Signup />
                </OpenRoutes>
              }
            />
            <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-conditions" element={<TermsAndConditions />} />
            <Route
              path="cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route
              path="my-orders"
              element={
                <PrivateRoutes>
                  <Orders />
                </PrivateRoutes>
              }
            />
            <Route
              path="my-profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="checkout"
              element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
