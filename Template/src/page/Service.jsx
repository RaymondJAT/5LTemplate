import React from "react";
import Navigationbar from "../components/NavBar/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <>
      <section>
        <Navigationbar />
        <Header title="Our Services" />
        <div className="container pt-36">
          <h1>Service Page</h1>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Service;
