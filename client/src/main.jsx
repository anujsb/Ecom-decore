import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";

import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Info from "./components/Info";
// import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="justify-center items-center scroll-smooth w-full">
              <Navbar />
              <Hero />
              <Footer />
            </div>
          }
        />
        <Route 
          path="/Contact"
          element={
            <div>
              <Navbar/>
              <Contact/>
              <Footer/>
            </div>
          }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
