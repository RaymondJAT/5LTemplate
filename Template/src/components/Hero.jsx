import React from "react";
import { Carousel } from "antd";
import logo from "../assets/5L_logo-Red.png";

const Hero = () => {
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#000000",
    width: "100%",
  };

  return (
    <>
      <section>
        <div className="">
          <Carousel autoplay>
            <div>
              <img src={logo} alt="" style={contentStyle} />
            </div>
            <div>
              <img src={logo} alt="" style={contentStyle} />
            </div>
            <div>
              <img src={logo} alt="" style={contentStyle} />
            </div>
            <div>
              <img src={logo} alt="" style={contentStyle} />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
