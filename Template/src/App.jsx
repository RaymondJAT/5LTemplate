import React from "react";
import Navigationbar from "./components/NavBar/Navigationbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navigationbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
