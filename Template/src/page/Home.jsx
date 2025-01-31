import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import ProductSection from "../components/home/ProductSection";
import PartnerSection from "../components/home/PartnerSection";
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
