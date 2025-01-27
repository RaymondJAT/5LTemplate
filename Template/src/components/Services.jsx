import React from "react";

import logo from "../assets/5L_logo(red).png";
import { CgArrowLongRightL } from "react-icons/cg";

const Services = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative border border-amber-300">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="5L CEO"
              className="w-[350px] md:w-[550px] xl:w-[750px] drop-shadow-2xl border border-red-500"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="flex flex-col justify-center px-11 space-y-6 border border-blue-500">
              <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed lg:leading-normal py-1">
                Providing <span className="text-primary">High-Quality</span>{" "}
                Services
              </h1>
              <p className="text-justify font-bold">
                ⦿ Electrical Design and Installation <br />
                <br />
                ⦿ Installation and Repair of Surveillance Systems/CCTV <br />
                <br />
                ⦿ Structured Cabling Design and Installation <br />
                <br />
                ⦿ Supply and Installation of Air Conditioning Systems <br />
                <br />⦿ Fire Detection and Alarm Systems
              </p>

              {/* Button */}
              <div className="text-primary flex gap-8">
                <button className="flex items-center gap-2 pb-4 cursor-pointer">
                  See more <CgArrowLongRightL />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
