import React from "react";
import logo from "../assets/5L_logo(red).png";
import { CgArrowLongRight } from "react-icons/cg";

const Services = () => {
  return (
    <>
      <section>
        <div className="container py-2 gap-x-2 grid grid-cols-1 md:grid-cols-2 min-h-[450px] relative ">
          {/* Image Box */}
          <div className="flex justify-center items-center w-full p-4 bg-white">
            <img
              src={logo}
              alt="5L CEO"
              className="w-[200px] md:w-[350px] xl:w-[450px] drop-shadow-2xl"
            />
          </div>

          {/* Text Content Box */}
          <div className="flex flex-col justify-center w-full p-4 md:p-8 bg-gray-50">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold leading-relaxed lg:leading-normal py-1">
                Providing <span className="text-primary">High-Quality</span>{" "}
                Services
              </h1>
              <p className="text-justify font-bold text-sm md:text-base">
                ⦿ Electrical Design and Installation <br />
                ⦿ Installation and Repair of Surveillance Systems/CCTV <br />
                ⦿ Structured Cabling Design and Installation <br />
                ⦿ Supply and Installation of Air Conditioning Systems <br />⦿
                Fire Detection and Alarm Systems
              </p>
              {/* Button */}
              <div className="text-primary flex gap-4">
                <a
                  href="service"
                  className="flex items-center gap-2 pb-2 cursor-pointer"
                >
                  See more <CgArrowLongRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
