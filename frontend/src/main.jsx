import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage.jsx";
import { Productpage } from "./pages/Productpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/contacts" element={<Contactpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
