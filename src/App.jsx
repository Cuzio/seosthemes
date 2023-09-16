import React, { useState } from "react";
import Head from "./components/Head";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Scortcodes from "./pages/Scortcodes";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import { FaCartArrowDown } from "react-icons/fa";
import "./app.css";
import Footer from "./components/Footer";
import { createContext } from "react";

export const AppContext = createContext();
const App = () => {
  const [move, setMove] = useState(0);

  return (
    <div>
      {/* <div className="arrow text-white fs-1 fw-bolder d-flex justify-content-center align-items-center">
        <FaCartArrowDown /> <h2 className="mx-2">Buy Now $49.99</h2>
      </div> */}
      <AppContext.Provider value={{ move, setMove }}>
        <Head />
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/scortcodes" element={<Scortcodes />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </AppContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
