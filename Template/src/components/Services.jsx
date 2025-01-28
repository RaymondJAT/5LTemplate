import React from "react";
import logo from "../assets/5L_logo(red).png";
import background from "../assets/try.png";
import { CgArrowLongRight } from "react-icons/cg";

const Services = () => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "inherit",
    innerWidth: "100%",
  };

  return (
    <>
      <section className="bg-background" style={style}>
        <div className="container pb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Box */}
          <div className="flex justify-center items-center w-full p-6 bg-white shadow-lg border border-gray-200">
            <img
              src={logo}
              alt="5L CEO"
              className="w-[200px] md:w-[350px] xl:w-[450px] drop-shadow-2xl"
            />
          </div>

          {/* Text Box */}
          <div className="flex flex-col justify-center w-full p-6 bg-gray-50 shadow-lg border border-gray-200">
            <div className="space-y-4 text-center md:text-left ">
              <h1 className="text-2xl lg:text-3xl font-bold leading-relaxed lg:leading-normal py-1 font-mono">
                Providing <span className="text-primary">High-Quality</span>{" "}
                Services
              </h1>
              <p className="text-justify font-bold text-sm md:text-base font-mono">
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
                  className="flex items-center gap-2 pb-2 cursor-pointer font-mono"
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
