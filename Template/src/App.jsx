import React from "react";
import Navigationbar from "./components/NavBar/Navigationbar";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navigationbar />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
