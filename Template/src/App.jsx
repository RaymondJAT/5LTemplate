import React from "react";
import Navigationbar from "./components/NavBar/Navigationbar";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Hero from "./components/Hero";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navigationbar />
        <Hero />
        <About />
        <Services />
        <Products />
        <Partners />
      </div>
    </>
  );
}

export default App;
