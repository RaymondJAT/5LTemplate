import React from "react";
import Navigationbar from "./components/NavBar/Navigationbar";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navigationbar />
        <About />
        <Services />
        <Products />
      </div>
    </>
  );
}

export default App;
