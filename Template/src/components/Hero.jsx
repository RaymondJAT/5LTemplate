import React from "react";
import { Carousel } from "antd";
import logo from "../assets/5L_logo-Red.png";

const Hero = () => {
  const contentStyle = {
    height: "550px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#000000",
  };

  return (
    <>
      <section>
        <div className="">
          <Carousel autoplay>
            <div>
              <img src={logo} alt="" className="bg-black w-full" />
            </div>
            <div>
              <img src={logo} alt="" className="bg-black w-full" />
            </div>
            <div>
              <img src={logo} alt="" className="bg-black w-full" />
            </div>
            <div>
              <img src={logo} alt="" className="bg-black w-full" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
