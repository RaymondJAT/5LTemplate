import React from "react";
import Navigationbar from "../components/NavBar/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <>
      <Navigationbar />
      <Header title="Products" />
      <section>
        <div className="container pt-36 ">
          <h1>Product Page</h1>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Product;
