import Contact from "@/components/Contact";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "@/pages/Products";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products/:id' element={<Products />} />
    </Routes>
  );
};

export default Routers;
