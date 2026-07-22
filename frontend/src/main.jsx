import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import FeedbackButton from "./Components/Feedbtn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
        <FeedbackButton />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
/* *{
  color: rgb(200, 180, 219);
  color: rgb(250, 200, 221);
  color: rgb(250, 175, 204);
  color: rgb(190, 224, 254);
  color: rgb(250, 210, 255);
} */