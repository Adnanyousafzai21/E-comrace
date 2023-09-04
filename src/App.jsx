import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {

  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
