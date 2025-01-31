import React from "react";
import Navigationbar from "../components/NavBar/Navigationbar";
import Header from "../components/Header";
import Faqs from "../components/Faqs";
import ceo from "../assets/5L-ceo.jpg";
import Footer from "../components/Footer";
import DragCards from "../components/dragCard/DragCards";

const About = () => {
  return (
    <>
      <section>
        <Navigationbar />
        <Header title="Who we are" />
        <div className="container pt-10 pb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Text Box */}
          <div className="flex flex-col justify-center w-full p-12 bg-gray-50 shadow-lg border border-gray-200">
            <div className="space-y-15 text-center md:text-left">
              <h1 className="text-2xl text-primary lg:text-3xl font-mono font-bold leading-relaxed lg:leading-8">
                5L Solutions Supply & Allied Service Corp.
              </h1>
              <p className="text-justify font-mono">
                The company was incorporated on September 29, 2015. Although
                still a young company, it serviced a sizeable number of
                residences and stores during its first year of operations, with
                a workforce of twenty (20) skilled professionals and an initial
                reach of over 200 stores located in the Luzon and Visayas
                regions of the Philippines. Today, our company has grown to more
                than 100 employees and serves over 2,000 stores and companies
                nationwide, providing technical equipment and services in the
                field of Information Technology for offices, residences,
                companies, and manufacturing organizations across various
                industries. In addition to service engagements, the company has
                the capability to design, install, and repair electronic and
                electrically powered devices and equipment, such as CCTV
                systems, cabling, air conditioning systems, and security
                systems, customized to meet customer requirements.
              </p>
            </div>
          </div>

          {/* Image Box */}
          <div className="flex justify-center items-center w-full p-6 bg-white shadow-lg border border-gray-200">
            <img
              src={ceo}
              alt="5L CEO"
              className="w-[450px] md:w-[550px] xl:w-[750px] h-auto max-h-[600px] object-cover drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="container flex justify-center">
          <DragCards />
        </div>
        <Faqs />
        <Footer />
      </section>
    </>
  );
};

export default About;
