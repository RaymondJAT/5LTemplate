import React from "react";

import logo from "../assets/5L_logo(red).png";
import { CgArrowLongRightL } from "react-icons/cg";

const About = () => {
  return (
    <>
      <section className="border border-red-600">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative border border-solid border-amber-300">
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-10 border border-blue-500">
              <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed lg:leading-normal">
                What is{" "}
                <span className="text-primary">
                  5L SOLUTIONS SUPPLY & ALLIED SERVICE CORP.
                </span>
                ?{" "}
              </h1>
              <p className="text-justify ps-5 pe-14">
                5L Solutions Supply and Allied Services specializes in providing
                technical equipment and IT services for offices, residences,
                companies, and manufacturing organizations across diverse
                industries. The company also designs, installs, and repairs
                electronic and electrical systems, including CCTV, cabling, air
                conditioning, and security systems, tailored to meet
                customer-specific requirements
              </p>

              {/* button */}
              <div className="text-primary flex gap-8 ">
                <button className="flex items-center gap-2 py-2 cursor-pointer">
                  Learn More <CgArrowLongRightL />
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="5L CEO"
              className="w-[350px] md:w-[550px] xl:w-[750px] drop-shadow-2xl border border-red-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
