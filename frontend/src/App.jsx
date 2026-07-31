import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Cursor from "./Components/Cursor";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import UserProfile from "./Pages/UserProfile";
import { Toaster } from "react-hot-toast";
import PlaceOrder from "./Pages/PlaceOrder";
import ConformOrder from "./Pages/ConformOrder";
import Success from "./Pages/Success";
import PageNotFound from "./Pages/404page";
import Faq from "./Pages/FAQ";
import FeedbackModal from "./Pages/Feedback";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/address-payment-placeOrder" element={<PlaceOrder />} />
        <Route path="/address-payment-placeOrder/confirmOrder" element={<ConformOrder />} ></Route>
        <Route path="/success" element={<Success />} ></Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="/feedback" element={<FeedbackModal />} ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster position="top-left" reverseOrder={false} />
    </>
  )   
}

export default App
/*
import Routes ,Route
import Navbar, Footer, ScrollToTop, Cursor
import Home, About, Product, Contact, Cart, Profile, UserProfile
import PlaceOrder, ConformOrder, Success, PageNotFound, Faq, FeedbackModal
import Toaster

function App() 
return 
cursor
Routes 
  Route home
  Route about
  Route product
  Route contact
  Route cart
  Route profile
  Route user
  Route address-payment-placeOrder
  Route address-payment-placeOrder/confirmOrder
  Route success
  Route faq
  Route feedback
  Route pagenotfound

  footer
  scrollToTop
  toaster
*/