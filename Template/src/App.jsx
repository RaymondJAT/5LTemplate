import React from "react";
import Navigationbar from "./components/NavBar/Navigationbar";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navigationbar />
        <About />
      </div>
    </>
  );
}

export default App;
