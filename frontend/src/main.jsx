import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage.jsx";
import { Productpage } from "./pages/Productpage.jsx";
import { Contactpage } from "./pages/Contactpage.jsx";
import { Cartlayout } from "./pages/cart/Cartlayout.jsx";
import { Cartpage } from "./pages/cart/Cartpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/kuku-shop/products" element={<Productpage />} />
          <Route path="/kuku-shop/contacts" element={<Contactpage />} />
        </Route>

        <Route path="/cart" element={<Cartlayout />}>
          <Route index element={<Cartpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
