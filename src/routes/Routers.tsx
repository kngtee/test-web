import React from "react";
import Contact from "@/components/Contact";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "@/pages/Products";
import Claim from "../components/MakeClaim/Claim";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products/:id' element={<Products />} />
      <Route path='/claim' element={<Claim />} />
    </Routes>
  );
};

export default Routers;
