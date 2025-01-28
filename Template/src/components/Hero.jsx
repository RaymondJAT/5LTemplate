import React from "react";
import { Carousel } from "antd";
import logo from "../assets/5L_logo-Red.png";

const Hero = () => {
  return (
    <section>
      <div className="w-full">
        <Carousel autoplay>
          {/* Slide 1 */}
          <div className="flex justify-center items-center bg-black h-[300px] sm:h-[400px] md:h-[450px]">
            {/* <img
              src={logo}
              alt="5L Logo"
              className="object-contain max-h-full max-w-full"
            /> */}
          </div>
          {/* Slide 2 */}
          <div className="flex justify-center items-center bg-black h-[300px] sm:h-[400px] md:h-[450px]">
            {/* <img
              src={logo}
              alt="5L Logo"
              className="object-contain max-h-full max-w-full"
            /> */}
          </div>
          {/* Slide 3 */}
          <div className="flex justify-center items-center bg-black h-[300px] sm:h-[400px] md:h-[450px]">
            {/* <img
              src={logo}
              alt="5L Logo"
              className="object-contain max-h-full max-w-full"
            /> */}
          </div>
          {/* Slide 4 */}
          <div className="flex justify-center items-center bg-black h-[300px] sm:h-[400px] md:h-[450px]">
            {/* <img
              src={logo}
              alt="5L Logo"
              className="object-contain max-h-full max-w-full"
            /> */}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
