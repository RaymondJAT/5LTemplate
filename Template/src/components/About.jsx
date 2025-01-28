import React from "react";
import logo from "../assets/5L_logo(red).png";
import { CgArrowLongRight } from "react-icons/cg";

const About = () => {
  return (
    <>
      <section>
        <div className="container py-2 gap-x-2 grid grid-cols-1 md:grid-cols-2 min-h-[450px] relative border border-solid border-amber-300">
          {/* Text Box */}
          <div className="flex flex-col justify-center w-full p-4 md:p-6 border border-blue-500 bg-gray-50">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold leading-relaxed lg:leading-normal">
                What is{" "}
                <span className="text-primary">
                  5L Solutions Supply & Allied Service Corp.
                </span>
                ?{" "}
              </h1>
              <p className="text-justify">
                5L Solutions Supply and Allied Services specializes in providing
                technical equipment and IT services for offices, residences,
                companies, and manufacturing organizations across diverse
                industries. The company also designs, installs, and repairs
                electronic and electrical systems, including CCTV, cabling, air
                conditioning, and security systems, tailored to meet
                customer-specific requirements.
              </p>
              {/* Button */}
              <div className="text-primary flex gap-4">
                <a
                  href="about"
                  className="flex items-center gap-2 pb-2 cursor-pointer"
                >
                  Learn More <CgArrowLongRight />
                </a>
              </div>
            </div>
          </div>

          {/* Image Box */}
          <div className="flex justify-center items-center w-full p-4 border border-red-500 bg-white">
            <img
              src={logo}
              alt="5L CEO"
              className="w-[200px] md:w-[350px] xl:w-[450px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
