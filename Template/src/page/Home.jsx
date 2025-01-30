import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProductSection from "../components/ProductSection";
import PartnerSection from "../components/PartnerSection";
import Footer from "../components/Footer";
import Navigationbar from "../components/NavBar/Navigationbar";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navigationbar />
        <Hero />
        <AboutSection />
        <ServiceSection />
        <ProductSection />
        <PartnerSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
