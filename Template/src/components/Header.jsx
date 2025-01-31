import React from "react";
import bgImage from "../assets/company.jpg";

const Header = ({ title }) => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(10,0,0,0.8),rgba(10,0,0,1)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <>
      <section>
        <div
          className="w-full pt-32 md:pt-48 pb-6 md:pb-10"
          style={headerStyle}
        >
          <div className="container">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-mono">
              {title}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
